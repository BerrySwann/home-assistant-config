# 🧠 BASE DE CONTEXTE EXPERT HOME ASSISTANT (BerrySwann)
*Dernière mise à jour : 2026-01-03*

---

# 🏠 STRUCTURE DU LOGEMENT
- **Localisation :** 06140 Vence (Altitude ~360m).
- **Type :** Immeuble début 1980, 4ème et dernier étage (Sous toiture).
- **Caractéristiques :** Traversant SUD/NORD, Simple vitrage partout.
- **VMC :** Présente en SDB (Crée une dépression thermique).

# 📏 DIMENSIONS & PÔLES (ORDRE OFFICIEL)
1. **SALON (Sud) :** 6.52m x 3.97m (25.88 m²). 
   - *Équipement :* Split mural, Volet motorisé (Auto: 7h30 -> Coucher soleil / Fermé si Absence / Fermé si >34°C).
   - *Note :* Apport solaire crucial dès 15h.
2. **CUISINE (Nord) :** Surface non définie (~10m²).
   - *Équipement :* Bain d'huile (Prise connectée). 
   - *Auto :* L-Ma-Me-Je (4h45-7h), Ve-Sa-Di (5h45-8h).
3. **BUREAU (Nord) :** 3.95m x 2.67m (10.55 m²).
   - *Équipement :* Split mural, Volet motorisé. 
   - *Auto :* Ouvert uniquement si T° Ext [18°C - 25°C].
4. **SDB (Interne) :** Pas de fenêtre.
   - *Équipement :* Soufflant (2x1000W), Sèche-serviette (150W).
   - *Auto :* Soufflant OFF si >23°C. Sèche-serviette 1h après douche.
5. **CHAMBRE (Nord) :** 3.95m x 2.85m (11.26 m²).
   - *Équipement :* Split mural. Pas de volet motorisé.
   - *Note :* Forte dissipation thermique (DUT élevé).

# 🌡️ STRATÉGIE THERMIQUE & MONITORING
- **Sondes :** Thermostats SONOFF dans TOUTES les pièces + T° Extérieure.
- **Mode Absence :** Si T° Ext < 10°C, tous les climats passent à 17°C ou 18°C.

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

## 🎨 CARTES HACS ET NATIVES UTILISÉES

Cette liste sert de référence pour la création de nouveaux Dashboards afin de garantir la compatibilité système.

| Type             | Nom de la Carte           | Utilisation Principale                                  |
| :----------------| :-------------------------| :------------------------------------------------------ |
| **Graph/Data**   | `apexcharts-card`         | Graphiques énergie, moyennes glissantes, seuils couleur |
|                  | `mini-graph-card`         | Tendances rapides (températures, humidité)              |
|                  | `plotly-graph`            | Analyse de données complexe                             |
|                  | `bar-card`                | Jauges de consommation et niveaux de batteries          |
|                  | `history-explorer-card`   | Exploration interactive de l'historique                 |
|                  |                           |                                                         |
|  **UI/Design**   | `bubble-card`             | Navigation, Pop-ups par pièce, boutons tactiles         |
|                  | `mushroom-card`           | Éclairage (Mushroom Light), Titres, Chips d'état        |
|                  | `mod-card` (card-mod)     | Personnalisation CSS avancée des cartes                 |
|                  | `layout-card`             | Structure des vues (Grid, Masonry)                      |
|                  | `stack-in-card`/          | Groupement de cartes sans bordures                      |
|                  | `vertical-stack-in-card`  |                                                         |
|                  | `swipe-card`              | Carrousels (Météo, Caméras)                             |
|                  | `auto-entities`           | Listes dynamiques (Fenêtres ouvertes, Piles faibles)    |
|                  |                           |                                                         |
| **Spécialisées** | `enhanced-shutter-card`   | Gestion visuelle des stores (Série 08)                  |
|                  | `tempometer-gauge-card`   | Jauges de température et humidité pro                   |
|                  | `ring-tile-card`          | Indicateurs circulaires (Statut MariaDB, CPU)           |
|                  | `multiple-entity-row`     | Multi-affichage sur une seule ligne d'entité            |
|                  | `text-divider-row`        | Séparateurs de sections textuels                        |
|                  | `navbar-card`             | Barre de navigation personnalisée                       |
|                  | `linky-card`              | Suivi MyElectricalData (Compteur Linky)                 |
|                  | `rain-gauge-card`         | Visualisation de la pluviométrie                        |
|                  | `uv-index-card`           | Affichage de l'indice UV (Série 01)                     |

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

