# Fichier: python_scripts/gemini_log.py
# Ce script met à jour l'entité sensor.gemini_export_data en utilisant son attribut 'data'
# pour stocker la longue chaîne JSON.

data = data.get('json_payload', '{}')
entity_id = 'sensor.gemini_export_data'
attributes = {'data_payload': data}

hass.states.set(entity_id, 'READY', attributes)