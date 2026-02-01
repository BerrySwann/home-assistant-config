# 🏠 Home Assistant – Configuration de Berry Swann

[![Home Assistant](https://img.shields.io/badge/Home%20Assistant-2026.x-blue?logo=home-assistant&logoColor=white)](https://www.home-assistant.io/)
[![GitHub last commit](https://img.shields.io/github/last-commit/BerrySwann/home-assistant-config)](https://github.com/BerrySwann/home-assistant-config)
[![Expert HA](https://img.shields.io/badge/Expert-HAOS_x86--64-success)](#)
[![Powered by Gemini IA](https://img.shields.io/badge/AI_Partner-Gemini_Flash-blueviolet)](#)

Ce dépôt contient ma configuration **Home Assistant OS (HAOS)** tournant sur un **mini-PC x86-64 (Generic image)**. Il reflète une installation domotique complète et optimisée : énergie, climatisation, suivi de confort et dashboards avancés.

---

## 🧠 Méthodologie & IA Thought Partner
L'intégralité du code et de la structure est régie par le fichier maître de directives :
👉 **[`IA_CONTEXT_BASE.md`](./IA_CONTEXT_BASE.md)**

Cette configuration est maintenue en collaboration avec une **IA (Gemini)** pour garantir :
* **Standardisation visuelle** : Hiérarchie stricte en boîtes ASCII (74/37 car.).
* **Qualité du code** : Zéro ID global dans les automatisations, nomenclature unique_id rigoureuse.
* **Santé Système** : Audit permanent des logs pour éliminer les latences et erreurs de format.

---

## ⚙️ Système & Matériel
* **OS** : Home Assistant OS (HAOS) – image `Generic x86-64`
* **Matériel** : mini-PC Intel/AMD (x86-64) avec SSD M.2 SATA
* **Accès** : `/config` via Samba, Studio Code Server, SSH

### 📦 Add-ons utilisés
* **Zigbee2MQTT** (Sonoff EFR32MG21 + Rallonge USB pour éviter les interférences)
* **MariaDB** (Base de données optimisée pour le recorder)
* **Cloudflared** (Accès distant sécurisé) & **AdGuard Home** (DNS/Ads)
* **Studio Code Server**, **Samba Share**, **phpMyAdmin**, **Glances**

---

## 🧩 Intégrations & Énergie
* **Énergie** : `MyElectricalData` (Linky HP/HC), `Ecojoko` (Conso réseau temps réel)
* **Météo & Environnement** : `Mété France`, `Blitzortung` (Foudre), `Pollens`, `UV`
* **Hardware** : `Meross LAN`, `Philips HUE`, `IKEA`, `NOUS`, `Sonoff`
* **Logique** : `Node-RED Companion`, `Browser Mod` (Pop-ups dynamiques)

---

## 🎨 Dashboards Lovelace (HACS)
Utilisation du mode **YAML + Storage** avec une optimisation pour tablette et mobile.
* **Fonctionnalités** :
* **Suivi énergie** : Journalier & Mensuel (730h), moyennes glissantes (24h/730h).
* **Suivi Clim/Radiateurs** : Calcul automatique des cibles (Été/Hiver) et **DUT** (Durée d'Utilisation Totale).
* **Analyse Thermique (DEP)** : Diagnostic d'Efficacité et Performance (Ratio isolation/conso en temps réel).
* **Qualité d'air** : Monitoring détaillé PM2.5 et tCOV par pièce.

---

## 🔒 Sauvegardes & Git
* **Automatique** : Backup GitHub via scripts (`.scripts/ha_git_backup.sh`) et automatisations.
* **Fréquence** : Commit horaire (H+10) et commit complet hebdomadaire (Dimanche 03h40).
* **Hygiène** : `.gitignore` strict (exclusion des bases `.db`, `.storage`, secrets).

---

## 📂 Structure du projet
* `configuration.yaml` : Cœur du système avec inclusions modulaires.
* `templates/` : Capteurs virtuels Jinja2 (Séries 01 à 18).
* `sensors/` : Capteurs virtuels Jinja2 (découpés par pôles et usages)
* `automations.yaml` : Règles métier sans ID globaux pour la stabilité.
* `dashboard*.yaml` : Dashboards Lovelace versionnés.

---

## 🚀 Prochains objectifs
* Migration vers `streamline_templates`.
* Automatisation prédictive de la climatisation (Locale + Météo).
* Monitoring avancé des ressources add-ons (RAM/CPU Studio Code Server).

---

## 📸 Aperçu
<p align="center">
  <img width="600" height="3520" alt="HA" src="https://github.com/user-attachments/assets/fc33371e-3d93-4102-a357-14aa3a4a8863" />
</p>

---

✨ **Projet vivant, optimisé par IA et en évolution constante !**

## 📖 Liens & Communauté
* [Forum HACF](https://forum.hacf.fr) 
* [Documentation Officielle HA](https://www.home-assistant.io/docs/)

✨ **Projet vivant, optimisé par IA et en évolution constante !**