## 📏 RÈGLE CARD_MOD : Obligation d'ajouter systématiquement le bloc suivant à la fin de chaque carte :

YAML

card_mod:
  style: |
    ha-card {
      border: none !important;
      box-shadow: none !important;
      background: transparent;
    }

---

## 🏠 ORGANISATION DES PIÈCES ET PÔLES

**ORDRE DES PIÈCES (1 À 10)** :  
1. ENTRÉE | 2. CELLIER | 3. TOILETTE | 4. SALON | 5. CUISINE | 6. COULOIR | 7. BUREAU | 8. SDB | 9. CHAMBRE | 10. AUTRE.
(10. AUTRE = Standby, Ecojoko, Mini-PC & Linky)

**ORDRE DES PÔLES (1 À 3)** :  
1. CHAUFFAGE/CLIM | 2. PRISES | 3. ÉCLAIRAGE.

---

## 🔌 DÉTAILS DES ÉQUIPEMENTS PAR PÔLE

### 1. Pôle Chauffage / Clim
- **4. SALON** : clim_salon.
- **5. CUISINE** : radiateur_cuisine.
- **7. BUREAU** : clim_bureau.
- **8. SDB** : soufflant, seche_serv.
- **9. CHAMBRE** : clim_chambre.

### 2. Pôle Prises
- **1. ENTRÉE** : box_internet, horloge.
- **4. SALON** : pc_s_gege, salon_chargeur.
- **5. CUISINE** : micro_ondes, lave_linge, lave_vaisselle, airfryer, four_plaque, frigo, congel.
- **7. BUREAU** : bureau_pc, fer.
- **9. CHAMBRE** : tete_de_lit, tv.
- **10. STANDBY** : all_standby.

### 3. Pôle Éclairage
- **1. ENTRÉE**  : Hue White.
- **4. SALON**   : Table: Hue White, Hue Ambiance 1, 2, 3, Hue Color 1.
- **5. CUISINE** : Hue White.
- **6. COULOIR** : Hue White.
- **7. BUREAU**  : Play 1, 2, 3, Hue White 1, 2.
- **8. SDB**     : Miroir Sonoff, Hue White.
- **9. CHAMBRE** : Hue White 1, 2, Hue Color Zone-1, Hue Color Zone-2.

### 3. Pôle Éclairage spécifique (utility_meter)
- **1, 5 & 6 Eclairage APPARTEMENT** (3 Éclairages - 1. ENTRÉE, 5. CUISINE & 6. COULOIR)
- **1 & 6 Eclairage APPARTEMENT** (2 Éclairages - 1. ENTRÉE & 6. COULOIR) 

- **ZONE 4. (5x) SALON** : [somme de] Table: Hue White, Hue Ambiance 1, 2, 3, Hue Color 1.
- **ZONE. ((3x) Entrée, cuisine & couloir) (HOME)** : [somme de] Hue White, Hue White, Hue White.
- **ZONE 5. (1x) CUISINE** : [somme de] Hue White.
- **ZONE. ((2x) Entrée & couloir) (HOME)** : [somme de] Hue White, Hue White.
- **ZONE 7. (5x) BUREAU** : [somme de] Play 1, 2, 3, Hue White, Hue White.
- **ZONE 8. (2x) SDB** : [somme de] Miroir Sonoff, Hue White.
- **ZONE 9. (4x) CHAMBRE** : [somme de] Hue White 1, 2, Hue Color Zone-1, Hue Color Zone-2.

---

