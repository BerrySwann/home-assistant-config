# 📱 ARBORESCENCE DU DASHBOARD HOME ASSISTANT

**Fichier source** : `Dashboard 2026-02-07`
**Date d'analyse** : 2026-02-10
**Taille** : 27 899 lignes (1.2 MB)
**Session** : https://claude.ai/code/session_01PJGTfmoDjurL6V1sY2oQ1a

---

## 📋 VUE D'ENSEMBLE

### Statistiques

| Métrique | Valeur |
|----------|--------|
| **Nombre de vues** | 9 vues principales |
| **Lignes de code** | 27 899 lignes |
| **Templates** | 1 195 lignes de templates réutilisables |
| **Vue la plus volumineuse** | STORES (7 051 lignes) |
| **Vue la plus petite** | BATTERY (312 lignes) |

### Répartition par taille

```
📊 Répartition des lignes par vue :

STORES (Énergie)       ████████████████████████████ 25.2% (7 051 lignes)
MÉTÉO                  ███████████████████ 19.0% (5 307 lignes)
TEMPERATURES           ████████████████ 15.7% (4 372 lignes)
HOME                   ██████████ 10.2% (2 835 lignes)
MÀJ (Qualité air)      ████████ 8.8% (2 449 lignes)
PORTABLE               ███████ 7.7% (2 160 lignes)
SYSTÈME MINI PC        █████ 6.1% (1 697 lignes)
SYSTEME-FREEBOX        █ 1.9% (522 lignes)
BATTERY                ▌ 1.1% (312 lignes)
TEMPLATES              ████ 4.3% (1 195 lignes)
```

---

## 🗂️ STRUCTURE DÉTAILLÉE

### 📋 TEMPLATES (Lignes 1-1195)

**Fonction** : Templates réutilisables pour cohérence visuelle

**Contenu** :
- `streamline_templates` : Modèles de cartes standardisées
- Templates climatisation
- Templates voltage/batteries
- Templates portables
- Templates notifications

**Usage** : Référencés par `custom:streamline-card` dans tout le dashboard

---

### 📱 1. HOME (Lignes 1196-4030) - 2 835 lignes

**Fonction** : Vue d'accueil avec informations critiques et alertes

#### Sections :

##### 🌤️ Météo France Vence
- Carte `custom:meteofrance-weather-card`
- Prévisions animées
- Alertes météo temps réel

##### 💻 Monitoring Visual Studio Code
- État du service VSCode
- Alertes CPU
- Bouton redémarrage

##### ⚡ Détection de foudre en temps réel
- Distance des éclairs
- Localisation géographique
- Nombre d'impacts
- Intégration Blitzortung
- **Lien vers** : Vue MÉTÉO

##### 👥 Suivi de présence
- Statut WiFi
- Présence Eric
- Présence Mamour
- Détection automatique via WiFi/GPS

##### 💧 Détecteur de fuite cuisine
- Capteur d'humidité
- Alertes fuite d'eau

---

### 🌤️ 2. MÉTÉO (Lignes 4031-9337) - 5 307 lignes

**Fonction** : Données météorologiques complètes et prévisions

#### Sections :

##### Vue générale
- **Heading** : METEO
- **Appartement** : Température et humidité balcon nord

##### Prévisions & Cartes
- **Prévisions Météo France** : Carte interactive
- **Carte Windy** : Conditions en direct
- **Weather forecast** : Prévisions horaires
- **3 iframes Windy** :
  - Radar précipitations
  - Carte de pluie
  - Carte de température

##### Données atmosphériques
- **Vitesse du Vent** : Moyenne et rafales
- **Baromètre** : Pression atmosphérique
- **U.V.** : Indice UV
- **Pluie** : Précipitations actuelles
- **Pluie 24h** : Cumul Météo France

##### Données par pièce
Température et humidité pour :
- Entrée
- Cuisine
- Couloir
- Bureau
- Salle de Bain
- Chambre
- Têtes de Lit

---

### 🌡️ 3. TEMPERATURES (Lignes 9338-13709) - 4 372 lignes

**Fonction** : Contrôle climatisation/chauffage et monitoring températures

#### Sections :

