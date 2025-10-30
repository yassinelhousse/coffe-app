
☕ Coffee App

Coffee App est une application mobile développée avec React Native (Expo).
Elle permet aux utilisateurs de parcourir une sélection de cafés, de découvrir leurs descriptions et d’afficher les détails de chaque produit.

⸻

🚀 Fonctionnalités principales

🏠 1. Page d’accueil (index.tsx)
	•	Affiche une introduction ou un écran de bienvenue (splash / home).
	•	Présente une courte description de l’application.
	•	Bouton pour accéder au menu principal.

📋 2. Page Menu (menu.tsx)
	•	Affiche la liste des produits de café disponibles.
	•	Chaque carte de produit contient :
	•	Une image du café ☕
	•	Son nom
	•	Une courte description
	•	Son prix 💰

🔍 3. Page Détails (details.tsx)
	•	Montre les informations détaillées d’un produit sélectionné :
	•	Image en grand format
	•	Description complète
	•	Prix
	•	Bouton “Commander” ou “Ajouter au panier” (optionnel)

⸻

🛠️ Technologies utilisées
	•	React Native (avec Expo)
	•	TypeScript
	•	React Navigation (pour la navigation entre les pages)
	•	StyleSheet de React Native pour le design

📂 Structure du projet
coffee-app/
│
├── app/
│   ├── index.tsx          # Page d’accueil
│   ├── menu.tsx           # Liste des produits
│   ├── details.tsx        # Détails du produit
│
├── components/            # Composants réutilisables (ex: CoffeeCard)
├── assets/                # Images et ressources
├── package.json
├── README.md
└── app.json

📱 Lancement du projet

1. Installer les dépendances
    -npm install
2. Lancer l’application
  -npx expo start