### 3. Titre Tertiaire (Équipement individuel)
- **Format** : Commentaire simple avec tirets (`# --- nom_equipement ---`).
- **Style** : Texte en minuscules (doit correspondre au slug de l'entité).
- **Usage** : Obligatoire juste au-dessus du bloc de configuration d'un appareil spécifique.

---

## 📊 LOGIQUE DE TRI PAR UNITÉ (SENSORS)
**Chaque équipement doit être classé selon sa nature technique pour éviter les conflits d'historique.**

### SENSOR : NOTIFICATION FOUDRES BLITZORTUNG (- platform: rest)
### SENSOR : STATISTIQUES MINI-PC (SANTÉ SYSTÈME) (- platform: statistics & - platform: integration)
### SENSOR : PING HTTPS VSCODE (ERODI-HA.COM) (- platform: rest)
### SENSOR : MOYENNES 24H QUALITÉ AIR (PM2.5 & TCOV) (- platform: statistics)
### SENSOR : DUT - DURÉE D'UTILISATION TOTALE (CORRIGÉ)

### 1. PÔLE 1 : CHAUFFAGE & CLIM (LOGIQUE THERMIQUE)
- **SOUS-SECTION [kWh]** : Uniquement les capteurs de consommation réelle `_kwh` (issus de la plateforme `integration`).
  * *Titre Principal* : `SENSOR : INTÉGRATION KWH ( PÔLES 1. CHAUFFAGE & CLIMATISATION PRISES)`
  * *Contenu* : `│ SENSOR : INTÉGRATION KWH (PÔLES PRISES & CHAUFFAGE)                      │`
  * *Titre Secondaire* : `PÔLE 1. ÉNERGIE: [kWh] CHAUFFAGE & CLIMATISATION`

### 2. PÔLE 2 : PRISES
- **SOUS-SECTION [kWh]** : Uniquement les capteurs de consommation réelle `_kwh`.
  * *Titre Secondaire* : `PÔLE 2. ÉNERGIE: [kWh] PRISES`
  * *Règle de priorité* : Au sein d'une même pièce, le Pôle 1 (CHAUFFAGE/CLIM) doit impérativement être listé **AVANT** le Pôle 2 (PRISES).

### 3. RÈGLE D'ORDRE INTERNE (PIÈCES & PÔLES)
Pour chaque section de capteurs, l'ordre de rédaction doit être :
1. **HIÉRARCHIE DES PIÈCES** : Respecter l'ordre numérique de 1 à 10.
2. **HIÉRARCHIE DES PÔLES** : 
   - 1. CHAUFFAGE/CLIM
   - 2. PRISES
   - 3. ÉCLAIRAGE

---

## 📊 LOGIQUE DE TRI PAR UNITÉ (UTILITY_METER)
**Chaque équipement doit être classé selon sa nature technique pour éviter les conflits d'historique.**

### 1. PÔLE 1 : CHAUFFAGE & CLIM (LOGIQUE THERMIQUE)
- **SOUS-SECTION [_um]** : Uniquement les sources `_energy` brutes (Calculs internes).
  * *Titre* : `PÔLE 1. ÉNERGIE: [_um] CHAUFFAGE / CLIM`
- **SOUS-SECTION [kWh]** : Uniquement les capteurs de consommation réelle `_kwh`.
  * *Titre* : `PÔLE 1. ÉNERGIE: [kWh] CHAUFFAGE & CLIMATISATION`
- **SOUS-SECTION [DUT]** : Uniquement les capteurs de durée `dut` (Temps de fonctionnement).
  * *Titre* : `PÔLE 1. DURÉE D'UTILISATION TOTALE: [DUT] CHAUFFAGE & CLIMATISATION`

### 2. PÔLE 3 : ÉCLAIRAGE (LOGIQUE DE REGROUPEMENT)
- **SOUS-SECTION ZONES** : Compteurs calculant la somme d'une pièce ou d'un groupe (ex: Salon_5x).
  * *Titre* : `PÔLE 3. ÉCLAIRAGE : PAR ZONE PAR PIECE ou A L'UNITEE`
- **SOUS-SECTION UNITAIRE** : Compteurs individuels pour chaque ampoule Hue/Sonoff.
  * *Titre* : `PÔLE 3. ÉCLAIRAGE : PAR PIECE A L'UNITEE`

## 🔗 INDEX INTÉGRAL DES FICHIERS SOURCES (RAW GITHUB)
  ### 📂 Configuration & Scripts
    ### 📂 Cœur du Système
    - Automations : https://raw.githubusercontent.com/BerrySwann/home-assistant-config/main/automations.yaml
    - camera: https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/camera.yaml
    - command_line: https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/command_line.yaml
    - Configuration : https://raw.githubusercontent.com/BerrySwann/home-assistant-config/main/configuration.yaml
    - group: https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/group.yaml
    - input_boolean: https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/input_boolean.yaml
    - input_number: https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/input_number.yaml 
    - Scripts : https://raw.githubusercontent.com/BerrySwann/home-assistant-config/main/scripts.yaml
    - sensors: https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/sensors.yaml
    - shell_command: https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/shell_command.yaml
    - utility_meter: https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/utility_meter.yaml  
  ### 📂 Séries Templates (01 à 18)
    ### 📂 Météo (Série 01)
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/01_1_meteo_alertes_card.yaml
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/01_2_meteo_foudre_card.yaml
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/01_3_meteo_vent_vence_card.yaml
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/01_4_tendances_th_ext_card.yaml
    ### 📂 SpeedTest (Série 02)
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/02_1_reseau_speedtest_card.yaml
    ### 📂 Climat & Chauffage (Série 03)
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/03_01_energie_clim_radiateur_card.yaml
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/03_02_energie_totaux_clim_rad_vignette.yaml
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/03_03_clim_power_status_sup_50w_vignette_card.yaml
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/03_04_clim_etats_vingnette.yaml
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/03_05_clim_logique_system_autom.yaml
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/03_06_clim_logique_wifi_cell.yaml
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/03_07_automation_message_clim_7h30_21h.yaml
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/03_08_automation%20message%20clim%2021h%207h30.yaml
    ### 📂 Eclairages (Série 04)
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/04_02_energie_totaux_eclairage_vignette.yaml
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/04_1_energie_eclairage_card.yaml
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/04_3_lumieres_etats_vignette.yaml
    ### 📂 Maj HA (Série 05)
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/05_1_updates_ha_system_vignette.yaml
    ### 📂 État Wi-Fi (Série 06)
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/06_1_phones_wifi_cellular_card_autom.yaml
    ### 📂 Fenêtres (Série 07)
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/07_1_nb_fenetre_ouvert_ferme_autom.yaml
    ### 📂 Stores — États (Salon / Bureau) (Série 08)
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/08_1_stores_etats_vignette_card.yaml
    ### 📂 all_standby_current (Série 09)
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/09_1_sensor.all_standby_current.yaml
    ### 📂 Air quality (Série 10)
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/10_1_air_quality_ppb.yaml
    ### 📂 ECOJOKO (Série 11)
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/11_1_ecojoko_kwh_jrs_moins_1.yaml
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/11_2_energie_linky_25481620821301_card.yaml
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/11_3_linky_25481620821301.yaml
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/11_4_heures_creuses.yaml
    ### 📂 Lecture des sondes temperature (Mini PC) (Série 12) 
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/12_1_sonde_temp%C3%A9rature_mini-pc.yaml
    ### 📂 Capteur temporel (Série 13)
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/13_1_Capteur%20temporel.yaml
    ### 📂 Inter SdB (Série 14)
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/14_1_inter_sdb.yaml
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/14_2_switch_inter_sdb.yaml
    ### 📂 Jour / Nuit (Série 15)
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/15_1_jour_on_7h30_21h.yaml
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/15_2_nuit_on_21h_7h30.yaml
    ### 📂 Icône été/Hivers (Série 16)
    - https://rahttps://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/16_1_icon%20ete_hivers.yaml
    ### 📂 Diag Conso (Série 17) 
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/17_1_diag_conso_jour_en_cours.yaml
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/17_1_diag_conso_mois_en_cours.yaml
    ### 📂 Puissance de Croisière en Watts (Série 18) 
    - https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/18_1_Moyenne_daily_monthly.yaml
