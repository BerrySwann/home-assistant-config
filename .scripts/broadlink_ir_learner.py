import json
import time
from typing import Dict, Any

# ==============================================================================
# 🎯 Configuration (A ADAPTER)
# ==============================================================================

# Assurez-vous que ce fichier JSON contient la structure de votre télécommande,
# même si les codes sont encore vides ou manquants.
INPUT_JSON_PATH = '1108_updated_missing_temps.json' 
OUTPUT_JSON_PATH = '1108_updated_complete.json'

# Définition des modes, vitesses et plages de températures
# Ces listes guident le script dans les commandes à capturer.
MODES = ["cool", "heat", "dry", "fan_only"]
FANS = ["auto", "high", "med", "low", "quiet"]
# Plage de température : de 16°C à 32°C (adapté des données Hitachi)
TEMPS = list(map(str, range(16, 33))) 

# ==============================================================================

def load_json_data(file_path: str) -> Dict[str, Any] | None:
    """Charge les données JSON ou initialise une structure de base."""
    try:
        with open(file_path, 'r') as f:
            data = json.load(f)
            # S'assurer que la clé 'commands' existe
            if 'commands' not in data:
                data['commands'] = {}
        print(f"Fichier de configuration chargé depuis {file_path}.")
    except FileNotFoundError:
        print(f"⚠️ Fichier '{file_path}' non trouvé. Création d'une structure de base vide.")
        data = {"supportedModes": MODES, "commands": {}}
    except json.JSONDecodeError:
        print(f"🚨 ERREUR: Impossible de décoder le fichier JSON à {file_path}. Vérifiez sa syntaxe.")
        return None
    return data

def learn_ir_command(mode: str, ventil: str, temp: str) -> str | None:
    """Guide l'utilisateur pour la capture manuelle du code IR (via input)."""
    
    # Nom de la commande à capturer, selon le mode
    if mode == "off":
        command_name = "OFF"
    elif mode == "fan_only":
        command_name = f"{mode} - {ventil}"
    else:
        command_name = f"{mode} - {ventil} - {temp}°C"
    
    print(f"\n=========================================================")
    print(f"   Capture requise : {command_name}")
    print(f"=========================================================")
    
    print("   1. Sur Home Assistant, lancez le service remote.learn_command.")
    print(f"   2. Appuyez sur la touche de votre télécommande correspondant à '{command_name}'.")
    print("   3. Récupérez le code Base64 capturé (dans les outils de développement HA, attribut 'last_code' ou fichier de config Broadlink).")

    # L'utilisateur colle le code ici
    ir_code = input(f"   > Collez ici le code Base64 capturé pour '{command_name}' (ou laissez vide pour sauter) : ")
    
    if not ir_code.strip():
        print("   ❌ Commande sautée. Le code est vide.")
        return None
        
    if not ir_code.strip().startswith('Jg'): 
        print("   ⚠️ Avertissement: Le code ne ressemble pas à un code Broadlink Base64 (ne commence pas par 'Jg').")

    return ir_code.strip()

# ==============================================================================
# 🚀 Logique Principale
# ==============================================================================

data = load_json_data(INPUT_JSON_PATH)

if data is None:
    exit(1)

print("\n--- Démarrage de la séquence de vérification et de capture ---")

# 1. Gérer la commande OFF (si absente)
off_code = data['commands'].get('off')
# On vérifie si la commande 'off' n'existe pas ou si le code est trop court (pour exclure les placeholders vides)
if not off_code or len(off_code) < 10: 
    code = learn_ir_command("off", "off", "off")
    if code:
        data['commands']['off'] = code

# 2. Boucles pour les combinaisons Mode/Fan/Temp
for mode in MODES:
    # S'assurer que le mode a une entrée dans 'commands'
    data['commands'].setdefault(mode, {})
    
    for ventil in FANS:
        # Traitement pour les modes avec température (Cool, Heat, Dry)
        if mode in ["cool", "heat", "dry"]:
            data['commands'][mode].setdefault(ventil, {}) # S'assurer que la vitesse de ventilation existe
            
            for temp in TEMPS:
                # Récupérer le code existant
                existing_code = data['commands'][mode][ventil].get(temp)
                
                # Vérification pour sauter les commandes déjà capturées
                if existing_code and len(existing_code) > 10: 
                    print(f"⏩ Déjà présent : {mode}/{ventil}/{temp}°C")
                    continue
                    
                code = learn_ir_command(mode, ventil, temp)
                
                if code:
                    data['commands'][mode][ventil][temp] = code
        
        # Traitement spécifique pour le mode FAN_ONLY (sans clé de température variable)
        elif mode == "fan_only":
            # Pour FAN_ONLY, on utilise une clé 'default' ou 'unique' si Broadlink n'exige pas de température
            temp_key = "default" 
            
            existing_code = data['commands'][mode].get(ventil, {}).get(temp_key)

            if existing_code and len(existing_code) > 10: 
                print(f"⏩ Déjà présent : {mode}/{ventil}")
                continue
            
            # Pour la lecture, on utilise un placeholder 'FAN' à la place de la température
            code = learn_ir_command(mode, ventil, "FAN") 
            
            if code:
                data['commands'][mode].setdefault(ventil, {})[temp_key] = code


# --- Sauvegarde du JSON mis à jour ---
try:
    with open(OUTPUT_JSON_PATH, 'w') as f:
        json.dump(data, f, indent=2)
    print(f"\n\n✅ Le processus d'apprentissage est terminé.")
    print(f"Fichier JSON mis à jour avec les codes capturés et sauvegardé sous : {OUTPUT_JSON_PATH}")
except IOError as e:
    print(f"🚨 ERREUR: Impossible d'écrire dans le fichier {OUTPUT_JSON_PATH}. Détails: {e}")