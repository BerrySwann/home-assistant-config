# 🧠 BASE DE CONTEXTE EXPERT HOME ASSISTANT (BerrySwann)
*Dernière mise à jour : 2026-01-03*

---

## 📏 RÈGLES DE TITRAGE YAML (HIÉRARCHIE VISUELLE)
**Ces règles s'appliquent exclusivement aux fichiers de configuration (.yaml).**

### 1. Titre Principal (Section / Série / Plateforme)
- **Format** : Boîte ASCII avec coins arrondis (`╭`, `─`, `╮`, `│`, `╰`, `╯`).
- **Largeur** : 74 caractères (pleine largeur).
- **Style** : Texte en MAJUSCULES, préfixé par le type de composant.

### 2. Titre Secondaire (Pièce / Pôle / Sous-groupe)
- **Format** : Boîte ASCII avec coins carrés (`┌`, `─`, `┐`, `│`, `└`, `┘`).
- **Largeur** : 37 caractères (moitié du titre principal).
- **Style** : Texte en MAJUSCULES, respectant la numérotation des pièces (1 à 10).

---

## 🛠️ RÈGLES DE CODAGE STRICTES

- **AUTOMATIONS** : 
  - ⛔ **INTERDIT** : Jamais d' `id:` au niveau global.
  - ✅ **OBLIGATOIRE** : `alias` en MAJUSCULES pour chaque bloc (trigger, condition, action).
  - 🆗 **AUTORISÉ** : `id:` permis UNIQUEMENT à l'intérieur des triggers ou actions.
- **ENTITÉS** : 
  - `name`: "Nom Lisible" / `unique_id`: nom_lisible (Minuscules/Underscores).
- **MODIFICATIONS** : 
  - Annoter chaque ligne modifiée : `# "[L...] modif"`.
  - Bloc final obligatoire : `# annotations_log:`.

---

# 🎨 PALETTE DE COULEURS OFFICIELLES (HEX & RGB)

Indispensable pour la cohérence entre ApexCharts, Bubble-Card et Mushroom.

| État / Type   | HEX       | RGB             | Utilisation type      |
| :------------ | :-------- | :-------------- | :-------------------- |
| **Primary**   | `#03a9f4` | `3, 169, 244`   | Icônes HA, Titres     |
| **Success**   | `#0f9d58` | `15, 157, 88`   | Actif, Normal, OK     |
| **Warning**   | `#ff9800` | `255, 152, 0`   | Standby, Attention    |
| **Error**     | `#f44336` | `244, 67, 54`   | Alerte, Critique, Off |
| **Info**      | `#2196f3` | `33, 150, 243`  | Infos, Nuages, Réseau |
| **Inactive**  | `#44739e` | `68, 115, 158`  | Éteint, Absent        |
| **Active**    | `#fdd835` | `253, 216, 53`  | Éclairage, Chauffage  |
| **Text**      | `#212121` | `33, 33, 33`    | Polices, Bordures     |

---

## 🏠 ORGANISATION DES PIÈCES ET PÔLES

**ORDRE DES PIÈCES (1 À 10)** :  
1. ENTRÉE | 2. CELLIER | 3. TOILETTE | 4. SALON | 5. CUISINE | 6. COULOIR | 7. BUREAU | 8. SDB | 9. CHAMBRE | 10. STANDBY.

**ORDRE DES PÔLES (1 À 3)** :  
1. PRISES | 2. CHAUFFAGE/CLIM | 3. ÉCLAIRAGE.

---

## 🔌 DÉTAILS DES ÉQUIPEMENTS PAR PÔLE

### 1. Pôle Prises
- **1. ENTRÉE** : box_internet, horloge.
- **4. SALON** : pc_s_gege, salon_chargeur.
- **5. CUISINE** : micro_ondes, lave_linge, lave_vaisselle, airfryer, four_plaque, frigo, congel.
- **7. BUREAU** : bureau_pc, fer.
- **9. CHAMBRE** : tete_de_lit, tv.
- **10. STANDBY** : all_standby.

### 2. Pôle Chauffage / Clim
- **4. SALON** : clim_salon.
- **5. CUISINE** : radiateur_cuisine.
- **7. BUREAU** : clim_bureau.
- **8. SDB** : soufflant, seche_serv.
- **9. CHAMBRE** : clim_chambre.

### 3. Pôle Éclairage
- **1. ENTRÉE**  : Hue White.
- **4. SALON**   : Table, Ambiance 1, 2, 3, Color 1.
- **5. CUISINE** : Hue White.
- **6. COULOIR** : Hue White.
- **7. BUREAU**  : Play 1, 2, 3, White 1, 2.
- **8. SDB**     : Miroir Sonoff, Hue White.
- **9. CHAMBRE** : Hue White 1, 2, Color Zone-1, Color Zone-2.

---

## 🔗 INDEX INTÉGRAL DES FICHIERS SOURCES (RAW GITHUB)

### 📂 Configuration & Scripts
- [configuration.yaml](https://raw.githubusercontent.com/BerrySwann/home-assistant-config/main/configuration.yaml)
- [automations.yaml](https://raw.githubusercontent.com/BerrySwann/home-assistant-config/main/automations.yaml)
- [scripts.yaml](https://raw.githubusercontent.com/BerrySwann/home-assistant-config/main/scripts.yaml)
- [sensors.yaml](https://raw.githubusercontent.com/BerrySwann/home-assistant-config/main/sensors.yaml)
- [utility_meter.yaml](https://raw.githubusercontent.com/BerrySwann/home-assistant-config/main/utility_meter.yaml)
- [ha_git_backup.sh](https://raw.githubusercontent.com/BerrySwann/home-assistant-config/main/.scripts/ha_git_backup.sh)

### 📂 Séries Templates (01 à 18)
- **Série 01 (Météo/Foudre)** : 01_2_meteo_foudre_card.yaml
- **Série 03 (Climat/DUT)** : 03_01_energie_clim_radiateur_card.yaml
- **Série 17 (Diagnostic)** : 17_1_diag_conso_jour_en_cours.yaml