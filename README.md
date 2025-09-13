# 🏠 Home Assistant – Configuration de Berry Swann

[![Home Assistant](https://img.shields.io/badge/Home%20Assistant-2025.9.x-blue?logo=home-assistant&logoColor=white)](https://www.home-assistant.io/)
[![GitHub last commit](https://img.shields.io/github/last-commit/BerrySwann/home-assistant-config)](https://github.com/BerrySwann/home-assistant-config)

Ce dépôt contient ma configuration **Home Assistant OS** (HAOS) qui tourne sur un mini-PC **x86-64 (Generic image)**.  
Il reflète mon installation domotique complète : énergie, climatisation, suivi de confort, automations intelligentes, sauvegardes Git, et dashboards Lovelace très personnalisés.

---

## ⚙️ Système & Matériel
- **OS** : Home Assistant OS (HAOS) – image `Generic x86-64`
- **Matériel** : mini-PC Intel/AMD (x86-64)
- **Stockage** : SSD M.2 SATA
- **Accès fichiers** : `/config` via Samba, Studio Code Server, SSH

---

## 📦 Add-ons utilisés
- **Zigbee2MQTT** (dongle Sonoff EFR32MG21, firmware EmberZNet)
- **MariaDB** (base optimisée pour recorder)
- **Studio Code Server** (édition des configs dans HAOS)
- **Samba Share** (partage réseau)
- **Cloudflared** (remote access sécurisé)
- **Uptime Kuma** (monitoring services)
- **Piper (Wyoming TTS)** (voix locale)
- **phpMyAdmin** (gestion DB)
- **AdGuard Home** (DNS / blocage pubs)
- **Glances** (stats système)
- **Silicon Labs Flasher** (flash firmware dongle)

---

## 🧩 Intégrations principales
- **MyElectricalData** → suivi conso Linky (HP/HC, historique, coûts)
- **Ecojoko** → consommation électrique réseau
- **Node-RED Companion** → automatisations avancées
- **Browser Mod** → pop-ups et navigation dynamique
- **Météo France** + Blitzortung (alertes météo & orages)
- **Meross LAN** / **Nous** / **IKEA Tradfri** (prises et capteurs Zigbee/Wi-Fi)

---

## 🎨 Dashboards Lovelace
- Mode **YAML + Storage** (mix, maintenance via `/config/dashboard*.yaml`)
- Vues optimisées pour tablette & téléphone
- **Custom cards via HACS** :
  - `apexcharts-card`, `auto-entities`, `bar-card`, `bubble-card`, `ring-tile-card`, `streamline-card`, `mushroom-*`, `vertical-stack-in-card`, etc.
- **Exemples** :
  - Suivi énergie : conso journalière & mensuelle (diff/730h-> (~1 mois)), moyennes glissantes (mean 24h / 730h)
  - Suivi clim/radiateurs avec cibles calculées (été/hiver)
  - Pop-ups Bubble par pièce (températures, qualité d’air, état appareils)
  - Cartes météo (Météo France, Blitzortung, pollens, UV, etc.)

---

## ⚡ Énergie & Confort
- **Utility meters** (journaliers / 730h) pour chaque appareil
- **Sensors statistiques** (moyennes 24h, 730h-> (~1 mois), etc.)
- **Delta intérieur/extérieur** et calcul automatique de la **température cible climatisation**
- Graphiques ApexCharts avec **color thresholds** & brush

---

## 🔒 Sauvegardes & Git
- **Sauvegardes HA (snapshots)** via Supervisor
- **Backup GitHub automatique** (scripts + automations YAML) :
  - Commit toutes les heures (H+10)
  - Commit complet chaque dimanche à 03h40
- `.gitignore` adapté : exclusion `.db`, `.storage`, médias, backups, secrets

---

## 📂 Structure de fichiers
- `configuration.yaml` → inclut les sous-fichiers
- `automations.yaml` → règles YAML
- `templates/` → templates Jinja2 (capteurs, helpers)
- `dashboard*.yaml` → dashboards Lovelace versionnés
- `utility_meter.yaml`, `input_number.yaml`, `group.yaml`, `command_line.yaml`, etc.

---

## 🛠️ Particularités
- **Annotations permanentes** dans les fichiers YAML :  
  chaque correction est commentée avec `# "[Lxxx] ancienne valeur"`
- **Optimisation MariaDB** : purge automatique, `recorder` limité
- **Zigbee2MQTT** : suivi complet réseau (network table, routers/endpoints)

---

## 🚀 Prochains objectifs
- Migration complète des dashboards vers `streamline_templates`
- Automatisation intelligente climatisation (IA locale + météo)
- Intégration plus poussée des capteurs air qualité (PM2.5, COV)
- Ajout d’un monitoring détaillé pour Studio Code Server (RAM/CPU)

---

## 📸 Aperçu
<img width="1218" height="3510" alt="image" src="https://github.com/user-attachments/assets/7c3a7943-d287-4c01-b860-80ea76232a2f" />




---

## 📖 Liens utiles
- [Home Assistant Docs](https://www.home-assistant.io/docs/)
- [Community Add-ons (Hass.io)](https://github.com/hassio-addons/repository)
- [Forum Home Assistant](https://community.home-assistant.io/)
- [Frorum Howmation](https://howmation.com/fr_FR/)
- [forum domotique](https://forumdomotique.com/)
- [Forum HACF (communauté francophone)](https://forum.hacf.fr)

- [Mon dépôt GitHub](https://github.com/BerrySwann/home-assistant-config)

---

✨ Projet vivant et en évolution constante !
