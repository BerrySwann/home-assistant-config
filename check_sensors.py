import os
import re
import glob

# ---------------- CONFIGURATION ----------------
# Dossier où chercher les fichiers YAML ('.' = dossier courant)
DIRECTORY = "."

# Motif de recherche (Regex)
# Explication : 
# .* : N'importe quels caractères au début
# _2    : La chaîne "_2"
# $     : La FIN de la ligne (c'est ce qui force la terminaison stricte)
PATTERN_REGEX = r".*_2$" 
# -----------------------------------------------

def get_matching_sensors(directory, pattern):
    sensors_found = []
    
    # Récupère tous les fichiers .yaml du dossier
    yaml_files = glob.glob(os.path.join(directory, "*.yaml"))
    
    if not yaml_files:
        print(f"Aucun fichier YAML trouvé dans {os.path.abspath(directory)}")
        return []

    print(f"Analyse de {len(yaml_files)} fichiers pour le motif finissant par '_2'...\n")

    for filepath in yaml_files:
        filename = os.path.basename(filepath)
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                for line in f:
                    # Extraction de l'unique_id
                    match = re.search(r'^\s*-?\s*unique_id:\s*["\']?([^"\']+)["\']?', line)
                    
                    if match:
                        unique_id = match.group(1).strip()
                        # On reconstruit l'entity_id complet pour le test
                        entity_id = f"sensor.{unique_id}"
                        
                        # Vérifie si l'entity_id correspond au motif
                        if re.search(pattern, entity_id):
                            sensors_found.append((entity_id, filename))
                            
        except Exception as e:
            print(f"Erreur lecture {filename}: {e}")

    return sensors_found

if __name__ == "__main__":
    results = get_matching_sensors(DIRECTORY, PATTERN_REGEX)
    
    print(f"--- RÉSULTATS ({len(results)} trouvés) ---")
    if results:
        for sensor, source_file in sorted(results):
            print(f"{sensor}  ->  {source_file}")
    else:
        print("Aucune entité se terminant strictement par '_2' n'a été trouvée dans ces fichiers.")
        print("(Note : Les fichiers Utility Meter contiennent souvent des suffixes comme _annuel, _mensuel, etc.)")