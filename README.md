# PORTFOLIO LOUIS JOLLES

## Hi legends 👋

## A propos

Ceci est un portfolio, créé avec Next.js pour la partie front-end, CSS pour la mise en page, et une base de données locale pour stocker les musiques et photos présentés dans le projet.

## 📔 Table des matières

- 🪧 À propos
- 🔧 Fonctionnalités
- 🏗️ Technologies Utilisées
- 📦 Prérequis
- 🚀 Installation
- 🛠️ Utilisation
- 🗄 Structure de la base de données
- 🤝 Contribution
- 📝 Licence

## 🔧 Fonctionnalités

- Présentation de projets
- Affichage du profil et des informations personnelles
- Galerie de photos des réalisations
- Listes des créations musicales
- Lien des réseaux pour contacter l'auteur

## 🏗️ Technologies Utilisées

- Next.js
- CSS
- Base de données locale Json

## 📦 Prérequis

- Node.js installé sur votre machine
- npm (ou yarn) installé sur votre machine
- Base de données locale configurée avec les données appropriées

## 🚀 Installation

1. Clonez ce dépôt sur votre machine locale.
2. Naviguez vers le répertoire du projet via la ligne de commande.
3. Exécutez `npm install` pour installer les dépendances.
4. Exécutez `npm run dev` pour lancer l'application en mode développement.
5. Ouvrez votre navigateur et accédez à [http://localhost:3000](http://localhost:3000).

## 🛠️ Utilisation

1. **Afficher le profil** : Accédez à la section "About" pour voir les informations du profil.
2. **Consulter les projets** : Cliquez sur la section "Portfolio" pour choisir quelle catégories de projets consulter.
3. **Explorer la galerie de photos** : Allez dans la section "Photos" pour visualiser les créations visuelles.
4. **Écouter mes créations musicales** : Dirigez-vous vers la section "Musics" pour écouter les compositions.
5. **Me contacter** : Consultez la section "Contacts" pour avoir accès aux liens des réseaux sociaux.

## 🗄 Structure de la base de données

### Table : `Loops`

Cette table stocke les loops de la catégorie Musics.

| Champ | Type         | Description                       |
| ----- | ------------ | --------------------------------- |
| ID    | INT          | Identifiant unique de la musique. |
| Src   | VARCHAR(255) | URL absolu de la musique.         |

### Table : `Productions`

Cette table stocke les productions de la catégorie Musics.

| Champ | Type         | Description                       |
| ----- | ------------ | --------------------------------- |
| ID    | INT          | Identifiant unique de la musique. |
| Src   | VARCHAR(255) | URL absolu de la musique.         |

### Table : `Speed-compositions`

Cette table stocke les speed-compositions de la catégorie Musics.

| Champ | Type         | Description                       |
| ----- | ------------ | --------------------------------- |
| ID    | INT          | Identifiant unique de la musique. |
| Src   | VARCHAR(255) | URL absolu de la musique.         |

### Table : `Photos`

Cette table stocke les photos de la catégorie Photos.

| Champ  | Type         | Description                     |
| ------ | ------------ | ------------------------------- |
| ID     | INT          | Identifiant unique de la photo. |
| Src    | VARCHAR(255) | URL de la photo                 |
| Width  | INT          | Largeur de la photo en px.      |
| Height | INT          | Hauteur de la photo en px.      |

## 📝 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.
