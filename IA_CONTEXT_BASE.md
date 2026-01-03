# 🧠 BASE DE CONTEXTE EXPERT HOME ASSISTANT (BerrySwann)
Dernière mise à jour : 2026-01-03

# ╭──────────────────────────────────────────────────────────────────────────╮
# │ RÈGLES DE TITRAGE YAML (HIÉRARCHIE VISUELLE)                             │
# ╰──────────────────────────────────────────────────────────────────────────╯

### 1. TITRE PRINCIPAL (Section / Série / Plateforme)
- **Format** : Boîte ASCII avec coins arrondis.
- **Largeur** : 74 caractères (pleine largeur).
- **Style** : Texte en MAJUSCULES, préfixé par le type de composant (ex: SENSOR, AUTOMATION).
- **Caractères** : `╭`, `─`, `╮`, `│`, `╰`, `╯`.

### 2. TITRE SECONDAIRE (Pièce / Pôle / Sous-groupe)
- **Format** : Boîte ASCII avec coins carrés.
- **Largeur** : 37 caractères (exactement la moitié du titre principal).
- **Style** : Texte en MAJUSCULES, respectant la numérotation des pièces (1 à 10).
- **Caractères** : `┌`, `─`, `┐`, `│`, `└`, `─`, `┘`.

# ╭──────────────────────────────────────────────────────────────────────────╮
# │ RÈGLES DE CODAGE STRICTES                                                │
# ╰──────────────────────────────────────────────────────────────────────────╯

- **AUTOMATIONS** : 
  - ⛔ **INTERDIT** : Jamais d' "id:" au niveau global.
  - ✅ **OBLIGATOIRE** : "alias" en MAJUSCULES pour chaque bloc (trigger, condition, action).
  - 🆗 **AUTORISÉ** : "id:" permis UNIQUEMENT à l'intérieur des triggers ou actions.
- **ENTITÉS** : 
  - `name`: "Nom Lisible" (Majuscules/Espaces).
  - `unique_id`: nom_lisible (Minuscules/Underscores).
- **MODIFICATIONS** : 
  - Annoter chaque ligne modifiée : `# "[L...] modif"`.

# ╭──────────────────────────────────────────────────────────────────────────╮
# │ ORGANISATION DES PIÈCES ET PÔLES                                         │
# ╰──────────────────────────────────────────────────────────────────────────╯

# ┌───────────────────────────────────┐
# │ ORDRE DES PIÈCES (1 À 10)         │
# └───────────────────────────────────┘
1. ENTRÉE | 2. CELLIER | 3. TOILETTE | 4. SALON | 5. CUISINE | 6. COULOIR | 7. BUREAU | 8. SDB | 9. CHAMBRE | 10. STANDBY.

# ┌───────────────────────────────────┐
# │ ORDRE DES PÔLES (1 À 3)           │
# └───────────────────────────────────┘
1. PRISES | 2. CHAUFFAGE/CLIM | 3. ÉCLAIRAGE.

# ╭──────────────────────────────────────────────────────────────────────────╮
# │ DÉTAILS DES ÉQUIPEMENTS PAR PÔLE                                         │
# ╰──────────────────────────────────────────────────────────────────────────╯

# ┌───────────────────────────────────┐
# │ 1. PÔLE PRISES                    │
# └───────────────────────────────────┘
- **1. ENTRÉE** : box_internet, horloge.
- **4. SALON** : pc_s_gege, salon_chargeur.
- **5. CUISINE** : micro_ondes, lave_linge, lave_vaisselle, airfryer, four_plaque, frigo, congel.
- **7. BUREAU** : bureau_pc, fer.
- **9. CHAMBRE** : tete_de_lit, tv.
- **10. STANDBY** : all_standby.

# ┌───────────────────────────────────┐
# │ 2. PÔLE CHAUFFAGE / CLIM          │
# └───────────────────────────────────┘
- **4. SALON** : clim_salon.
- **5. CUISINE** : radiateur_cuisine.
- **7. BUREAU** : clim_bureau.
- **8. SDB** : soufflant, seche_serv.
- **9. CHAMBRE** : clim_chambre.

# ┌───────────────────────────────────┐
# │ 3. PÔLE ÉCLAIRAGE                 │
# └───────────────────────────────────┘
- **1. ENTRÉE** : Hue White.
- **4. SALON** : Table, Ambiance 1, 2, 3, Color 1.
- **5. CUISINE** : Hue White.
- **6. COULOIR** : Hue White.
- **7. BUREAU** : Play 1, 2, 3, White 1, 2.
- **8. SDB** : Miroir Sonoff, Hue White.
- **9. CHAMBRE** : White 1, 2, Color Eric, Color Gege.

# ╭──────────────────────────────────────────────────────────────────────────╮
# │ INDEX INTÉGRAL DES FICHIERS SOURCES (RAW GITHUB)                         │
# ╰──────────────────────────────────────────────────────────────────────────╯

### 📂 Configuration & Scripts
- https://raw.githubusercontent.com/BerrySwann/home-assistant-config/main/configuration.yaml
- https://raw.githubusercontent.com/BerrySwann/home-assistant-config/main/automations.yaml
- https://raw.githubusercontent.com/BerrySwann/home-assistant-config/main/scripts.yaml
- https://raw.githubusercontent.com/BerrySwann/home-assistant-config/main/sensors.yaml
- https://raw.githubusercontent.com/BerrySwann/home-assistant-config/main/utility_meter.yaml
- https://raw.githubusercontent.com/BerrySwann/home-assistant-config/main/.scripts/ha_git_backup.sh

### 📂 Séries Templates (01 à 18)
- **Série 01 (Météo/Foudre)** : 01_1_meteo_alertes, 01_2_meteo_foudre...
- **Série 03 (Climat/DUT)** : 03_01_energie_clim, 03_05_clim_logique...
- **Série 17 (Diagnostic)** : 17_1_diag_conso_jour, 17_1_diag_conso_mois...