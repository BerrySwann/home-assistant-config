import requests

url = "http://192.168.1.96:8123/api/services/remote/learn_command"
headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI2NzE2NjU4YjhhM2U0MGJhYjg5YzNmYWRhZmNjZTdlNSIsImlhdCI6MTc2MzA1Mjc2MywiZXhwIjoyMDc4NDEyNzYzfQ.2xRVc4nU84hcTEqgxVad3MsuZG5TlcvBln8eEE2uVp8",
    "Content-Type": "application/json"
}
{
    "entity_id": "remote.clim_bureau",
    "command": "cmd1"
}

response = requests.post(url, headers=headers, json=data)

if response.status_code == 200:
    print("Lancement apprentissage OK, appuyez sur la télécommande")
else:
    print("Erreur :", response.text)
