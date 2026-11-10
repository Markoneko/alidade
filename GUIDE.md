# Alidade — guide de mise en ligne et d'entretien

Site : **https://markoneko.github.io/alidade/** (une fois publié)

## Ce que contient le dossier

```
alidade/
├── index.html                 la page d'entrée (carte jour / nuit, registre)
├── assets/
│   └── resources.js           LE fichier à modifier : la liste des escales
├── ressources/
│   ├── courant-de-bord/index.html     la vraie activité CNIF
│   └── …/index.html                   pages « escale en chantier » à remplacer
├── .nojekyll                  fichier vide, indispensable (voir plus bas)
├── GUIDE.md                   ce guide
└── README.md
```

## 1. Première mise en ligne (une fois, 10 minutes)

1. Connectez-vous sur **github.com** avec le compte `markoneko`.
2. En haut à droite : **+** → **New repository**.
   - Repository name : `alidade`
   - Visibilité : **Public** (obligatoire pour GitHub Pages sur un compte gratuit)
   - Ne cochez rien d'autre → **Create repository**.
3. Sur la page du dépôt vide, cliquez sur le lien **uploading an existing file**.
4. Décompressez le zip sur votre ordinateur, ouvrez le dossier `alidade`, sélectionnez **tout son contenu** (pas le dossier lui-même) et glissez-le dans la page.
   - Le fichier `.nojekyll` est caché sur Mac : dans le Finder, `Cmd + Maj + .` affiche les fichiers cachés.
5. En bas : **Commit changes**.
6. **Settings** → **Pages** (menu de gauche) → *Build and deployment* :
   - Source : **Deploy from a branch**
   - Branch : **main**, dossier **/ (root)** → **Save**.
7. Attendez une à deux minutes, puis ouvrez https://markoneko.github.io/alidade/

> Astuce : l'application **GitHub Desktop** évite les glisser-déposer. Vous travaillez dans un dossier normal, puis « Commit » et « Push » publient.

## 2. Déposer une ressource dans son escale

Chaque ressource vit dans `ressources/<identifiant>/index.html`.

1. Ouvrez le dossier de l'escale sur GitHub, par exemple `ressources/canopee/`.
2. **Add file** → **Upload files**, déposez votre page en la nommant **`index.html`** (elle remplace la page « en chantier »).
3. **Commit changes**. C'est en ligne une minute plus tard.

**Attention aux pages produites dans Claude.** Une page publiée comme artefact sur claude.ai n'a pas l'en-tête HTML complet (`<!doctype html>`, `<head>`…). Demandez simplement à Claude « la version autonome pour Alidade » : il vous rend le fichier prêt à déposer, comme pour Courant de bord.

## 3. Ajouter une nouvelle escale sur la carte

Ouvrez `assets/resources.js` sur GitHub (icône crayon pour modifier), copiez un bloc existant et changez :

| Champ | Rôle |
|---|---|
| `id` | identifiant sans espace ni accent, = nom du dossier |
| `arch` | `academique`, `associatif` ou `ludo` |
| `status` | `chantier` (badge « En chantier ») ou `publie` (badge « En ligne ») |
| `langs` | `["fr"]`, `["en"]` ou `["fr","en"]` |
| `href` | `ressources/<id>/index.html` |
| `title`, `short`, `desc`, `audience`, `duration` | textes en `fr` et `en` ; `short` est le nom court écrit sur la carte |

Puis créez le dossier `ressources/<id>/` avec son `index.html`. L'île grandit et l'étoile se place toute seule. La carte est dessinée à partir de nombres fixes : elle est identique à chaque visite, et ne change que si vous ajoutez ou retirez des escales.

**Nouvel archipel** : ajoutez un bloc dans `archipelagos` avec un `id`, un `center` (position sur la carte, entre 0 et 1200 en x, 0 et 800 en y, loin du centre 600 × 410) et une couleur `hue`. Les couleurs disponibles sont `acad`, `asso` et `ludo` ; pour une quatrième, demandez à Claude d'ajouter la teinte dans `index.html`.

## 4. Bon à savoir

- **Public** : tout le contenu du dépôt est visible. Pas de données d'étudiants, pas d'images dont vous n'avez pas les droits, pas de logo d'institution sans accord.
- **Licence** : le pied de page annonce Creative Commons BY-NC 4.0. Changez la phrase dans `index.html` (cherchez `licence`) si vous en voulez une autre.
- **`.nojekyll`** : empêche GitHub de transformer le site avec Jekyll. Ne le supprimez pas.
- **Jour / nuit et langue** : le site suit le réglage clair/sombre et la langue de l'appareil, et retient le choix du visiteur.
- **Adresse personnalisée** (facultatif, ~10 €/an) : achetez un nom de domaine, puis *Settings → Pages → Custom domain*.
- **Limites GitHub Pages** : site de 1 Go maximum, environ 100 Go de trafic par mois. Largement suffisant.
