# 🧠 BASE DE CONTEXTE EXPERT HOME ASSISTANT
*Dernière mise à jour : 2026-03-05*

---

# 🏠 STRUCTURE DU LOGEMENT 
(uniquement pour l'analyse des consommations électrique)
- **Localisation :** 06140 Vence (Altitude ~360m).
- **Type :** Immeuble début 1980, 4ème et dernier étage (Sous toiture).
- **Caractéristiques :** Traversant SUD/NORD, Simple vitrage partout.
- **VMC :** Présente en SDB (Crée une dépression thermique).

# 📏 DIMENSIONS & PÔLES 
(uniquement pour l'analyse des consommations électrique)
1. **SALON (Sud) :** 6.52m x 3.97m (25.88 m²). 
   - *Équipement :* Split mural, Volet motorisé (Auto: 7h30 -> Coucher soleil / Fermé si Absence / Fermé si >34°C).
   - *Note :* Apport solaire crucial dès 15h.
2. **CUISINE (Nord) :** 4.86m x 2.18m (10.59 m²).
   - *Équipement : "radiateur_cuisine" (Bain d'huile avec relais connectée). 
   - *Auto :* L-Ma-Me-Je (4h45-7h), Ve-Sa-Di (5h45-8h).
3. **BUREAU (Nord) :** 3.95m x 2.67m (10.55 m²).
   - *Équipement :* Split mural, Volet motorisé. 
   - *Auto :* Ouvert uniquement si T° Ext [18°C - 25°C].
4. **SDB (Interne) :** 1.96m x 1.58m (3.13 m²) Pas de fenêtre.
   - *Équipement :* Soufflant (2x1000W), Sèche-serviette (150W).
   - *Auto :* Soufflant OFF si >23°C. Sèche-serviette 1h après douche.
5. **CHAMBRE (Nord) :** 3.95m x 2.85m (11.26 m²).
   - *Équipement :* Split mural. Pas de volet motorisé.
   - *Note :* Forte dissipation thermique (DUT élevé).
  
---

## 📏 RÈGLES DE STRUCTURATION GÉNÉRALE ET DE TITRAGE (YAML) (sauf exception)
**Ces règles s'appliquent exclusivement aux fichiers de configuration (.yaml). Jamais pour les automations**

### 1. HIÉRARCHIE VISUELLE (LES TITRES)
- **TITRE PRINCIPAL (Section / Pôle)**
    - **Format** : Boîte ASCII coins arrondis (`╭`, `─`, `╮`, `│`, `╰`, `╯`).
    - **Largeur** : 74 caractères (pleine largeur).
    - **Style** : Texte en MAJUSCULES (Ex: `SENSOR : INTÉGRATION KWH (PÔLE 1. CHAUFFAGE)`).
- **TITRE SECONDAIRE (Pièce)**
    - **Format** : Boîte ASCII coins carrés (`┌`, `─`, `┐`, `│`, `└`, `┘`).
    - **Largeur** : 37 caractères.
    - **Style** : MAJUSCULES, respectant la numérotation officielle (1 à 9).
- **TITRE TERTIAIRE (Équipement)**
    - **Format** : `# --- slug_de_l_entite ---` (exemple: `# --- congelateur_cuisine ---`)
    - **Usage** : Obligatoire juste au-dessus du bloc de configuration de chaque appareil.

### 2. LOGIQUE DE TRI (SÉPARATION STRICTE)
- **RÈGLE D'OR :** On ne mélange **JAMAIS** les types d'équipements (Pôles) au sein d'une même pièce.
- **MÉTHODE :** La structure suit d'abord le **PÔLE**, puis la **PIÈCE**.
- **ORDRE DES PÔLES (0 à 4) :**
    0. **ÉNERGIE GLOBALE** (Linky, Ecojoko, bilans généraux).
    1. **CHAUFFAGE & CLIMATISATION**
    2. **PRISES CONNECTÉES**
    3. **ÉCLAIRAGE**
    4. **GROUPE PRÉSENCE** (Wi-Fi, Cellulaire, Localisation, Trackers).

### 3. ORDRE OFFICIEL DES PIÈCES (INDEX 1 À 9)
Cette numérotation doit être suivie scrupuleusement au sein de chaque bloc de Pôle :
1. **ENTRÉE** | 2. **CELLIER** | 3. **TOILETTE** | 4. **SALON** | 5. **CUISINE** | 6. **COULOIR** | 7. **BUREAU** | 8. **SDB** | 9. **CHAMBRE**

### 4. NOMENCLATURE HORS-PIÈCES (SYSTÈME & DIVERS)
Pour tous les éléments qui ne sont pas rattachés à une pièce physique spécifique, l'indexation se fait par catégorie lettrée :
**[ M ] - MÉTÉO & ENVIRONNEMENT EXTERNE :**
- `M_01_meteo_alerte`
- `M_02_meteo_vent`
- `M_03_meteo_blitzortung`
- `M_04_tendances_th_ext_card`

---

## RÈGLE DE PRÉSERVATION TECHNIQUE DES TITRES

1. **INTÉGRITÉ DU CONTENU** :
   - Interdiction de supprimer les références techniques (ex: "windrose-card", "Série 01_2", "Ping HTTPS", "LABEL").
   - Ces infos DOIVENT être intégrées dans les nouvelles boîtes ASCII.

2. **ADAPTATION DE LA LARGEUR (DYNAMIQUE)** :
   - La largeur standard est de 74 caractères.
   - EXCEPTION : Si le contenu technique interne force un dépassement, la boîte ASCII DOIT être élargie pour englober tout le texte (76, 80 car. ou plus si nécessaire).
   - Ne jamais passer à la ligne à l'intérieur d'une boîte pour compenser la largeur.
     
---

## 🛠️ RÈGLES DE CODAGE STRICTES

- **AUTOMATIONS (FORMATTAGE)** : 
  - ⛔ **INTERDIT** : Jamais de tiret "`-`" devant le premier `alias` (Titre). Le code doit être fourni comme un bloc objet, pas un élément de liste.
  - ⛔ **INTERDIT** : Jamais d' `id:` au niveau global (laisser HA le gérer).
  - ✅ **OBLIGATOIRE** : `alias` en MAJUSCULES pour chaque sous-bloc (trigger, condition, action).
  - 🆗 **AUTORISÉ** : `id:` permis UNIQUEMENT à l'intérieur des triggers (pour les IDs de déclenchement).

- **ENTITÉS** : 
  - `name`: "Nom Lisible" / `unique_id`: nom_lisible (Minuscules/Underscores).

- **MODIFICATIONS** : 
  - Annoter chaque ligne modifiée : `# "[L...] modif"`.
  - Bloc final obligatoire : `# annotations_log:`.

---

## 🔔 STANDARDS DE NOTIFICATION (POCO X7 PRO & MONTRE)
**Cible matérielle : Poco X7 Pro couplé à Xiaomi Watch Lite (Écran carré, rendu Emojis limité)**

1. **TITRE (`title`)** :
   - **Longueur Max** : **15 caractères** (Impératif pour lecture immédiate au poignet).
   - **Style** : MAJUSCULES recommandées pour l'alerte.
   
2. **CORPS DU MESSAGE (`message`)** :
   - **Encodage** : **TEXTE PUR (ASCII) UNIQUEMENT**.
   - ⛔ **INTERDICTION STRICTE** : Aucun Emoji (🐛, ⚠️, 🔥) -> Remplacer par symboles ASCII (`!`, `[ ]`, `OK`, `>>`).
   - **Structure** : L'information critique doit être dans les **20 premiers caractères**.

3. **EXEMPLE VALIDE** :
   - Titre : `SDB : ARRET` (11 car.)
   - Message : `Timer 1h fini. Reset OK.`

---

## 📏 RÈGLE CARD_MOD : Obligation d'ajouter systématiquement le bloc suivant à la fin de chaque carte :

YAML "sauf exception de lisibilité ou d'incompatibilité technique."

card_mod:
  style: |
    ha-card {
      border: none !important;
      box-shadow: none !important;
      background: transparent;
    }

---

## 🎨 CARTES HACS ET NATIVES UTILISÉES

Cette liste sert de référence pour la création de nouveaux Dashboards afin de garantir la compatibilité système.

| Type             | Nom de la Carte           | Utilisation Principale                                  |
| :----------------| :-------------------------| :------------------------------------------------------ |
| **Graph/Data** | `apexcharts-card`         | Graphiques énergie, moyennes glissantes, seuils couleur |
|                  | `mini-graph-card`         | Tendances rapides (températures, humidité)              |
|                  | `plotly-graph`            | Analyse de données complexe                             |
|                  | `bar-card`                | Jauges de consommation et niveaux de batteries          |
|                  | `history-explorer-card`   | Exploration interactive de l'historique                 |
|  **UI/Design** | `bubble-card`             | Navigation, Pop-ups par pièce, boutons tactiles         |
|                  | `mushroom-card`           | Éclairage (Mushroom Light), Titres, Chips d'état        |
|                  | `mod-card` (card-mod)     | Personnalisation CSS avancée des cartes                 |
|                  | `layout-card`             | Structure des vues (Grid, Masonry)                      |
|                  | `stack-in-card`/          | Groupement de cartes sans bordures                      |
|                  | `vertical-stack-in-card`  |                                                         |
|                  | `swipe-card`              | Carrousels (Météo, Caméras)                             |
|                  | `auto-entities`           | Listes dynamiques (Fenêtres ouvertes, Piles faibles)    |
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

# 🎨 PALETTE DE COULEURS OFFICIELLES HA (HEX & RGB)

Indispensable pour la cohérence entre ApexCharts, Bubble-Card et Mushroom.

| État / Type   | HEX       | RGB             | Utilisation type      |
| :------------ | :-------- | :-------------- | :-------------------- |
| **Primary** | `#03a9f4` | `3, 169, 244`   | Icônes HA, Titres     |
| **Success** | `#0f9d58` | `15, 157, 88`   | Actif, Normal, OK     |
| **Warning** | `#ff9800` | `255, 152, 0`   | Standby, Attention    |
| **Error** | `#f44336` | `244, 67, 54`   | Alerte, Critique, Off |
| **Info** | `#2196f3` | `33, 150, 243`  | Infos, Nuages, Réseau |
| **Inactive** | `#44739e` | `68, 115, 158`  | Éteint, Absent        |
| **Active** | `#fdd835` | `253, 216, 53`  | Éclairage, Chauffage  |
| **Text** | `#212121` | `33, 33, 33`    | Polices, Bordures     |

---

## 🔌 DÉTAILS DES ÉQUIPEMENTS PAR PÔLE

### 0. Pôle Énergie Globale (Pôle 0)
- **Équipements** : Compteur Linky, Ecojoko.
- **Logique** : Centralisation des coûts globaux, des index totaux et des ratios (ex: HC/HP mensuel, coût journalier global).

### 1. Pôle Chauffage / Clim (Pôle 1)
- **4. SALON** : clim_salon_entree.
- **5. CUISINE** : radiateur_cuisine.
- **7. BUREAU** : clim_bureau.
- **8. SDB** : soufflant_sdb, seche_serv_sdb.
- **9. CHAMBRE** : clim_chambre.

### 2. Pôle Prises (Pôle 2)
- **1. ENTRÉE** : box_internet_entree, horloge_entree.
- **4. SALON** : pc_s_gege_salon, salon_chargeur_salon, prise tv salon.
- **5. CUISINE** : micro_ondes_cuisine, lave_linge_cuisine, lave_vaisselle_cuisine, airfryer_cuisine, four_plaque_cuisine, frigo_cuisine, congel_cuisine.
- **7. BUREAU** : bureau_pc, fer_a_repasser_bureau.
- **9. CHAMBRE** : tete_de_lit_chambre, tv_chambre.

### 3. Pôle Éclairage (Pôle 3 physique)
- **1. ENTRÉE** : Hue White.
- **4. SALON** : Table: Hue White, Hue Ambiance 1, 2, 3, Hue Color 1.
- **5. CUISINE** : Hue White.
- **6. COULOIR** : Hue White.
- **7. BUREAU** : Play 1, 2, 3, Hue White 1, 2.
- **8. SDB** : Miroir Sonoff, Hue White.
- **9. CHAMBRE** : Hue White 1, 2, Hue Color Zone 1, 2.

### 4. Pôle Éclairage Logique (Somme)
- **ZONE 4. (5x) SALON** : [somme de] Table: Hue White, Hue Ambiance 1, 2, 3, Hue Color 1. (ex: eclairage_salon_5_*)
- **ZONE. ((3x) Entrée, cuisine & couloir) (HOME)** : [somme de] Hue White, Hue White, Hue White. (ex: eclairage_appart_3_*)
- **ZONE 5. (1x) CUISINE** : [somme de] Hue White. (ex: eclairage_cuisine_1_*)
- **ZONE. ((2x) Entrée & couloir) (HOME)** : [somme de] Hue White, Hue White. (ex: eclairage_appart_2_*)
- **ZONE 7. (5x) BUREAU** : [somme de] Play 1, 2, 3, Hue White, Hue White. (ex: eclairage_bureau_5_*)
- **ZONE 8. (2x) SDB** : [somme de] Miroir Sonoff, Hue White. (ex: eclairage_sdb_2_*)
- **ZONE 9. (4x) CHAMBRE** : [somme de] Hue White 1, 2, Hue Color Zone-1, Hue Color Zone-2. (ex: eclairage_chambre_4_*)

### 5. Pôle Groupe Présence (Pôle 4)
- **Équipements** : Smartphones (Poco X7 Pro, etc.), capteurs Wi-Fi (SSID/BSSID), réseau cellulaire.
- **Logique** : Centraliser les statuts de connexion pour déterminer la présence (Home/Away).

---

## 🖥️ RÈGLES DE STRUCTURATION DES TEMPLATES D'INTERFACE (`ui_dashboard`)
Pour séparer la logique de calcul pur de la logique d'affichage, un sous-dossier `ui_dashboard` est utilisé dans les Pôles (ex: `P3_eclairage/ui_dashboard/`).

- **Usage strict** : Ce dossier est **exclusivement** réservé aux "Templates Sensors" dont le seul but est de générer du contenu pour le frontend (cartes HA).
- **Contenu autorisé** : 
  - Regroupement textuel (ex: "3 lumières allumées", "Clim en mode Froid").
  - Formatage de couleurs ou d'icônes dynamiques pour Bubble Card / Mushroom.
- **Interdiction** : Ne **jamais** y placer de templates calculant de l'énergie (`kWh`), de la puissance (`W`) ou des durées (`DUT`).

---

## 📊 LOGIQUE DE TRI PAR UNITÉ (UTILITY_METER.YAML)
**Chaque équipement doit être classé selon sa nature technique pour éviter les conflits d'historique.**

### 1. PÔLE 1 : CHAUFFAGE & CLIMATISATION (LOGIQUE THERMIQUE)
- **SOUS-SECTION [_um]** : Uniquement les sources `_energy` brutes (Calculs internes).
  * *Titre* : `PÔLE 1. ÉNERGIE: [_um] CHAUFFAGE & CLIMATISATION`
- **SOUS-SECTION [kWh]** : Uniquement les capteurs de consommation réelle `_kwh`.
  * *Titre* : `PÔLE 1. ÉNERGIE: [kWh] CHAUFFAGE & CLIMATISATION`
- **SOUS-SECTION [DUT]** : Uniquement les capteurs de durée `dut` (Temps de fonctionnement).
  * *Titre* : `PÔLE 1. DURÉE D'UTILISATION TOTALE: [DUT] CHAUFFAGE & CLIMATISATION`

### 2. PÔLE 2 : PRISES CONNECTÉES
- **SOUS-SECTION [kWh]** : Uniquement les capteurs de consommation réelle `_kwh`.
  * *Titre* : `│ PÔLE 2. ÉNERGIE: [kWh] PRISES CONNECTÉES -> (Daily + Monthly)`

### 3. PÔLE 3 : ÉCLAIRAGE (LOGIQUE DE REGROUPEMENT)
- **SOUS-SECTION ZONES** : Compteurs calculant la somme d'une pièce ou d'un groupe.
  * *Titre* : `PÔLE 3. ÉCLAIRAGE : PAR ZONE PAR PIECE ou A L'UNITÉ`
- **SOUS-SECTION UNITAIRE** : Compteurs individuels pour chaque ampoule.
  * *Titre* : `PÔLE 3. ÉCLAIRAGE : PAR PIECE A L'UNITÉ`

---

# 🌡️ STRATÉGIE THERMIQUE & MONITORING
(uniquement pour l'analyse des consommations électrique)

- **Sondes :** Thermostats SONOFF dans TOUTES les pièces + T° Extérieure (Balcon Nord).
- **Mode Absence :** Hivers 17° - Si T° Ext < 10°C = 18° ou Si T° Ext < 8°C = 19° / Eté T°Cible (28°).
- **Logique "Cœur du Système" (T° Extérieure -> Cible -> Confort) :**
  
   <img width="4264" height="5602" alt="Confort Cible Calcul Flow-2026-02-01-102732" src="https://github.com/user-attachments/assets/f18e24a2-1441-482b-af70-537a7b208e15" />

---

## 🔗 INDEX INTÉGRAL DES FICHIERS SOURCES (RAW GITHUB)
*Dépôt Re-build : https://github.com/BerrySwann/home_assistant_re-build*

### 📂 UTILITY METER
  **Pôle 0 - Énergie Total**
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/utility_meter/P0_Energie_total/Ecojoko/01_UM_AMHQ_cost.yaml
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/utility_meter/P0_Energie_total/Ecojoko/02_UM_ecojoko_quotidien_live.yaml
  **Pôle 1 - Chauffage & Clim**
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/utility_meter/P1_clim_chauffage/P1_UM_AMHQ.yaml
  **Pôle 2 - Prises**
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/utility_meter/P2_prise/P2_AVG/P2_UM_AMHQ.yaml
  **Pôle 3 - Éclairage**
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/utility_meter/P3_eclairage/P3_UM_AMHQ_1_UNITE.yaml
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/utility_meter/P3_eclairage/P3_UM_AMHQ_2_ZONE.yaml
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/utility_meter/P3_eclairage/P3_UM_AMHQ_3_TOTAL.yaml
  **Météo**
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/utility_meter/meteo/M_03_meteo_UM_blitzortung.yaml

### 📂 TEMPLATES
  **Pôle 0 - Diag & Énergie Total**
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P0_Energie_total_diag/Diag/diag_conso_jour_en_cours.yaml
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P0_Energie_total_diag/Diag/diag_conso_mois_en_cours.yaml
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P0_Energie_total_diag/Ecojoko/01_ecojoko_AMHQ_cost.yaml
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P0_Energie_total_diag/Ecojoko/02_ratio_hp_hc.yaml
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P0_Energie_total_diag/Ecojoko/03_ecojoko_7jrs_historique.yaml
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P0_Energie_total_diag/Ecojoko/04_AVG_ecojoko.yaml
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P0_Energie_total_diag/Linky/MyElectricalData.yaml
  **Pôle 1 - Chauffage & Clim**
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P1_clim_chauffage/P1_01_MASTER/P1_01_clim_logique_system_autom.yaml
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P1_clim_chauffage/P1_AVG/P1_avg.yaml
  **Pôle 2 - Prises**
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P2_prise/P2_AVG/P2_AVG_AMHQ.yaml
  **Pôle 3 - Éclairage & UI**
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P3_eclairage/P3_01_somme_par_piece.yaml
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P3_eclairage/P3_AVG/P3_AVG_AMHQ_1_UNITE.yaml
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P3_eclairage/P3_AVG/P3_AVG_AMHQ_2_ZONE.yaml
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P3_eclairage/ui_dashboard/etats_status.yaml
  **Pôle 4 - Groupe Présence**
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P4_groupe_presence/01_phones_wifi_cellular_card_autom.yaml
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P4_groupe_presence/02_logique_wifi_cellular.yaml
  **Météo**
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/meteo/M_01_meteo_alertes_card.yaml
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/meteo/M_02_meteo_vent_vence_card.yaml
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/meteo/M_03_meteo_blitzortung.yaml
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/meteo/M_04_tendances_th_ext_card.yaml

### 📂 SENSORS
  **Pôle 0 - Diag & Énergie Total**
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/sensors/P0_Energie_total_diag/Ecojoko_mini_maxi/Ecojoko_mini_maxi_avg_1h.yaml
  **Pôle 2 - Prises**
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/sensors/P2_prise/P2_kWh.yaml
  **Pôle 3 - Éclairage**
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/sensors/P3_eclairage/P3_kWh_1_UNITE.yaml
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/sensors/P3_eclairage/P3_kWh_2_ZONE.yaml
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/sensors/P3_eclairage/P3_kWh_3_TOTAL.yaml
  **Météo**
  - https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/sensors/meteo/M_03_meteo_sensors_blitzortung.yaml
