🧠 BASE DE CONTEXTE EXPERT HOME ASSISTANT (BerrySwann)
Dernière mise à jour : 2026-01-03

📏 RÈGLES DE TITRAGE YAML (HIÉRARCHIE VISUELLE)
Ces règles s'appliquent exclusivement aux fichiers de configuration (.yaml).

1. Titre Principal (Section / Série / Plateforme)
Format : Boîte ASCII avec coins arrondis (╭, ─, ╮, │, ╰, ╯).
Largeur : 74 caractères (pleine largeur).
Style : Texte en MAJUSCULES, préfixé par le type de composant.

2. Titre Secondaire (Pièce / Pôle / Sous-groupe)
Format : Boîte ASCII avec coins carrés (┌, ─, ┐, │, └, ┘).
Largeur : 37 caractères (moitié du titre principal).
Style : Texte en MAJUSCULES, respectant la numérotation des pièces (1 à 10).

🛠️ RÈGLES DE CODAGE STRICTES
AUTOMATIONS :

⛔ INTERDIT : Jamais d' id: au niveau global (en haut de l'automatisation).
✅ OBLIGATOIRE : alias en MAJUSCULES pour chaque bloc (trigger, condition, action, choose).
🆗 AUTORISÉ : id: permis UNIQUEMENT à l'intérieur des triggers ou actions.

ENTITÉS :
name: "Nom Lisible" (Majuscules/Espaces).
unique_id: nom_lisible (Minuscules/Underscores).

MODIFICATIONS :
Annoter chaque ligne modifiée : # "[L...] modif".
Bloc final obligatoire : # annotations_log:.

🏠 ORGANISATION DES PIÈCES ET PÔLES
ORDRE DES PIÈCES (1 À 10) :
 - ENTRÉE | 2. CELLIER | 3. TOILETTE | 4. SALON | 5. CUISINE | 6. COULOIR | 7. BUREAU | 8. SDB | 9. CHAMBRE | 10. STANDBY.
ORDRE DES PÔLES (1 À 3) :
 - PRISES | 2. CHAUFFAGE/CLIM | 3. ÉCLAIRAGE.

🔌 DÉTAILS DES ÉQUIPEMENTS PAR PÔLE

**1. Pôle Prises**
  - ENTRÉE (1): box_internet, horloge.
  - SALON (4): pc_s_gege, salon_chargeur.
  - CUISINE (5): micro_ondes, lave_linge, lave_vaisselle, airfryer, four_plaque, frigo, congel.
  - BUREAU (7): bureau_pc, fer.
  - CHAMBRE (9): tete_de_lit, tv.
  - STANDBY (10): all_standby.

**2. Pôle Chauffage / Clim**
  - SALON (4): clim_salon.
  - CUISINE (5): radiateur_cuisine.
  - BUREAU (7): clim_bureau.
  - SDB (8): soufflant, seche_serv.
  - CHAMBRE (9): clim_chambre.

**3. Pôle Éclairage**
  - ENTRÉE (1): Hue White.
  - SALON (4): Table, Ambiance 1, 2, 3, Color 1.
  - CUISINE (5): Hue White.
  - COULOIR (6): Hue White.
  - BUREAU (7): Play 1, 2, 3, White 1, 2.
  - SDB (8): Miroir Sonoff, Hue White.
  - CHAMBRE (9):Hue White 1, 2, Color Eric, Color Gege.

🔗 INDEX INTÉGRAL DES FICHIERS SOURCES (RAW GITHUB)
📂 Configuration & Scripts
configuration.yaml
automations.yaml
scripts.yaml
sensors.yaml
utility_meter.yaml
ha_git_backup.sh

📂 Séries Templates (01 à 18)
Série 01 (Météo/Foudre) : 01_2_meteo_foudre_card.yaml

Série 03 (Climat/DUT) : 03_01_energie_clim_radiateur_card.yaml

Série 17 (Diagnostic) : 17_1_diag_conso_jour_en_cours.yaml