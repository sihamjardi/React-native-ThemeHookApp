# Hooks React Native – Thème clair/sombre avec useColorScheme

## Aperçu
Ce lab met en place un écran d’accueil React Native qui s’adapte automatiquement au thème système (clair/sombre) grâce au hook useColorScheme. L’interface applique des couleurs cohérentes (fond, texte, accent) et se met à jour immédiatement lorsque le thème de l’appareil change. Aucun accès Internet n’est requis.

---

## Objectifs d’apprentissage
Importer et instancier useColorScheme.
Comprendre les valeurs possibles : light, dark, null.
Construire un mini-système de thème (palette) sans dépendances externes.
Appliquer des styles conditionnels de manière lisible.
Tester et valider le comportement sur émulateurs Android/iOS.

---

## Prérequis
Node.js et npm (ou yarn).
Un environnement React Native opérationnel (Expo recommandé).
Un émulateur Android ou un simulateur iOS.
Connaissances de base : composants ScrollView, View, Text, Image, StyleSheet.

---

## Notions clés
Hook : fonction permettant d’accéder aux fonctionnalités React dans un composant fonctionnel.
useColorScheme : lecture et abonnement au thème système.
Styles conditionnels : tableau de styles [styleFixe, styleVariable].
Contraste : assurer la lisibilité (texte clair sur fond sombre, et inversement).

---

## Architecture / Concepts
Cible
Un écran WelcomeScreen :
Détecte le thème système.
Adapte le fond, les couleurs de texte, et une couleur d’accent.
Utilise un asset local (logo) pour fonctionner hors-ligne.
Palette de couleurs imposée
Accent : #EE9972
Clair : fond #EDEFEE, texte #333333
Sombre : fond #333333, texte #EDEFEE
Noir et blanc si nécessaire (mais conserver la cohérence avec la palette).

---

## Structure du projet

<img width="471" height="840" alt="image" src="https://github.com/user-attachments/assets/4ddf3de1-5e30-4efe-9c9b-59b333fa4ab0" />

---

## Resultat

<img width="1860" height="842" alt="image" src="https://github.com/user-attachments/assets/ca1136f0-f86f-4031-97d3-d7aaa21eb1db" />

---

## Auteur

**Nom :** JARDI Siham

**Cours :**  React Native

**Date :** Janvier 2026

**Encadré par :** Pr.Mohamed LACHGAR

