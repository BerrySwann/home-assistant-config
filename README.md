# 🏠 Home Assistant – Configuration de Berry Swann

[![Home Assistant](https://img.shields.io/badge/Home%20Assistant-2026.x-blue?logo=home-assistant&logoColor=white)](https://www.home-assistant.io/)
[![GitHub last commit](https://img.shields.io/github/last-commit/BerrySwann/home-assistant-config)](https://github.com/BerrySwann/home-assistant-config)
[![Expert HA](https://img.shields.io/badge/Expert-HAOS_x86--64-success)](#)
[![Powered by Gemini IA](https://img.shields.io/badge/AI_Partner-Gemini_Flash-blueviolet)](#)

# ╭─────────────────────────────────────────────────────────────────────╮
# │ PRÉSENTATION GÉNÉRALE                                               │
# ╰─────────────────────────────────────────────────────────────────────╯

Ce dépôt contient ma configuration **Home Assistant OS (HAOS)** sur **Mini-PC x86-64**. 
L'installation est maintenue en collaboration avec une **IA (Gemini)** agissant comme un "Thought Partner" Expert pour garantir la propreté du code et l'optimisation des performances.

---

# ╭─────────────────────────────────────────────────────────────────────╮
# │ 🧠 MÉTHODOLOGIE ET CONTEXTE IA                                      │
# ╰─────────────────────────────────────────────────────────────────────╯

Pour assurer une cohérence parfaite, ce projet utilise un fichier maître de directives : 
👉 **[`IA_CONTEXT_BASE.md`](./IA_CONTEXT_BASE.md)**

Ce fichier définit les règles immuables appliquées par l'IA lors de la génération de code :
- **Standardisation visuelle** : Hiérarchie des titres en boîtes ASCII (74/37 car.).
- **Normes de nommage** : `unique_id` vs `name` et alias d'automatisations.
- **Ordre logique** : Respect strict de l'ordre des pièces (1 à 10) et des pôles.
- **Audit de logs** : Diagnostic systématique pour une instance "Zéro Erreur".

---

# ╭────────────────────────────╮
# │ ⚙️ SYSTÈME & INFRASTRUCTURE│
# ╰────────────────────────────╯

# ┌──────────────┐
# │ MATÉRIEL & OS│
# └──────────────┘
- **Machine** : Mini-PC Intel/AMD (Architecture x86-64).
- **Stockage** : SSD M.2 SATA haute performance.
- **Réseau Zigbee** : Dongle Sonoff EFR32MG21 sur rallonge USB (Z2M).

# ┌────────────────────┐
# │ ADD-ONS ET SERVICES│
# └────────────────────┘
- **Sécurité** : Cloudflared, AdGuard Home.
- **Gestion** : Studio Code Server, MariaDB, phpMyAdmin.
- **Backup** : Script de synchronisation GitHub automatique.

---

# ╭──────────────────────────╮
# │ 🎨 DASHBOARDS & UI (HACS)│
# ╰──────────────────────────╯

- **Cartes Clés** : `apexcharts-card`, `bubble-card`, `mushroom`, `bar-card`.
- **Logique** : Suivi énergétique détaillé, calculs de **DUT** (Durée d'Utilisation Totale) et monitoring de la qualité d'air.

---

# ╭──────────────────────╮
# │ 📸 APERÇU DU SYSTÈME│
# ╰──────────────────────╯

<p align="center">
  <img width="800" src="https://github.com/user-attachments/assets/7c3a7943-d287-4c01-b860-80ea76232a2f" alt="Dashboard Preview">
</p>

---

# ╭──────────────────────╮
# │ 📖 COMMUNAUTÉ & LIENS│
# ╰──────────────────────╯

- [Forum HACF](https://forum.hacf.fr) | [Howmation](https://howmation.com/fr_FR/)
- [Documentation Officielle HA](https://www.home-assistant.io/docs/)

✨ **Projet vivant, optimisé par IA et en évolution constante !**