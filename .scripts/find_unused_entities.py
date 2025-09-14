#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re, os, csv
from pathlib import Path

CONFIG = Path("/config")
OUTDIR = CONFIG / ".logs"
OUTDIR.mkdir(parents=True, exist_ok=True)

# --- Chemins à ignorer (sources de faux positifs) ---
IGNORE_DIRS_EXACT = {
    ".git", ".storage", "www", "deps", ".venv", ".cloud", ".ssl",
    "custom_components/ui_lovelace_minimalist",
    "custom_components/xiaomi_miot",
    "blueprints/automation",
    "translations",
}
def path_is_ignored(p: Path) -> bool:
    # ignore si le chemin contient un dossier explicitement listé
    parts = set(p.parts)
    for ig in IGNORE_DIRS_EXACT:
        if ig in parts or str(p).replace("\\","/").find(ig + "/") != -1:
            return True
    return False

# --- Extensions scannées ---
EXTS = {".yaml", ".yml", ".json", ".txt"}

# --- Domains HA ---
DOMAINS = {
    "sensor","binary_sensor","switch","light","climate","person","device_tracker",
    "input_boolean","input_number","input_text","camera","media_player","button",
    "number","select","cover","fan","alarm_control_panel","update","weather","group",
}

# --- Entités à ignorer explicitement (zones/groupes Hue, etc.) ---
IGNORE_ENTITIES = {
    "light.zone_eric",
    "light.zone_gege",
}

# --- Patterns d'entités à ignorer (services/placeholders) ---
IGNORE_ENTITY_PATTERNS = re.compile(
    r"("
    # services génériques
    r"\.(toggle|turn_on|turn_off|stop_cover|open_cover_tilt|close_cover_tilt|select_option|install|oscillate|set_preset_mode|media_.*|volume_.*)"
    r"|"
    # placeholders/attributs fréquents (ULM & autres)
    r"\.(name|state|attributes|source|brightness)$"
    r"|^light\.zone_"
    r")"
)

# --- Fichiers "sources" (où l'on définit souvent des entités) ---
SOURCE_HINT = {
    "template", "utility_meter", "command_line", "sensors", "sensor",
    "statistics", "integration", "rest", "mqtt",
}
SOURCE_FILES_EXACT = {
    "configuration.yaml","sensors.yaml","template.yaml","utility_meter.yaml",
    "command_line.yaml","group.yaml","input_number.yaml","input_boolean.yaml",
    "scripts.yaml","scenes.yaml","automations.yaml","devices.yaml",
}

# --- Regex d'entités ---
ENTITY_RE = re.compile(r"\b(" + "|".join(DOMAINS) + r")\.([a-zA-Z0-9_]+)\b")

def iter_files():
    for p in CONFIG.rglob("*"):
        if not p.is_file():
            continue
        if p.suffix.lower() not in EXTS:
            continue
        if path_is_ignored(p):
            continue
        yield p

def extract_referenced_entities():
    refs = set()
    files_map = {}
    for p in iter_files():
        try:
            text = p.read_text(encoding="utf-8", errors="ignore")
        except Exception:
            continue
        for m in ENTITY_RE.finditer(text):
            ent = f"{m.group(1)}.{m.group(2)}"
            # filtre services/placeholders
            if IGNORE_ENTITY_PATTERNS.search(ent):
                continue
            # ignore entités explicitement
            if ent in IGNORE_ENTITIES:
                continue
            refs.add(ent)
            files_map.setdefault(ent, set()).add(str(p.relative_to(CONFIG)))
    return refs, files_map

def is_source_file(path: Path) -> bool:
    name = path.name.lower()
    stem = path.stem.lower()
    if name in SOURCE_FILES_EXACT:
        return True
    if any(key in name or key in stem for key in SOURCE_HINT):
        return True
    if "templates" in path.parts:
        return True
    return False

def extract_defined_entities():
    defs = set()
    files_map = {}
    for p in iter_files():
        if not is_source_file(p):
            continue
        try:
            text = p.read_text(encoding="utf-8", errors="ignore")
        except Exception:
            continue
        for m in ENTITY_RE.finditer(text):
            ent = f"{m.group(1)}.{m.group(2)}"
            # même filtrage ici pour éviter de "définir" un service par erreur
            if IGNORE_ENTITY_PATTERNS.search(ent):
                continue
            if ent in IGNORE_ENTITIES:
                continue
            defs.add(ent)
            files_map.setdefault(ent, set()).add(str(p.relative_to(CONFIG)))
    return defs, files_map

def write_csv(path, rows, headers):
    with open(path, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f, delimiter=";")
        w.writerow(headers)
        for r in rows:
            w.writerow(r)

def main():
    print("🔎 Scan filtré en cours…")
    referenced, ref_map = extract_referenced_entities()
    defined, def_map = extract_defined_entities()

    # A) Référencées mais non définies (runtime/intégrations possibles OU vraies typos)
    missing = sorted([e for e in referenced if e not in defined])

    # B) Définies mais jamais utilisées (candidats ménage)
    unused = sorted([e for e in defined if e not in referenced])

    write_csv(OUTDIR / "referenced_but_missing.csv",
              [(e, ", ".join(sorted(ref_map.get(e, [])))) for e in missing],
              ["entity_id", "files_referencing"])

    write_csv(OUTDIR / "defined_but_unused.csv",
              [(e, ", ".join(sorted(def_map.get(e, [])))) for e in unused],
              ["entity_id", "files_defining"])

    print(f"✅ Référencées (filtrées): {len(referenced)}")
    print(f"✅ Définies (filtrées)   : {len(defined)}")
    print(f"⚠️  Utilisées mais introuvables: {len(missing)} -> .logs/referenced_but_missing.csv")
    print(f"🧹 Définies mais jamais utilisées: {len(unused)} -> .logs/defined_but_unused.csv")
    print("\nℹ️ Astuce: ajoute d'autres entités à IGNORE_ENTITIES si besoin (helpers/zones).")

if __name__ == "__main__":
    main()
