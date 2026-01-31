# ┌────────────────────────────────────────────────────────┐
# │           LOGIQUE THERMIQUE - VUE D'ENSEMBLE           │
# └────────────────────────────────────────────────────────┘
#
#    SONDE EXTÉRIEURE (Nord)
#           │
#           ▼
#    MODE ÉTÉ / HIVER ─────────────┐
#           │                      │
#        Si Hiver                Si Été
#      (Base = 18°C)          (Base = 28°C)
#           │                      │
#           ▼                      ▼
#    CALCUL TEMPÉRATURE CIBLE (Intermédiaire)
#           │
#           ├─ Si T° < 8°C  :  Base + Delta 1 (Boost Grand Froid)
#           ├─ Si T° > 32°C :  Ext - Delta 5  (Protection Canicule)
#           └─ Sinon        :  Base           (Normal)
#           │
#           ▼
#    CONFORT JOUR (La référence) ──┬──▶ [ CHAMBRE ] (Suit la ref)
#           │                      │
#           │                      ├──▶ [ MAMOUR ]  (Ref + Delta 1)
#           │                      │
#           │                      └──▶ [ ÉRIC ]    (Ref - Delta 2)
#           │
#           ▼
#    CONFORT NUIT (Calculé sur Ref Jour)
#           │
#           ├─ Si T° < 8°C  :  Ref - Delta 1 (On baisse peu car il gèle)
#           └─ Si T° > 8°C  :  Ref - Delta 2 (On baisse normalement)