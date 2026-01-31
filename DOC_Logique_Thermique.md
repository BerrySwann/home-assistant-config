## Résumé Visuel de la Logique Thermique

```mermaid
graph TD
    %% Entrées
    TEXT[Sonde T° Extérieure] --> MODE
    TEXT --> CIBLE
    
    %% Mode
    MODE{Mode Été/Hiver} -- Hiver --> BASE_18[Consigne Base: 18°C]
    MODE -- Été --> BASE_28[Consigne Base: 28°C]

    %% Calcul Cible
    BASE_18 --> CIBLE{Calcul Cible}
    BASE_28 --> CIBLE
    
    %% Logique Cible
    CIBLE -- "T° < 8°C" --> BOOST1[Base + Delta 1]
    CIBLE -- "T° > 32°C" --> COOL1[Ext - Delta 5]
    CIBLE -- "Normal" --> NORMAL[Base]

    %% Calculs Finaux
    BOOST1 & COOL1 & NORMAL --> CONFORT_JOUR[Confort JOUR]
    
    %% Les Déclinaisons
    CONFORT_JOUR --> ERIC[T° Éric<br/>(Moins chaud - Delta 2)]
    CONFORT_JOUR --> MAMOUR[T° Mamour<br/>(Plus chaud + Delta 1)]
    
    %% La Nuit
    CONFORT_JOUR --> NUIT{Calcul NUIT}
    TEXT -.-> NUIT
    NUIT -- "T° < 8°C" --> NUIT_FROID[Confort - Delta 1]
    NUIT -- "T° > 8°C" --> NUIT_DOUX[Confort - Delta 2]

    style TEXT fill:#e1f5fe,stroke:#01579b
    style MODE fill:#fff9c4,stroke:#fbc02d
    style ERIC fill:#ffccbc,stroke:#bf360c
    style MAMOUR fill:#f8bbd0,stroke:#880e4f