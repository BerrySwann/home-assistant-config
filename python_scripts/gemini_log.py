# Fichier: python_scripts/gemini_log.py

# Récupère la charge JSON passée par le script Home Assistant
data = data.get('json_payload', '{}')
entity_id = 'sensor.gemini_export_data'

# Crée un attribut 'data_payload' et y stocke la longue chaîne JSON
attributes = {'data_payload': data}

# Définit l'état du capteur sur "READY" et ajoute l'attribut
hass.states.set(entity_id, 'READY', attributes)