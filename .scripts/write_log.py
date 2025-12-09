import sys
import json
from datetime import datetime

# Le message (JSON) est passé en argument lors de l'appel Shell
json_string = sys.argv[1]

# Fichier de destination
filename = "/config/analyse.log"

# On tente d'ajouter la ligne
try:
    with open(filename, 'a') as f:
        # Assure un saut de ligne après chaque entrée
        f.write(json_string + "\n")
    print("Success")
except Exception as e:
    # Affiche l'erreur en cas de problème de permission
    print(f"Error: {e}")