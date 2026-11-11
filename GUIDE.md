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

Chaque ressource vit dans son dossier, par exemple `ressources/canopee/`. **Le nom du fichier est libre.**

1. Ouvrez le dossier de l'escale sur GitHub, par exemple `ressources/canopee/`.
2. **Add file** → **Upload files**, déposez votre page avec le nom de votre choix, par exemple `canopee-v2.html`.
3. **Commit changes**.
4. Ouvrez `assets/resources.js` (crayon pour modifier) et changez la ligne `href` de la ressource :
   `href: "ressources/canopee/canopee-v2.html",`
   Le lien peut aussi pointer vers une autre adresse : `href: "https://…"`.
5. **Commit changes**. C'est en ligne une minute plus tard.

Si vous nommez votre fichier `index.html`, il remplace la page « en chantier » et l'étape 4 est inutile.

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

Puis déposez le fichier de la ressource. L'étoile se place toute seule.

**Comment les étoiles sont attribuées.** Chaque archipel est un vrai archipel, et par défaut une île porte une escale :

| Archipel | Îles | Couleur |
|---|---|---|
| Académique | Les Saintes (Guadeloupe) : Terre-de-Bas, Terre-de-Haut, Grand Îlet, Îlet à Cabrit, La Coche | bleu Géodata #2E3387 |
| Associatif | Îles Éoliennes : Lipari, Salina, Vulcano, Stromboli, Filicudi, Alicudi, Panarea | crème CNIF #EEECE1, côtes en bleu CNIF #1F497D |
| Ludo-éducatif | Îles Aléoutiennes : Unimak, Unalaska, Umnak, Atka, Attu, Adak… (30 îles) | orange, complémentaire des deux autres |

- La première ressource d'un archipel va sur la plus grande île ; chaque suivante va sur l'île la plus éloignée de celles déjà prises. Les ressources se répartissent ainsi sur tout l'archipel.
- Pour choisir l'île vous-même, ajoutez `ile: "Stromboli"` dans le bloc de la ressource (nom exact, accents compris).
- Quand toutes les îles sont prises (les Saintes en ont cinq), les suivantes se posent sur les plus grandes îles, plusieurs étoiles par île.
- Si le nom d'une ressource déborde ou chevauche, ajoutez `cote: "gauche"` ou `cote: "droite"`.
- La nuit, les étoiles d'un archipel sont reliées par le chemin le plus court qui les rassemble : c'est sa constellation. Les îles sans ressource y figurent en petites étoiles.

**Position et taille d'un archipel** : dans `archipelagos`, `center` est le centre de l'archipel sur la carte (x de 0 à 1200, y de 0 à 800) et `size` sa plus grande dimension en pixels ; `label` (facultatif) place son nom ailleurs que sous l'archipel.

**Autre archipel réel** : les contours sont dans `assets/geo.js`, produit par `tools/archis.py` (sources : IGN pour les Saintes, ISTAT pour les Éoliennes, Natural Earth pour les Aléoutiennes). Demandez à Claude de le régénérer avec le nouvel archipel.

## 4. Bon à savoir

- **Public** : tout le contenu du dépôt est visible. Pas de données d'étudiants, pas d'images dont vous n'avez pas les droits, pas de logo d'institution sans accord.
- **Licence** : le pied de page annonce Creative Commons BY-NC 4.0. Changez la phrase dans `index.html` (cherchez `licence`) si vous en voulez une autre.
- **`.nojekyll`** : empêche GitHub de transformer le site avec Jekyll. Ne le supprimez pas.
- **Jour / nuit et langue** : le site suit le réglage clair/sombre et la langue de l'appareil, et retient le choix du visiteur.
- **Adresse personnalisée** (facultatif, ~10 €/an) : achetez un nom de domaine, puis *Settings → Pages → Custom domain*.
- **Limites GitHub Pages** : site de 1 Go maximum, environ 100 Go de trafic par mois. Largement suffisant.
