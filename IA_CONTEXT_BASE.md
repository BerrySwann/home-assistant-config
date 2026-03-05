# 🧠 BASE DE CONTEXTE EXPERT HOME ASSISTANT
*Dernière mise à jour : 2026-03-05*

---

# 🏠 STRUCTURE DU LOGEMENT 
(uniquement pour l'analyse des consommations électriques)
- **Localisation :** 06140 Vence (Altitude ~360m).
- **Type :** Immeuble début 1980, 4ème et dernier étage (Sous toiture).
- **Caractéristiques :** Traversant SUD/NORD, Simple vitrage partout.
- **VMC :** Présente en SDB (Crée une dépression thermique).

# 📏 DIMENSIONS & PÔLES 
(uniquement pour l'analyse des consommations électriques)
1. **SALON (Sud) :** 6.52m x 3.97m (25.88 m²). 
   - *Équipement :* Split mural, Volet motorisé (Auto: 7h30 -> Coucher soleil / Fermé si Absent / Fermé si >34°C).
   - *Note :* Apport solaire crucial dès 15h.
2. **CUISINE (Nord) :** 4.86m x 2.18m (10.59 m²).
   - *Équipement : "radiateur_cuisine" (Bain d'huile avec relais connecté). 
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
**Ces règles s'appliquent exclusivement aux fichiers de configuration (.yaml). Jamais pour les automatisations (automations).**

### 1. HIÉRARCHIE VISUELLE (LES TITRES)
- **TITRE PRINCIPAL (Section / Pôle)**
    - **Format** : Boîte ASCII coins arrondis (`╭`, `─`, `╮`, `│`, `╰`, `╯`).
    - **Largeur** : 74 caractères (pleine largeur).
    - **Style** : Texte en MAJUSCULES (Ex: `CAPTEUR : INTÉGRATION KWH (PÔLE 1. CHAUFFAGE)`).
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
    4. **GROUPE PRÉSENCE** (Wi-Fi, Réseau mobile, Localisation, Traceurs).

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

*(Note : En attente de la définition des prochaines catégories lettrées pour le Réseau, le Système, etc.)*

---

## 🛠️ RÈGLES DE PRÉSERVATION TECHNIQUE DES TITRES

1. **INTÉGRITÉ DU CONTENU** :
   - Interdiction de supprimer les références techniques (ex: "windrose-card", "Série 01_2", "Ping HTTPS", "LABEL").
   - Ces infos DOIVENT être intégrées dans les nouvelles boîtes ASCII.

2. **ADAPTATION DE LA LARGEUR (DYNAMIQUE)** :
   - La largeur standard est de 74 caractères.
   - EXCEPTION : Si le contenu technique interne force un dépassement, la boîte ASCII DOIT être élargie pour englober tout le texte (76, 80 car. ou plus si nécessaire).
   - Ne jamais passer à la ligne à l'intérieur d'une boîte pour compenser la largeur.
     
---

## 🛠️ RÈGLES DE CODAGE STRICTES

- **AUTOMATISATIONS (FORMATAGE)** : 
  - ⛔ **INTERDIT** : Jamais de tiret "`-`" devant le premier `alias` (Titre). Le code doit être fourni comme un bloc objet, pas un élément de liste.
  - ⛔ **INTERDIT** : Jamais d' `id:` au niveau global (laisser HA le gérer).
  - ✅ **OBLIGATOIRE** : `alias` en MAJUSCULES pour chaque sous-bloc (déclencheur/trigger, condition, action).
  - 🆗 **AUTORISÉ** : `id:` permis UNIQUEMENT à l'intérieur des déclencheurs (pour les ciblages d'actions).

- **ENTITÉS** : 
  - `name`: "Nom Lisible" / `unique_id`: nom_lisible (Minuscules/Tirets bas).

- **MODIFICATIONS** : 
  - Annoter chaque ligne modifiée : `# "[L...] modif"`.
  - Bloc final obligatoire à la fin de la réponse : `# annotations_log:`.

---

## 🔔 STANDARDS DE NOTIFICATION (POCO X7 PRO & MONTRE)
**Cible matérielle : Poco X7 Pro couplé à Xiaomi Watch Lite (Écran carré, rendu émojis limité)**

1. **TITRE (`title`)** :
   - **Longueur Max** : **15 caractères** (Impératif pour lecture immédiate au poignet).
   - **Style** : MAJUSCULES recommandées pour l'alerte.
   
2. **CORPS DU MESSAGE (`message`)** :
   - **Encodage** : **TEXTE PUR (ASCII) UNIQUEMENT**.
   - ⛔ **INTERDICTION STRICTE** : Aucun émoji (🐛, ⚠️, 🔥) -> Remplacer par symboles ASCII (`!`, `[ ]`, `OK`, `>>`).
   - **Structure** : L'information critique doit être dans les **20 premiers caractères**.

3. **EXEMPLE VALIDE** :
   - Titre : `SDB : ARRET` (11 car.)
   - Message : `Minuteur 1h fini. RAZ OK.`

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

## 🔌 DÉTAILS DES ÉQUIPEMENTS PAR PÔLE

### 0. Pôle Énergie Globale (Pôle 0)
- **Équipements** : Compteur Linky, Ecojoko.
- **Logique** : Centralisation des coûts globaux, des index totaux et des ratios (ex: Heures Creuses / Heures Pleines mensuel, coût journalier global).

### 1. Pôle Chauffage / Clim (Pôle 1)
- **4. SALON** : clim_salon_entree.
- **5. CUISINE** : radiateur_cuisine.
- **7. BUREAU** : clim_bureau.
- **8. SDB** : soufflant_sdb, seche_serv_sdb.
- **9. CHAMBRE** : clim_chambre.

### 2. Pôle Prises (Pôle 2)
- **1. ENTRÉE** : box_internet_entree, horloge_entree.
- **4. SALON** : pc_s_gege_salon, salon_chargeur_salon.
- **5. CUISINE** : micro_ondes_cuisine, lave_linge_cuisine, lave_vaisselle_cuisine, airfryer_cuisine, four_plaque_cuisine, frigo_cuisine, congel_cuisine.
- **7. BUREAU** : bureau_pc, fer_a_repasser_bureau.
- **9. CHAMBRE** : tete_de_lit_chambre, tv_chambre.

### 3. Pôle Éclairage (Pôle 3)
*Logique Physique (Ampoules) :*
- **1. ENTRÉE** : Hue White.
- **4. SALON** : Table: Hue White, Hue Ambiance 1, 2, 3, Hue Color 1.
- **5. CUISINE** : Hue White.
- **6. COULOIR** : Hue White.
- **7. BUREAU** : Play 1, 2, 3, Hue White 1, 2.
- **8. SDB** : Miroir Sonoff, Hue White.
- **9. CHAMBRE** : Hue White 1, 2, Hue Color Zone 1, 2.

*Logique de Somme (Zones) :*
- **ZONE 4. (5x) SALON** : [somme de] Table: Hue White, Hue Ambiance 1, 2, 3, Hue Color 1. (ex: eclairage_salon_5_*)
- **ZONE. ((3x) Entrée, cuisine & couloir) (APPART)** : [somme de] Hue White, Hue White, Hue White. (ex: eclairage_appart_3_*)
- **ZONE 5. (1x) CUISINE** : [somme de] Hue White. (ex: eclairage_cuisine_1_*)
- **ZONE. ((2x) Entrée & couloir) (APPART)** : [somme de] Hue White, Hue White. (ex: eclairage_appart_2_*)
- **ZONE 7. (5x) BUREAU** : [somme de] Play 1, 2, 3, Hue White, Hue White. (ex: eclairage_bureau_5_*)
- **ZONE 8. (2x) SDB** : [somme de] Miroir Sonoff, Hue White. (ex: eclairage_sdb_2_*)
- **ZONE 9. (4x) CHAMBRE** : [somme de] Hue White 1, 2, Hue Color Zone-1, Hue Color Zone-2. (ex: eclairage_chambre_4_*)

### 4. Pôle Groupe Présence (Pôle 4)
- **Équipements** : Téléphones mobiles (Poco X7 Pro, etc.), capteurs Wi-Fi (SSID/BSSID), réseau mobile.
- **Logique** : Centraliser les statuts de connexion pour déterminer la présence (Présent/Absent).

---

## 🖥️ RÈGLES DE STRUCTURATION DES TEMPLATES D'INTERFACE (`ui_dashboard`)
Pour séparer la logique de calcul pur de la logique d'affichage, un sous-dossier `ui_dashboard` est utilisé dans les Pôles (ex: `P3_eclairage/ui_dashboard/`).

- **Usage strict** : Ce dossier est **exclusivement** réservé aux "Capteurs Modèles" (Templates) dont le seul but est de générer du contenu pour l'interface visuelle (les cartes sur le tableau de bord).
- **Contenu autorisé** : 
  - Regroupement textuel (ex: "3 lumières allumées", "Clim en mode Froid").
  - Formatage de couleurs ou d'icônes dynamiques pour les cartes.
- **Interdiction** : Ne **jamais** y placer de calculs d'énergie (`kWh`), de puissance (`W`) ou de durées (`DUT`).

---

## 📊 ARCHITECTURE MODULAIRE : 1 FONCTION = 1 FICHIER YAML
**L'approche monolithique est strictement interdite. La configuration est 100% éclatée et modulaire.**

**RÈGLE D'OR :** Chaque fonction, logique, calcul ou intégration doit posséder **son propre fichier `.yaml` dédié**, obligatoirement rangé dans le répertoire du Pôle correspondant (`P0` Énergie Globale, `P1` Chauffage & Clim, `P2` Prises, `P3` Éclairage, `P4` Groupe Présence, ou les catégories lettrées comme `M_` pour Météo).

### 1. DÉCOUPAGE PAR PÔLE (Exemples de structuration)
- **PÔLE 0 (Énergie Globale)** : Séparation stricte des entités. Un fichier pour les coûts, un autre pour le direct, etc. (ex: `01_UM_AMHQ_cout.yaml`, `02_UM_ecojoko_quotidien_direct.yaml` dans le dossier `Ecojoko`).
- **PÔLE 1 (Chauffage & Clim)** : Les calculs de puissance, les durées d'utilisation `[DUT]` et les moyennes `[AVG]` doivent avoir leurs propres fichiers sous le répertoire `P1_clim_chauffage`.
- **PÔLE 2 (Prises)** : Les calculs journaliers/mensuels de consommation et les lissages moyens sont séparés (ex: dossier `P2_AVG`).
- **PÔLE 3 (Éclairage)** : Découpage obligatoire de la portée logique dans des fichiers distincts :
  - `..._1_UNITE.yaml` (Ampoules individuelles)
  - `..._2_ZONE.yaml` (Somme par pièce)
  - `..._3_TOTAL.yaml` (Somme globale de l'appartement)

### 2. CONVENTION DE NOMMAGE DES FICHIERS
- **Préfixe Pôle** : Le fichier doit toujours commencer par son pôle (ex: `P2_...` ou `M_...`).
- **Type d'entité** : Indiquer clairement la nature du contenu (`UM` pour Compteur de services/Utility Meter, `AVG` pour moyennes, `kWh` pour intégration).
- **Le Standard "AMHQ"** : Si le fichier gère des cycles temporels multiples, utiliser l'acronyme `AMHQ` (Annuel, Mensuel, Hebdo, Quotidien) dans le nom du fichier pour raccourcir (ex: `P3_UM_AMHQ_2_ZONE.yaml`).

### 3. TITRAGE INTERNE DES FICHIERS MODULAIRES
Même si le fichier ne contient qu'une seule fonction, la règle de la **Boîte ASCII arrondie** (74 caractères) s'applique systématiquement en ligne 1 pour définir le rôle précis de ce fichier.

### 4. DOCUMENTATION INTERNE DES FICHIERS (EN-TÊTE OBLIGATOIRE)
Juste sous la boîte ASCII du titre, chaque fichier YAML doit **obligatoirement** comporter un bloc de commentaires expliquant son rôle, ses sources, les pièges à éviter, et son lien avec l'interface graphique (les 18 vignettes).

**Format standard exigé :**

# ╭──────────────────────────────────────────────────────────────────────────╮
# │ TITRE DU FICHIER EN BOÎTE ASCII ARRONDIE                                 │
# ╰──────────────────────────────────────────────────────────────────────────╯
#
# ## 📝 DESCRIPTION :
# Ce que fait le fichier (ex: Calcule le coût total HP/HC sur 4 périodes).
#
# ## 🧮 CALCUL & SOURCES :
# - Formule : consommation_kWh (UM) × tarif_€/kWh = coût_€
# - Quotidien : sensor.ecojoko_hp/hc_reseau_quotidien_um (remise à zéro à minuit)
# - Mensuel   : sensor.ecojoko_hp/hc_reseau_mensuel_um (remise à zéro le 1er du mois)
#
# ## ⚠️ IMPORTANT (PIÈGES) :
# Attention au piège technique (ex: Utiliser les capteurs Quotidiens et non globaux).
#
# ## 🖥️ TABLEAU DE BORD (VIGNETTES PRINCIPALES) :
# - Sert à la remontée d'info pour la vignette : [Exemple : L1C2 Température ou NON APPLICABLE]

## 🖥️ CARTOGRAPHIE DU TABLEAU DE BORD PRINCIPAL (MATRICE DES 18 VIGNETTES)
Cette matrice permet de cibler exactement quelle entité remonte dans quelle carte visuelle du Dashboard. Elle est indispensable pour la documentation interne des fichiers YAML.
Format : Ligne (L) / Colonne (C).

**LIGNE 1 : ENVIRONNEMENT & THERMIQUE**
- **L1C1** : Météo
- **L1C2** : Températures (Extérieure et 6 intérieures) avec humidité
- **L1C3** : Commandes Clim (incluant radiateur et soufflant)

**LIGNE 2 : CONSOMMATION ÉNERGÉTIQUE**
- **L2C1** : Conso Énergie Générale
- **L2C2** : Conso Énergie Clim / Radiateur / Soufflant
- **L2C3** : Conso Énergie Éclairage (Lampes)

**LIGNE 3 : COMMANDES & ACTIONNEURS**
- **L3C1** : Commandes Éclairage (Lampes)
- **L3C2** : Commandes Éco (Prises)
- **L3C3** : État des fenêtres + Commandes 2 stores

**LIGNE 4 : RÉSEAU & SYSTÈME**
- **L4C1** : Freebox Pop
- **L4C2** : Mini-PC
- **L4C3** : Mises à jour HA

**LIGNE 5 : MAINTENANCE MATÉRIELLE**
- **L5C1** : Surveillance Batteries / Piles des équipements
- **L5C2** : Batterie des portables
- **L5C3** : Taille de la DB MariaDB (Maint. Github au clic)

**LIGNE 6 : QUALITÉ & ALERTES**
- **L6C1** : Qualité de l'air (Appartement)
- **L6C2** : Pollution / Pollen (Extérieur)
- **L6C3** : Vigilance Eau (Restrictions)

🌡️ STRATÉGIE THERMIQUE & SUIVI
(uniquement pour l'analyse des consommations électriques)

Sondes : Thermostats SONOFF dans TOUTES les pièces + T° Extérieure (Balcon Nord).

Mode Absent : Hiver 17° - Si T° Ext < 10°C = 18° ou Si T° Ext < 8°C = 19° / Été T°Cible (28°).

Logique "Cœur du Système" (T° Extérieure -> Cible -> Confort) :

<img width="4264" height="5602" alt="Confort Cible Calcul Flow-2026-02-01-102732" src="https://github.com/user-attachments/assets/f18e24a2-1441-482b-af70-537a7b208e15" />

🔗 INDEX INTÉGRAL DES FICHIERS SOURCES (RAW GITHUB)
Dépôt Re-build : https://github.com/BerrySwann/home_assistant_re-build

📂 UTILITY METER
Pôle 0 - Énergie Globale

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/utility_meter/P0_Energie_total/Ecojoko/01_UM_AMHQ_cost.yaml

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/utility_meter/P0_Energie_total/Ecojoko/02_UM_ecojoko_quotidien_live.yaml
Pôle 1 - Chauffage & Clim

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/utility_meter/P1_clim_chauffage/P1_UM_AMHQ.yaml
Pôle 2 - Prises

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/utility_meter/P2_prise/P2_AVG/P2_UM_AMHQ.yaml
Pôle 3 - Éclairage

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/utility_meter/P3_eclairage/P3_UM_AMHQ_1_UNITE.yaml

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/utility_meter/P3_eclairage/P3_UM_AMHQ_2_ZONE.yaml

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/utility_meter/P3_eclairage/P3_UM_AMHQ_3_TOTAL.yaml
Météo

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/utility_meter/meteo/M_03_meteo_UM_blitzortung.yaml

📂 TEMPLATES
Pôle 0 - Diag & Énergie Globale

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P0_Energie_total_diag/Diag/diag_conso_jour_en_cours.yaml

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P0_Energie_total_diag/Diag/diag_conso_mois_en_cours.yaml

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P0_Energie_total_diag/Ecojoko/01_ecojoko_AMHQ_cost.yaml

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P0_Energie_total_diag/Ecojoko/02_ratio_hp_hc.yaml

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P0_Energie_total_diag/Ecojoko/03_ecojoko_7jrs_historique.yaml

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P0_Energie_total_diag/Ecojoko/04_AVG_ecojoko.yaml

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P0_Energie_total_diag/Linky/MyElectricalData.yaml
Pôle 1 - Chauffage & Clim

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P1_clim_chauffage/P1_01_MASTER/P1_01_clim_logique_system_autom.yaml

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P1_clim_chauffage/P1_AVG/P1_avg.yaml
Pôle 2 - Prises

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P2_prise/P2_AVG/P2_AVG_AMHQ.yaml
Pôle 3 - Éclairage & UI

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P3_eclairage/P3_01_somme_par_piece.yaml

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P3_eclairage/P3_AVG/P3_AVG_AMHQ_1_UNITE.yaml

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P3_eclairage/P3_AVG/P3_AVG_AMHQ_2_ZONE.yaml

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P3_eclairage/ui_dashboard/etats_status.yaml
Pôle 4 - Groupe Présence

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P4_groupe_presence/01_phones_wifi_cellular_card_autom.yaml

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/P4_groupe_presence/02_logique_wifi_cellular.yaml
Météo

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/meteo/M_01_meteo_alertes_card.yaml

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/meteo/M_02_meteo_vent_vence_card.yaml

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/meteo/M_03_meteo_blitzortung.yaml

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/templates/meteo/M_04_tendances_th_ext_card.yaml

📂 SENSORS
Pôle 0 - Diag & Énergie Globale

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/sensors/P0_Energie_total_diag/Ecojoko_mini_maxi/Ecojoko_mini_maxi_avg_1h.yaml
Pôle 2 - Prises

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/sensors/P2_prise/P2_kWh.yaml
Pôle 3 - Éclairage

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/sensors/P3_eclairage/P3_kWh_1_UNITE.yaml

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/sensors/P3_eclairage/P3_kWh_2_ZONE.yaml

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/sensors/P3_eclairage/P3_kWh_3_TOTAL.yaml
Météo

https://www.google.com/search?q=https://raw.githubusercontent.com/BerrySwann/home_assistant_re-build/main/sensors/meteo/M_03_meteo_sensors_blitzortung.yaml
