#!/bin/sh

# Fonction pour convertir les millidegrés en °C
to_celsius() {
  echo "scale=1; $1 / 1000" | bc
}

# Boucle infinie pour actualiser les températures
while true; do
  clear  # Efface l'écran à chaque itération
  echo "====================================="
  echo " TEMPÉRATURES DU MINI-PC $(date +'%Y-%m-%d %H:%M:%S')"
  echo "====================================="

  # Carte mère
  echo -e "\n📥 Carte mère (acpitz):"
  if [ -f "/sys/class/thermal/thermal_zone0/temp" ]; then
    echo "  • $(to_celsius $(cat /sys/class/thermal/thermal_zone0/temp)) °C"
  else
    echo "  • Non détecté"
  fi

  # CPU (Package)
  echo -e "\n🖥️ CPU (x86_pkg_temp):"
  if [ -f "/sys/class/thermal/thermal_zone1/temp" ]; then
    echo "  • Package: $(to_celsius $(cat /sys/class/thermal/thermal_zone1/temp)) °C"
  fi

  # Cœurs CPU
  echo -e "\n🔧 Cœurs CPU:"
  if [ -d "/sys/devices/platform/coretemp.0/hwmon/hwmon1" ]; then
    echo "  • Core 0: $(to_celsius $(cat /sys/devices/platform/coretemp.0/hwmon/hwmon1/temp2_input 2>/dev/null || echo "N/A")) °C"
    echo "  • Core 1: $(to_celsius $(cat /sys/devices/platform/coretemp.0/hwmon/hwmon1/temp3_input 2>/dev/null || echo "N/A")) °C"
    echo "  • Core 2: $(to_celsius $(cat /sys/devices/platform/coretemp.0/hwmon/hwmon1/temp4_input 2>/dev/null || echo "N/A")) °C"
    echo "  • Core 3: $(to_celsius $(cat /sys/devices/platform/coretemp.0/hwmon/hwmon1/temp5_input 2>/dev/null || echo "N/A")) °C"
  else
    echo "  • Cœurs CPU: Non détectés"
  fi

  # Pause de 2 secondes avant la prochaine actualisation
  sleep 2
done
