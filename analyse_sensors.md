# 📊 ANALYSE COMPLÈTE DES SENSORS HOME ASSISTANT

**Date d'analyse** : 2026-02-10
**Auteur** : Claude AI
**Session** : https://claude.ai/code/session_01PJGTfmoDjurL6V1sY2oQ1a

---

## 📑 TABLE DES MATIÈRES

1. [Vue d'ensemble](#vue-densemble)
2. [Fichiers analysés](#fichiers-analysés)
3. [Inventaire détaillé](#inventaire-détaillé)
4. [Types de sensors](#types-de-sensors)
5. [Analyse des statistics](#analyse-des-statistics)
6. [Problèmes détectés](#problèmes-détectés)
7. [Recommandations](#recommandations)

---

## 📊 VUE D'ENSEMBLE

### Statistiques globales

| Métrique | Valeur |
|----------|--------|
| **Fichiers analysés** | 11 fichiers |
| **Sensors totaux** | ~105 sensors |
| **Types de platforms** | 4 types |
| **Pôles couverts** | 3 pôles + divers |

### Répartition par type

| Type Platform | Nombre | Usage principal |
|---------------|--------|-----------------|
| `integration` | 49 | Conversion W → kWh/Wh |
| `statistics` | 29-40 | Moyennes 24h/30j |
| `history_stats` | 12 | Durée d'utilisation (DUT) |
| `rest` | 4 | API externes |

---

## 📁 FICHIERS ANALYSÉS

### Fichier principal

#### `#sensors.yaml` (456 lignes) ⚠️ DÉSACTIVÉ

**État** : Fichier désactivé (préfixe `#`)
**Contenu** : Mélange de tous les types de sensors

| Type | Nombre |
|------|--------|
| `integration` | 24 |
| `statistics` | 19 |
| `history_stats` | 6 |
| `rest` | 2 |

**Problème** : Ce fichier est redondant avec les fichiers du répertoire `sensors/`

---

### Répertoire `sensors/`

#### 🔥 PÔLE 1 : CHAUFFAGE & CLIMATISATION

##### `p1_0_sensors_clim_rad.yaml`
- **Fonction** : Conversion Power (W) → Énergie (kWh)
- **Platform** : `integration` (6 sensors)
- **Pièces couvertes** : Salon, Cuisine, Bureau, SDB (2x), Chambre
- **Configuration** :
  ```yaml
  - platform: integration
    source: sensor.*_power
    unit_prefix: k
    unit_time: h
    round: 3
  ```

##### `p1_1_sensors - dut.yaml` ⚠️ Espace dans le nom
- **Fonction** : Durée d'Utilisation Totale (DUT)
- **Platform** : `history_stats` (6 sensors)
- **Type** : Calcul du temps de fonctionnement journalier
- **Configuration** :
  ```yaml
  - platform: history_stats
    type: time
    start: "{{ now().replace(hour=0, minute=0, second=0) }}"
    end: "{{ now() }}"
  ```

##### `p1_2_sensors - Perf.yaml` ⚠️ Espace dans le nom
- **Fonction** : Performance thermique (moyenne 24h)
- **Platform** : `statistics` (11 sensors)
- **Analyse** : Efficacité énergétique par pièce
- **Configuration** :
  ```yaml
  - platform: statistics
    state_characteristic: mean
    max_age: { hours: 24 }
    precision: 2
  ```

##### `p1_3_sensors_moy_24h.yaml`
- **Fonction** : Moyennes 24h globales
- **Platform** : `statistics` (3 sensors)
- **Sensors** :
  - Conso Clim/Rad totale
  - Delta Température (int/ext)
  - DUT global

---

#### 🔌 PÔLE 2 : PRISES CONNECTÉES

##### `p2_sensors_ prises.yaml`
- **Fonction** : Conversion Power (W) → Énergie (kWh)
- **Platform** : `integration` (17 sensors)
- **Répartition** :
  - Entrée : 2 prises
  - Salon : 2 prises
  - Cuisine : 7 prises
  - Bureau : 2 prises
  - Chambre : 2 prises
  - Autre : 2 prises (standby, mini-PC)

---

#### 💡 PÔLE 3 : ÉCLAIRAGE

##### `p3_sensors_lumieres.yaml`
- **Fonction** : Conversion Power (W) → Énergie (Wh)
- **Platform** : `integration` (19 sensors)
- **Spécificité** : SANS `unit_prefix: k` (calcul en Wh, pas kWh)
- **Lampes** : Toutes les Hue individuelles par pièce
- **Configuration** :
  ```yaml
  - platform: integration
    source: sensor.*_power
    unit_time: h
    round: 2
  ```

---

#### 🌍 AUTRES SENSORS

##### `sensors_blitzortung.yaml`
- **Fonction** : Localisation de la foudre
- **Platform** : `rest` (1 sensor)
- **API** : OpenStreetMap Nominatim
- **Update** : Toutes les heures (3600s)

##### `sensors_erodi_ha.yaml` ⚠️ Doublons
- **Fonction** : Monitoring VSCode
- **Platform** : `rest` (2 sensors identiques)
- **Problème** : Doublon du même sensor
- **Endpoint** : `https://erodi-ha.com/a0d7b954_vscode/ingress`

##### `sensors_mini_pc.yaml`
- **Fonction** : Monitoring Mini-PC
- **Platforms** :
  - `statistics` (1) : Charge moyenne 24h
  - `integration` (1) : Consommation kWh

##### `sensors_pm25_et_tcov.yaml`
- **Fonction** : Qualité de l'air (moyennes 24h)
- **Platform** : `statistics` (6 sensors)
- **Capteurs** : IKEA VINDSTYRKA
- **Mesures** :
  - PM2.5 (particules fines) : Salon, Bureau, Chambre
  - tCOV (VOC Index) : Salon, Bureau, Chambre

---

## 🔧 TYPES DE SENSORS

### 1. `integration` (49 sensors)

**Fonction** : Convertit la puissance instantanée (W) en énergie cumulée (kWh ou Wh)

**Méthode de calcul** : Intégration de Riemann (méthode gauche)

#### Répartition :
- **Pôle 1** (Chauffage/Clim) : 6 sensors → **kWh** (avec `unit_prefix: k`)
- **Pôle 2** (Prises) : 17 sensors → **kWh** (avec `unit_prefix: k`)
- **Pôle 3** (Éclairage) : 19 sensors → **Wh** (SANS `unit_prefix`)
- **Autres** : 7 sensors

#### Paramètres typiques :
```yaml
- platform: integration
  source: sensor.device_power          # Source en Watts
  name: "Device kWh"
  unique_id: device_kwh
  method: left                         # Méthode de Riemann
  unit_prefix: k                       # k pour kWh, omis pour Wh
  unit_time: h                         # Par heure
  round: 3                             # 3 décimales
```

---

### 2. `statistics` (29-40 sensors)

**Fonction** : Calcule des statistiques sur une période glissante

**Caractéristique** : `mean` (moyenne)

#### Types d'entités sources :

##### 🌡️ Performance thermique (11 sensors)
- **Sources** : `sensor.performance_thermique_*`
- **Type** : Template sensors (calculs custom)
- **Périodes** : 24h et 30 jours
- **Pièces** : Salon, Cuisine, Bureau, SDB, Chambre + Global

##### 🌬️ Qualité de l'air (12 sensors)
- **Sources** :
  - `sensor.qualite_air_*_ikea_pm25` (particules PM2.5)
  - `sensor.qualite_air_*_ikea_voc_index` (VOC Index)
- **Type** : Capteurs IKEA VINDSTYRKA
- **Période** : 24h
- **Pièces** : Salon, Bureau, Chambre

##### 📊 Sensors agrégés (3 sensors)
- `sensor.conso_clim_rad_total` → Somme des consommations
- `sensor.temperature_delta_valeur` → Différence T° int/ext
- `sensor.dut_brut_total` → Durée d'utilisation totale

##### 🔌 Mini-PC (2 sensors)
- `sensor.prise_mini_pc_ikea_power` → Puissance moyenne
- `sensor.prise_mini_pc_ikea_energy` → Énergie moyenne

##### ⚡ Ecojoko (1 sensor)
- `sensor.ecojoko_consommation_reseau` → Conso réseau

#### Paramètres typiques :
```yaml
- platform: statistics
  entity_id: sensor.source_entity
  state_characteristic: mean          # Moyenne
  max_age: { hours: 24 }              # Période glissante
  precision: 1                        # Décimales
```

---

### 3. `history_stats` (12 sensors)

**Fonction** : Calcule la durée d'utilisation (DUT) d'un équipement

**Type** : `time` (en heures)

#### Répartition :
- **Pôle 1** (Chauffage/Clim) : 6 sensors
  - Clim Salon
  - Radiateur Cuisine
  - Clim Bureau
  - Soufflant SdB
  - Sèche-serviette SdB
  - Clim Chambre

#### Paramètres typiques :
```yaml
- platform: history_stats
  entity_id: sensor.device_power_status
  state: "on"                         # État à surveiller
  type: time                          # Durée en heures
  start: "{{ now().replace(hour=0, minute=0, second=0) }}"
  end: "{{ now() }}"
```

**Période** : Du début de journée à maintenant (remis à zéro à minuit)

---

### 4. `rest` (4 sensors)

**Fonction** : Interroge des API externes via HTTP

#### Sensors :

##### Blitzortung (1 sensor)
- **API** : OpenStreetMap Nominatim
- **Fonction** : Géolocalisation des éclairs
- **Update** : 3600s (1h)
- **Endpoint** : Dynamique basé sur lat/lon

##### VSCode Ping (2 sensors) ⚠️ Doublons
- **Endpoint** : `https://erodi-ha.com/a0d7b954_vscode/ingress`
- **Fonction** : Monitoring disponibilité VSCode
- **Update** : 60s
- **Timeout** : 15s

##### Ecojoko (1 sensor probable)
- **Type** : REST API pour données énergétiques

#### Paramètres typiques :
```yaml
- platform: rest
  resource: "https://api.example.com/endpoint"
  method: GET
  timeout: 15
  scan_interval: 60
  value_template: "{{ value_json.data }}"
```

---

## 📈 ANALYSE DES STATISTICS (Détail)

### Répartition par type d'entité source

| Type d'entité | Nombre | Période | Fichiers |
|---------------|--------|---------|----------|
| Performance thermique | 11 | 24h + 30j | p1_2, #sensors |
| PM2.5 (qualité air) | 6 | 24h | sensors_pm25 |
| tCOV (qualité air) | 6 | 24h | sensors_pm25 |
| Sensors agrégés | 3 | 24h | p1_3 |
| Mini-PC | 2 | 24h | sensors_mini_pc |
| Ecojoko | 1 | 24h | #sensors |

### Détail des performances thermiques

Les sensors `performance_thermique_*` sont probablement des **template sensors** calculant :

```
Performance = Énergie consommée / (Delta T° × Temps × Surface)
```

**Objectif** : Mesurer l'efficacité énergétique du chauffage/clim par pièce.

#### Moyennes calculées :

| Pièce | Moyenne 24h | Moyenne 30j |
|-------|-------------|-------------|
| Salon | ✅ | ✅ |
| Cuisine | ✅ | ✅ |
| Bureau | ✅ | ✅ |
| SDB | ✅ | ✅ |
| Chambre | ✅ | ✅ |
| Global | ✅ | ❌ |

**Duplication** : Les moyennes 30j sont dans `#sensors.yaml` (désactivé)

---

## 🚨 PROBLÈMES DÉTECTÉS

### 1. ⚠️ Fichier `#sensors.yaml` désactivé

**Problème** : Le préfixe `#` désactive le fichier dans Home Assistant

**Impact** :
- 24 sensors `integration` non chargés
- 19 sensors `statistics` non chargés (moyennes 30j perdues)
- 6 sensors `history_stats` non chargés
- 2 sensors `rest` non chargés

**Statut** : Redondance avec le répertoire `sensors/`

**Action recommandée** : Supprimer ou archiver

---

### 2. 🔄 Doublons

#### `sensors_erodi_ha.yaml`
```yaml
# Lignes 5-13 (premier sensor)
- platform: rest
  name: "Ping HTTPS VSCode"
  unique_id: ping_https_vscode
  ...

# Lignes 18-26 (doublon identique)
- platform: rest
  name: "Ping HTTPS VSCode"
  unique_id: ping_https_vscode
  ...
```

**Problème** : Même `unique_id` → Erreur HA

**Action** : Supprimer un des deux

---

### 3. 📛 Nommage incohérent

**Fichiers avec espaces dans le nom** :
- `p1_1_sensors - dut.yaml`
- `p1_2_sensors - Perf.yaml`
- `p2_sensors_ prises.yaml` (espace avant "prises")

**Problème** : Mauvaise pratique, risque d'erreurs

**Recommandation** : Renommer en :
- `p1_1_sensors_dut.yaml`
- `p1_2_sensors_perf.yaml`
- `p2_sensors_prises.yaml`

---

### 4. 🗂️ Organisation dispersée

**Problème actuel** :
- Même type de sensors dans plusieurs fichiers
- Moyennes 24h dans `p1_2` et moyennes 30j dans `#sensors.yaml`
- Pas de logique claire pour `#sensors.yaml`

**Impact** : Difficulté de maintenance

---

### 5. 📊 Confusion sur le nombre de statistics

**Décompte initial** : 40 sensors `statistics`
**Réalité** : ~29 sensors actifs (fichiers `sensors/`)

**Différence** : Doublons entre `#sensors.yaml` et `sensors/`

---

## 💡 RECOMMANDATIONS

### 1. Nettoyage immédiat

#### Priorité 1 : Supprimer les doublons

```bash
# Supprimer le doublon dans sensors_erodi_ha.yaml
# Garder seulement les lignes 5-13, supprimer 15-26
```

#### Priorité 2 : Décider du sort de `#sensors.yaml`

**Option A** : Supprimer complètement
- ✅ Tout est déjà dans `sensors/`
- ✅ Simplifie la maintenance

**Option B** : Réactiver partiellement
- ✅ Récupérer les moyennes 30j (performances)
- ⚠️ Nécessite de déduplicater

**Recommandation** : Option A (suppression)

---

### 2. Renommage des fichiers

```bash
# Avant
p1_1_sensors - dut.yaml
p1_2_sensors - Perf.yaml
p2_sensors_ prises.yaml

# Après
p1_1_sensors_dut.yaml
p1_2_sensors_perf.yaml
p2_sensors_prises.yaml
```

---

### 3. Réorganisation suggérée

#### Structure actuelle (OK) :
```
sensors/
├── p1_0_sensors_clim_rad.yaml      # Integration
├── p1_1_sensors_dut.yaml           # History stats
├── p1_2_sensors_perf.yaml          # Statistics
├── p1_3_sensors_moy_24h.yaml       # Statistics globales
├── p2_sensors_prises.yaml          # Integration
├── p3_sensors_lumieres.yaml        # Integration
├── sensors_blitzortung.yaml        # REST
├── sensors_erodi_ha.yaml           # REST
├── sensors_mini_pc.yaml            # Mixed
└── sensors_pm25_et_tcov.yaml       # Statistics
```

**Points positifs** :
- ✅ Séparation par pôle
- ✅ Séparation par fonction (DUT, Perf, etc.)

**Améliorations possibles** :
- Créer `p1_4_sensors_perf_30j.yaml` pour moyennes mensuelles
- Fusionner `sensors_erodi_ha.yaml` dans un `sensors_monitoring.yaml`

---

### 4. Documentation

#### Créer `sensors/README.md` :

```markdown
# Structure des Sensors

## Pôle 1 : Chauffage & Climatisation
- p1_0_sensors_clim_rad.yaml : Consommation kWh
- p1_1_sensors_dut.yaml : Durée d'utilisation
- p1_2_sensors_perf.yaml : Performance 24h
- p1_3_sensors_moy_24h.yaml : Moyennes globales

## Pôle 2 : Prises
- p2_sensors_prises.yaml : Consommation kWh

## Pôle 3 : Éclairage
- p3_sensors_lumieres.yaml : Consommation Wh

## Autres
- sensors_pm25_et_tcov.yaml : Qualité de l'air
- sensors_blitzortung.yaml : Foudre
- sensors_monitoring.yaml : Services
- sensors_mini_pc.yaml : Mini-PC
```

---

### 5. Vérification de cohérence

#### À vérifier :

1. **Les sensors `performance_thermique_*` existent-ils ?**
   - Source probable : `templates/` ou configuration.yaml
   - À documenter

2. **Les sensors `*_power_status` existent-ils ?**
   - Utilisés par `history_stats` pour DUT
   - À vérifier dans les templates

3. **Configuration.yaml inclut-il les fichiers sensors/ ?**
   ```yaml
   sensor: !include_dir_merge_list sensors/
   ```

---

## 📝 CHECKLIST DE NETTOYAGE

- [ ] Supprimer le doublon dans `sensors_erodi_ha.yaml`
- [ ] Décider : supprimer ou réactiver `#sensors.yaml`
- [ ] Renommer les fichiers avec espaces
- [ ] Vérifier l'existence des sensors sources
- [ ] Créer `sensors/README.md`
- [ ] Tester le rechargement dans HA
- [ ] Documenter les templates de performance

---

## 🎯 CONCLUSION

Votre configuration sensors est **globalement bien organisée** avec :
- ✅ Séparation claire par pôle
- ✅ Fichiers spécialisés par fonction
- ✅ Nomenclature cohérente (sauf quelques exceptions)

**Points à améliorer** :
- Supprimer les doublons
- Nettoyer `#sensors.yaml`
- Corriger les noms de fichiers
- Ajouter de la documentation

**Prochaine étape** : Créer `utility_meter.yaml` (déjà fait ✅) et `sensor.yaml.v2` (déjà fait ✅)

---

## 📚 ANNEXES

### Commandes utiles

```bash
# Compter les sensors par type
grep "platform:" sensors/*.yaml | cut -d: -f3 | sort | uniq -c

# Vérifier les doublons d'unique_id
grep "unique_id:" sensors/*.yaml | sort | uniq -d

# Lister tous les sensors
grep "name:" sensors/*.yaml | cut -d'"' -f2

# Vérifier la syntaxe YAML
yamllint sensors/*.yaml
```

---

**Document généré le** : 2026-02-10
**Prochaine révision** : Après nettoyage des doublons