##### Vue d'ensemble
- **Heading** : TEMPERATURE - HUMIDITEES
- **Graphique ApexCharts 24h** :
  - Température extérieure Vence
  - Température balcon Nord
  - Courbes avec seuils colorés

##### Tendances
- **Indicateurs variation** : Flèches colorées montrant évolution
  - 🔴 Hausse
  - 🔵 Baisse
  - ⚪ Stable

##### Récapitulatifs
- **Récap. Températures** : Toutes pièces
- **Récap. Humidité** : Toutes pièces
- **Consommation** : Énergie chauffage/clim

##### Contrôle Climatisation/Radiateurs

###### 🔄 CLIM. / RADIATEUR (Vue générale)
- État général tous équipements
- Boutons ON/OFF globaux

###### 4. SALON - Clim. Salon
**Carte principale** : État compact
**Carte détaillée** : CLIM. DU SALON
- Thermostat graphique
- Température cible vs actuelle
- Modes : Auto, Cool, Heat, Dry, Fan
- Programmation horaire
- Graphiques historiques (24h, 7j, 30j)
- DUT (Durée d'Utilisation Totale)
- Performance thermique
- Consommation énergétique

###### 5. CUISINE - Rad. Cuisine
**Carte principale** : État compact
**Carte détaillée** : RADIATEUR CUISINE
- Thermostat
- Programmation automatique :
  - L-Ma-Me-Je : 4h45-7h
  - Ve-Sa-Di : 5h45-8h
- Graphiques historiques
- DUT
- Performance thermique

###### 7. BUREAU - clim. Bureau
**Carte principale** : État compact
**Carte détaillée** : CLIM. DU BUREAU
- Thermostat
- Modes climatisation
- Programmation
- Graphiques historiques
- DUT
- Performance
- **Note** : Split mural + volet motorisé

###### 8. SDB - Radiateur SdB
**Carte principale** : État compact
**Carte détaillée** : Soufflant Salle de Bain
- Thermostat soufflant (2x1000W)
- Sèche-serviette (150W)
- Automatisations :
  - Soufflant OFF si >23°C
  - Sèche-serviette 1h après douche
- Graphiques historiques
- DUT
- Performance
- **Note** : Pièce interne sans fenêtre

###### 9. CHAMBRE - clim. Chambre
**Carte principale** : État compact
**Carte détaillée** : CLIM. DE LA CHAMBRE
- Thermostat
- Modes climatisation
- Graphiques historiques
- DUT
- Performance
- **Note** : Forte dissipation thermique (DUT élevé)

---

### 🪟 4. STORES (Lignes 13710-20760) - 7 051 lignes ⭐ VUE LA PLUS VOLUMINEUSE

**Fonction** : Contrôle stores + Monitoring énergie complet de la maison

#### Sections :

##### Contrôle des Stores
- **Heading** : STORES (×2)
- **CONDITIONS** : États des automatisations
- **Auto close at +34°** : Fermeture automatique si température >34°C
- **Contrôles individuels** :
  - Store Salon (SUD)
  - Store Bureau (NORD)

##### ⚡ Monitoring Énergie - Vue globale

###### ENERGIE HOME
- **Temps Réel** :
  - Puissance instantanée (W)
  - Graphique ApexCharts live
  - Indicateurs colorés par seuil

- **Ratio Mois A-1 / Semaine / A-1** :
  - Comparaisons temporelles
  - Graphiques d'évolution
  - Pourcentages de variation

- **Coût Mensuel et Quotidien** :
  - Prix du jour (€)
  - Prix du mois (€)
  - Prévisions facture
  - Tarifs heures creuses/pleines

- **Conso. réel sur 24 Heures** :
  - Graphique ApexCharts 24h
  - Courbe de puissance
  - Seuils colorés

- **Energie Totale 7 Jours** :
  - Graphique barres par jour
  - Comparaison semaine précédente
  - Identification pics de consommation

- **Coût total par Jours (hors Abo.)** :
  - Graphique € par jour
  - Tendances hebdomadaires

- **Conso. Mensuel par Jours** :
  - Vue mensuelle détaillée
  - Graphiques barres cumulées

##### ENERGIE MENSUEL (Start Month)
- Consommation depuis début du mois
- Cumul kWh
- Coût cumulé
- Projections fin de mois

##### 🏠 Données par pièce

###### Sélectionner une pièce
- Menu déroulant pour navigation rapide

###### 1. ENTRÉE
- **Prises** :
  - Box Internet IKEA
  - Horloge IKEA
- **Éclairage** :
  - Hue White Lamp Entrée
- **Graphiques** :
  - Consommation 24h
  - Historique 7j
  - Coût mensuel

###### 4. SALON
- **Prises** :
  - PC S-Gege IKEA
  - Chargeur NOUS
- **Éclairage** :
  - Table Salon (Hue White)
  - Ambiance 1, 2, 3 (Hue Ambiance)
  - Color Candle (Hue Color)
- **Climatisation** :
  - Clim Salon
- **Graphiques** :
  - Consommation par appareil
  - Somme éclairage (5 lampes)
  - Historiques détaillés

###### 5. CUISINE
- **Prises** :
  - Micro-ondes NOUS
  - Lave-linge NOUS
  - Lave-vaisselle NOUS
  - AirFryer Ninja NOUS
  - Four et plaque de cuisson
  - Frigo NOUS
  - Congélateur NOUS
- **Chauffage** :
  - Radiateur électrique
- **Éclairage** :
  - Hue White Lamp Cuisine
- **Graphiques** :
  - Consommation par appareil
  - Vue d'ensemble électroménager
  - Alertes surconsommation

###### 7. BUREAU
- **Prises** :
  - PC IKEA
  - Fer à repasser NOUS
- **Éclairage** :
  - Play 1, 2, 3 (Hue Play)
  - Lampe Bureau 1, 2 (Hue White)
- **Climatisation** :
  - Clim Bureau
- **Graphiques** :
  - Consommation PC
  - Somme éclairage (5 lampes)

###### 9. CHAMBRE
- **Prises** :
  - Tête de lit
  - TV NOUS
- **Éclairage** :
  - White 1, 2 (Hue White)
  - Color Zone 1, 2 (Hue Color)
- **Climatisation** :
  - Clim Chambre
- **Graphiques** :
  - Consommation par appareil
  - Somme éclairage (4 lampes)

###### 10. AUTRE - All Standby
- **Monitoring veilles** :
  - Somme de toutes les consommations standby
  - Détection appareils en veille
  - Graphique historique
  - Alertes gaspillage

##### 🔥 Énergie Clim/Radiateurs

###### ENERGIE (C)LIM / (R)ADIATEUR
- **Vue globale** :
  - Consommation totale chauffage/clim
  - Graphiques par équipement
  - Comparaisons périodes

- **Tendances** :
  - Évolution 24h
  - Évolution hebdomadaire
  - Évolution mensuelle
  - Prévisions consommation

##### 💡 Lampes par pièce
- **Détail** : Consommation individuelle chaque lampe Hue/Sonoff
- **Zones** : Sommes par pièce (eclairage_*_energie)

##### 🛁 SALLE DE BAIN
- **Équipements** :
  - Soufflant (2x1000W)
  - Sèche-serviette (150W)
- **Éclairage** :
  - Relais Sonoff miroir
  - Hue White Lamp SdB
- **Graphiques** :
  - Consommation par appareil
  - Historiques

##### 🖥️ Système
- **Services** :
  - GitHub (statut)
  - Restart VSCode (bouton)
  - MariaDB (état base de données)

---

### 📱 5. PORTABLE (Lignes 20761-22920) - 2 160 lignes

**Fonction** : Monitoring smartphones, tablettes et appareils IoT

#### Sections :

##### 📱 Smartphones personnels

###### Xiaomi POCO X7 Pro (Principal)
- **Batterie** :
  - Niveau %
  - État charge (Charging/Not Charging)
  - Santé batterie %
  - Température batterie °C
- **Réseau** :
  - Type connexion (WiFi/4G/5G)
  - Nom WiFi connecté
  - Opérateur mobile
  - Force signal
- **État** :
  - Localisation GPS
  - Applications actives

###### Oneplus 10Pro NE2213 (E)
- Batterie
- Réseau
- État

###### Samsung A8 SM-A530F
- Batterie
- Réseau
- État

###### Tablette
- Batterie
- Réseau
- État

###### Xiaomi POCO X7 Pro Mamour
- Batterie
- Réseau
- État

###### Oneplus 10Pro NE2213 (M)
- Batterie
- Réseau
- État

###### Oneplus 7 GM1901
- Batterie
- Réseau
- État

##### 🏠 Dispositifs IoT par pièce

###### 1. ENTRÉE
- Capteurs
- État connexion

###### 4. SALON
- Capteurs température/humidité
- État lumières
- État prises connectées

###### 📺 TV SALON
- État alimentation
- Consommation

###### 7. BUREAU
- Capteurs
- État équipements

###### 9. CHAMBRE
- Capteurs
- État équipements

###### 🛏️ TÊTE DE LIT
- Prise connectée
- Consommation

---

### 🔋 6. BATTERY (BP) (Lignes 22921-23232) - 312 lignes ⭐ VUE LA PLUS PETITE

**Fonction** : Monitoring batteries de tous les appareils sans fil

#### Sections :

##### Batteries boutons-poussoirs HUE
- **Carte** : `custom:battery-state-card`
- **Affichage** :
  - Total batteries
  - Niveau minimum
  - Liste détaillée
  - Alertes niveau faible (<20%)

##### Batteries boutons & détecteurs IKEA
- Boutons STYRBAR
- Détecteurs mouvement TRÅDFRI
- Alertes niveau faible

##### Batteries contacts fenêtres IKEA
- Capteurs ouverture TRÅDFRI
- État de chaque fenêtre
- Alertes niveau faible

##### Batteries contacts fenêtres SONOFF
- Capteurs ouverture SNZB-04
- État de chaque fenêtre
- Alertes niveau faible

##### Batteries thermostats SONOFF
- Thermostats TRVZB
- Niveau batterie par thermostat
- Alertes remplacement

**Fonctionnalités** :
- Vue agrégée toutes batteries
- Tri par niveau (plus faible en premier)
- Alertes visuelles (<20% rouge, <50% orange)
- Historiques de remplacement

---

### 💻 7. SYSTÈME MINI PC (Lignes 23233-24929) - 1 697 lignes

**Fonction** : Monitoring complet du Mini-PC hébergeant Home Assistant

#### Sections :

##### Mini - P.C.

###### 🖥️ CPU USED
- **Pourcentage utilisation** : Graphique gauge
- **Graphique 24h** : Courbe d'utilisation
- **Alertes** :
  - >80% : Warning
  - >95% : Critical

###### 🌡️ CPU Temp.
- **Température CPU** : Gauge avec seuils
- **Graphique historique** : 24h, 7j
- **Seuils** :
  - <60°C : Normal (vert)
  - 60-75°C : Warning (orange)
  - >75°C : Critical (rouge)

###### 💾 Mem. (Mémoire)
- **USED** : RAM utilisée (%)
- **FREE** : RAM disponible (GB)
- **Graphiques** :
  - Gauge utilisation
  - Graphique 24h
  - Graphique 7j
- **Alertes** : >90% utilisé

###### 💿 SSD SATA 512Go
- **Espace disque** :
  - Utilisé (GB)
  - Disponible (GB)
  - Pourcentage (%)
- **Graphiques** :
  - Gauge espace
  - Évolution temporelle
- **Alertes** : >85% utilisé

###### 📡 Download
- **Débit réseau** :
  - Download (Mb/s)
  - Upload (Mb/s)
  - Graphique temps réel
  - Historique 24h

###### ⚙️ Autres métriques système
- **Uptime** : Temps de fonctionnement
- **Load Average** : Charge système (1min, 5min, 15min)
- **Processus actifs** : Nombre de processus
- **Température disque** : Si disponible
- **Services actifs** :
  - Home Assistant Core
  - MariaDB
  - Mosquitto (MQTT)
  - VSCode Server
  - Samba
  - ESPHome

**Fonctionnalités** :
- Alertes automatiques si seuils dépassés
- Boutons actions rapides :
  - Redémarrer HA
  - Redémarrer host
  - Nettoyer logs
- Graphiques ApexCharts avec zoom

---

### 🌐 8. SYSTEME-FREEBOX (Lignes 24930-25451) - 522 lignes

**Fonction** : Monitoring Freebox et tests de connexion Internet

#### Sections :

##### 📡 FREEBOX

###### État connexion
- **Statut** : Connecté/Déconnecté
- **Type connexion** : Fibre FTTH
- **Firmware** : Version actuelle

###### Informations réseau
- **External IPv4** : Adresse IP publique v4
- **External IPv6** : Adresse IP publique v6
- **Uptime** : Durée de connexion
- **Connection** : État liaison
- **Type** : FTTH

##### 🚀 Speedtest

###### Contrôles
- **Bouton "Démarrer Speedtest"** :
  - Lance test de débit
  - Affichage temps réel
  - Historisation résultats

- **Bouton "Afficher Historique"** :
  - Graphiques historiques
  - Évolution débits
  - Comparaisons périodes

###### Résultats temps réel
- **Download** : Débit descendant (Mb/s)
- **Upload** : Débit montant (Mb/s)
- **Ping** : Latence (ms)
- **Jitter** : Variation latence (ms)

###### Historique Speedtest
- **3 bubble-cards** :
  1. Dernières 24h
  2. 7 derniers jours
  3. 30 derniers jours

- **Graphiques** :
  - Courbes download/upload
  - Ping moyen
  - Identification problèmes

**Fonctionnalités** :
- Tests automatiques quotidiens
- Alertes si débit <80% attendu
- Comparaison avec débit souscrit
- Détection dégradations

---

### 🔄 9. MÀJ (Lignes 25452-27900) - 2 449 lignes

**Fonction** : Mises à jour système + Qualité de l'air + Environnement

#### Sections :

##### 🔄 Mises à jour Home Assistant

###### H.A. SERVER
- **Heading** : Système Home Assistant
- **Séparateurs par pièce** :
  - SALON
  - BUREAU
  - CHAMBRE

###### H.A. UPDATE
- **HA Core** :
  - Version actuelle
  - Version disponible
  - Bouton update
  - Changelog

- **HA OS** :
  - Version système
  - Version disponible
  - Bouton update

- **HA Supervisor** :
  - Version superviseur
  - Version disponible
  - Bouton update

###### H.A. ADD-ON
- **Liste add-ons avec versions** :
  - MariaDB
  - Mosquitto Broker
  - File Editor
  - Samba Share
  - Terminal & SSH
  - ESPHome
  - VSCode Server
  - DuckDNS
  - NGINX Proxy Manager

- **Pour chaque add-on** :
  - Version actuelle
  - Version disponible
  - Statut (Running/Stopped)
  - Bouton update/start/stop
  - Logs

##### 🌬️ AIR QUALITY (Monitoring air intérieur)

###### Vue d'ensemble
- **Heading** : AIR QUALITY
- **Capteurs IKEA VINDSTYRKA** (3 pièces)

###### 4. SALON
- **PM2.5** : Particules fines (μg/m³)
  - Valeur actuelle
  - Moyenne 24h
  - Graphique historique
  - Seuils OMS :
    - <15 : Bon (vert)
    - 15-25 : Moyen (jaune)
    - 25-50 : Dégradé (orange)
    - >50 : Mauvais (rouge)

- **tCOV (VOC Index)** : Composés organiques volatils
  - Index actuel (0-500)
  - Moyenne 24h
  - Graphique historique
  - Seuils :
    - <100 : Excellent (vert)
    - 100-150 : Bon (jaune)
    - 150-200 : Moyen (orange)
    - >200 : Mauvais (rouge)

- **Température** : °C
- **Humidité** : %

###### 7. BUREAU
- PM2.5
- tCOV
- Température
- Humidité

###### 9. CHAMBRE
- PM2.5
- tCOV
- Température
- Humidité

###### Graphiques comparatifs
- **3 pièces simultanées** : PM2.5
- **3 pièces simultanées** : tCOV
- **Évolutions 24h**
- **Évolutions 7j**
- **Moyennes mensuelles**

##### 🌸 POLLENS - POLUTION (Données pollens/pollution)

###### Pollens
- **Indices polliniques** : Par type de pollen
  - Graminées
  - Bouleau
  - Cyprès
  - Ambroisie
  - Armoise
  - Olivier

- **Échelle** : 0-5
  - 0 : Nul
  - 1 : Très faible
  - 2 : Faible
  - 3 : Moyen
  - 4 : Élevé
  - 5 : Très élevé

- **Source** : Réseau National de Surveillance Aérobiologique (RNSA)
- **Localisation** : Vence (06140)

###### Pollution extérieure
- **Indice ATMO** : Qualité de l'air extérieur
  - Échelle 0-10
  - Source : AtmoSud
  - Prévisions J+1, J+2

- **Polluants** :
  - NO₂ (Dioxyde d'azote)
  - O₃ (Ozone)
  - PM10 (Particules grossières)
  - PM2.5 (Particules fines)

##### 💧 VIGIEAU / VIGI - EAU (Vigilance eau)

###### Restrictions eau
- **Niveau alerte** : Département 06 (Alpes-Maritimes)
  - Vert : Vigilance
  - Jaune : Alerte
  - Orange : Alerte renforcée
  - Rouge : Crise

- **Mesures applicables** :
  - Arrosage jardins
  - Lavage véhicules
  - Remplissage piscines
  - Usages agricoles

###### Consommation eau (si capteur présent)
- Consommation journalière
- Consommation mensuelle
- Alertes surconsommation
- Détection fuites

---

## 🎨 CARTES CUSTOM UTILISÉES

### Configuration requise

Le dashboard utilise de nombreuses cartes custom HACS :

| Carte | Usage | Occurrences |
|-------|-------|-------------|
| `custom:meteofrance-weather-card` | Météo France animée | HOME, MÉTÉO |
| `custom:bubble-card` | Séparateurs, entités, boutons | Partout |
| `custom:button-card` | Boutons personnalisés | Partout |
| `custom:streamline-card` | Templates réutilisables | Partout |
| `custom:mushroom-*` | Interface moderne | Partout |
| `custom:apexcharts-card` | Graphiques sophistiqués | Énergies, températures |
| `custom:battery-state-card` | Monitoring batteries | BATTERY |
| `custom:stack-in-card` | Empilement sans bordures | Partout |
| `custom:auto-entities` | Entités dynamiques | Lampes, prises |
| `custom:tabbed-card` | Onglets | Énergies |
| `custom:mini-graph-card` | Graphiques simples | Températures |
| `custom:vertical-stack-in-card` | Empilement vertical | Partout |
| `custom:layout-card` | Grilles personnalisées | Partout |
| `custom:swipe-card` | Carrousels | Météo |
| `custom:enhanced-shutter-card` | Contrôle stores visuels | STORES |

### Cartes natives HA

| Carte | Usage |
|-------|-------|
| `heading` | Titres de sections |
| `vertical-stack` | Empilement vertical |
| `horizontal-stack` | Empilement horizontal |
| `conditional` | Affichage conditionnel |
| `entities` | Listes d'entités |
| `thermostat` | Contrôle climatisation |
| `weather-forecast` | Prévisions météo |
| `iframe` | Intégration Windy |
| `markdown` | Texte formaté |
| `picture-entity` | Images avec état |

---

## 🔗 INTÉGRATIONS EXTERNES

### APIs utilisées

| Service | Usage | Vue(s) |
|---------|-------|--------|
| **Météo France** | Prévisions, alertes, pluie | HOME, MÉTÉO |
| **Windy** | Cartes météo interactives | MÉTÉO |
| **Blitzortung** | Détection foudre temps réel | HOME, MÉTÉO |
| **Linky (MyElectricalData)** | Consommation électrique | STORES |
| **RNSA** | Indices polliniques | MÀJ |
| **AtmoSud** | Qualité air extérieur | MÀJ |
| **VigiEau** | Restrictions eau | MÀJ |
| **OpenStreetMap** | Géolocalisation | HOME (foudre) |

---

## 🎯 FONCTIONNALITÉS REMARQUABLES

### 1. Automatisations visuelles

- **Stores** : Fermeture automatique à 34°C
- **Alertes clignotantes** : Foudre proche, seuils dépassés
- **Indicateurs colorés** : Seuils température, qualité air, batteries

### 2. Navigation inter-vues

- **Liens contextuels** :
  - Foudre (HOME) → MÉTÉO
  - Température → TEMPERATURES (contrôle clim)
  - Prise → STORES (énergie détaillée)

### 3. Monitoring énergie complet

- **Temps réel** : Puissance instantanée
- **Historique** : 24h, 7j, 30j
- **Coûts** : Quotidien, mensuel, prévisions
- **Comparaisons** : Mois précédent, semaine précédente
- **Par appareil** : Détail consommation

### 4. Templates réutilisables

- **Cohérence visuelle** : Même design partout
- **Maintenance facilitée** : Modification centralisée
- **Performance** : Chargement optimisé

### 5. Graphiques avancés

- **ApexCharts** :
  - Seuils colorés dynamiques
  - Zoom interactif
  - Annotations
  - Multi-séries

---

## 📊 RECOMMANDATIONS

### Points forts ✅

- Organisation logique par fonctionnalité
- Monitoring énergie très complet
- Intégrations externes nombreuses
- Design cohérent (templates)
- Automatisations visuelles

### Points d'amélioration 🔄

1. **Vue STORES surchargée** (7 051 lignes)
   - **Recommandation** : Séparer en 2 vues
     - Vue "Stores & Volets"
     - Vue "Énergie HOME"

2. **Navigation**
   - **Recommandation** : Ajouter menu latéral
   - Utiliser `custom:navbar-card` pour navigation rapide

3. **Performance**
   - **Recommandation** : Lazy loading des graphiques lourds
   - Utiliser `show: { on_idle: true }` pour graphiques

4. **Documentation**
   - **Recommandation** : Ajouter tooltips explicatifs
   - Utiliser `markdown` cards avec instructions

5. **Maintenance**
   - **Recommandation** : Versioning du dashboard
   - Créer backups avant modifications importantes

---

## 📚 STRUCTURE FICHIER YAML

### Organisation des lignes

```yaml
# Lignes 1-1195 : TEMPLATES
button_card_templates:
  streamline_templates:
    # Templates climatisation
    # Templates batteries
    # Templates portables
    # etc.

# Lignes 1196+ : VIEWS
views:
  - title: Home              # Lignes 1196-4030
    path: home
    cards: [...]

  - title: Météo             # Lignes 4031-9337
    path: meteo
    cards: [...]

  - title: Temperatures      # Lignes 9338-13709
    path: temperatures
    cards: [...]

  # ... suite des vues
```

### Exemple de structure carte

```yaml
- type: custom:bubble-card
  card_type: separator
  name: ENERGIE HOME
  icon: mdi:lightning-bolt

- type: custom:apexcharts-card
  header:
    title: Conso. réel sur 24 Heures
  series:
    - entity: sensor.ecojoko_consommation_reseau
      name: Puissance
      type: line
      color: '#03a9f4'
  graph_span: 24h
```

---

## 🔍 CONCLUSION

Votre dashboard est **extrêmement complet et bien pensé** !

### Statistiques finales

- **✅ 9 vues** couvrant tous les aspects de la maison
- **✅ ~27 000 lignes** de configuration
- **✅ 15+ cartes custom** pour fonctionnalités avancées
- **✅ 7+ intégrations externes** pour données enrichies
- **✅ Monitoring 360°** : énergie, météo, températures, qualité air

### Utilisation typique

1. **Vue HOME** : Coup d'œil matinal (météo, alertes, présence)
2. **Vue MÉTÉO** : Vérification conditions (sortie, arrosage, etc.)
3. **Vue TEMPERATURES** : Ajustement climatisation/chauffage
4. **Vue STORES** : Contrôle volets + suivi consommation électrique
5. **Vue PORTABLE** : Vérification batteries appareils
6. **Vue BATTERY** : Planification remplacements piles
7. **Vue SYSTÈME MINI PC** : Surveillance santé serveur
8. **Vue SYSTEME-FREEBOX** : Vérification connexion Internet
9. **Vue MÀJ** : Maintenance système + qualité air

---

**Document généré le** : 2026-02-10
**Pour** : Dashboard 2026-02-07
**Par** : Claude AI
