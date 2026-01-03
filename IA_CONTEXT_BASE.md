# 🧠 BASE DE CONTEXTE EXPERT HOME ASSISTANT (BerrySwann)
Dernière mise à jour : 2026-01-01

## 🛠 RÈGLES DE CODAGE STRICTES
- **AUTOMATIONS** : 
  - ⛔ **INTERDIT** : Jamais d' "id:" au niveau global.
  - ✅ **OBLIGATOIRE** : "alias" en MAJUSCULES pour chaque bloc (trigger, condition, action, choose, repeat).
  - 🆗 **AUTORISÉ** : "id:" permis UNIQUEMENT à l'intérieur des triggers ou actions.
- **ENTITÉS** : 
  - `name`: "Nom Lisible" (Majuscules/Espaces).
  - `unique_id`: nom_lisible (Minuscules/Underscores).
- **MODIFICATIONS** : 
  - Annoter chaque ligne modifiée : `# "[L...] modif"`.

## 🏠 ORGANISATION ET PÔLES
1. ENTRÉE | 2. CELLIER | 3. TOILETTE | 4. SALON | 5. CUISINE | 6. COULOIR | 7. BUREAU | 8. SDB | 9. CHAMBRE | 10. STANDBY.
- **PÔLES** : 1. PRISES | 2. CHAUFFAGE/CLIM | 3. ÉCLAIRAGE.

## 🔌 DÉTAILS DES ÉQUIPEMENTS PAR PÔLE (Ordre Strict)

### 1. PRISES
- **1. ENTRÉE** : box_internet, horloge.
- **4. SALON** : pc_s_gege, salon_chargeur.
- **5. CUISINE** : micro_ondes, lave_linge, lave_vaisselle, airfryer, four_plaque, frigo, congel.
- **7. BUREAU** : bureau_pc, fer.
- **9. CHAMBRE** : tete_de_lit, tv.
- **10. STANDBY** : all_standby.

### 2. CHAUFFAGE / CLIM
- **4. SALON** : clim_salon.
- **5. CUISINE** : radiateur_cuisine.
- **7. BUREAU** : clim_bureau.
- **8. SDB** : soufflant, seche_serv.
- **9. CHAMBRE** : clim_chambre.

### 3. ÉCLAIRAGE
- **1. ENTRÉE** : Hue White.
- **4. SALON** : Table, Ambiance 1, 2, 3, Color 1.
- **5. CUISINE** : Hue White.
- **6. COULOIR** : Hue White.
- **7. BUREAU** : Play 1, 2, 3, White 1, 2.
- **8. SDB** : Miroir Sonoff, Hue White.
- **9. CHAMBRE** : White 1, 2, Color Eric, Color Gege.

## 🔗 INDEX INTÉGRAL DES FICHIERS SOURCES (RAW)

[INDEX GITHUB RAW] :
### 📂 Consommation électrique
- https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/notifs/diag_conso_elec.txt
### 📂 Script Github
- https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/.scripts/ha_git_backup.sh
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
- sql: https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/sql.yaml
- utility_meter: https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/utility_meter.yaml  

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

### 📂 Ecojoko (Série 11)
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
- https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/16_1_icon%20ete_hivers.yaml

### 📂 Diag Conso par Poste (Série 17) 
- https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/17_1_diag_conso_jour_en_cours.yaml
- https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/17_1_diag_conso_mois_en_cours.yaml

### 📂 Puissance de Croisière en Watts (Série 18) 
- https://raw.githubusercontent.com/BerrySwann/home-assistant-config/refs/heads/main/templates/18_1_Moyenne_daily_monthly.yaml





