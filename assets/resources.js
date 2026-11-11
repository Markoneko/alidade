/* ============================================================
   ALIDADE — registre des escales
   Pour ajouter une ressource : copiez un bloc de "resources",
   changez ses champs, et posez son fichier dans ressources/.
   href   : n'importe quel chemin ou adresse, par exemple
            "ressources/canopee/canopee.html" ou "https://…"
   status : "chantier" (en chantier) ou "publie" (en ligne)
   langs  : ["fr"], ["en"] ou ["fr","en"]
   ile    : (facultatif) le nom d'une île pour y poser l'étoile,
            par exemple ile: "Stromboli"
   cote   : (facultatif) "gauche" ou "droite" pour placer le nom
            de la ressource de ce côté de son étoile
   Par défaut, une île = une escale : la première ressource d'un
   archipel va sur la plus grande île, les suivantes sur les îles
   les plus éloignées des précédentes. Quand toutes les îles sont
   prises, les grandes îles accueillent plusieurs étoiles.
   ============================================================ */
window.ALIDADE = {
  archipelagos: [
    { id: "academique", hue: "acad", geo: "saintes", center: [226, 200], size: 312,
      name: { fr: "Archipel académique", en: "Academic archipelago" },
      sub:  { fr: "Master FIRS · Géodata Paris", en: "FIRS master's · Géodata Paris" } },
    { id: "associatif", hue: "asso", geo: "eoliennes", center: [962, 196], size: 400,
      name: { fr: "Archipel associatif", en: "Club archipelago" },
      sub:  { fr: "CNIF · formation croisière", en: "CNIF · cruising school" } },
    { id: "ludo", hue: "ludo", geo: "aleoutiennes", center: [604, 640], size: 1010, label: [250, 554],
      name: { fr: "Archipel ludo-éducatif", en: "Playful learning archipelago" },
      sub:  { fr: "AWA · jeux et récits", en: "AWA · games and stories" } }
  ],

  resources: [
    { id: "supports-firs", arch: "academique", status: "chantier", langs: ["fr"],
      href: "ressources/supports-firs/index.html",
      title: { fr: "Supports de cours FIRS", en: "FIRS course materials" },
      short: { fr: "Supports FIRS", en: "FIRS materials" },
      desc:  { fr: "Gabarit commun des supports du master FIRS : source Markdown, sorties HTML et PDF, repères socle, appui et veille.",
               en: "Shared template for the FIRS master's course materials: Markdown source, HTML and PDF outputs, core, support and watch markers." },
      audience: { fr: "Master FIRS", en: "FIRS master's students" },
      duration: { fr: "Semestre", en: "Semester" } },

    { id: "feu-de-saumos", arch: "academique", status: "chantier", langs: ["fr", "en"],
      href: "ressources/feu-de-saumos/index.html",
      title: { fr: "Le feu de Saumos", en: "The Saumos fire" },
      short: { fr: "Feu de Saumos", en: "Saumos fire" },
      desc:  { fr: "Séance courte de découverte de la télédétection : lire un incendie de forêt depuis l'espace.",
               en: "A short hands-on introduction to remote sensing: reading a forest fire from space." },
      audience: { fr: "Élèves et étudiants en visite", en: "Visiting students" },
      duration: { fr: "45 min", en: "45 min" } },

    { id: "enquete-sig", arch: "academique", status: "chantier", langs: ["fr"],
      href: "ressources/enquete-sig/index.html",
      title: { fr: "Enquête SIG : les flux forestiers", en: "GIS investigation: forest data flows" },
      short: { fr: "Enquête SIG", en: "GIS investigation" },
      desc:  { fr: "Un TP mené comme une enquête : suivre les données forestières à travers les géotraitements jusqu'à la carte finale.",
               en: "A lab run as an investigation: follow forest data through geoprocessing to a final map." },
      audience: { fr: "Master FIRS", en: "FIRS master's students" },
      duration: { fr: "2 h", en: "2 h" } },

    { id: "canopee", arch: "academique", status: "chantier", langs: ["fr"],
      href: "ressources/canopee/index.html",
      title: { fr: "La Canopée des compétences", en: "The Skills Canopy" },
      short: { fr: "Canopée", en: "Skills Canopy" },
      desc:  { fr: "Une cartographie ludique des compétences du master FIRS : voir où l'on en est, et où l'on va.",
               en: "A playful map of the FIRS master's skills: see where you stand, and where you are heading." },
      audience: { fr: "Étudiants et équipe FIRS", en: "FIRS students and staff" },
      duration: { fr: "Toute la formation", en: "Whole programme" } },

    { id: "boussole-ia", arch: "academique", status: "publie", langs: ["fr"],
      href: "https://dfi.ensg.eu/BoussoleIA/",
      title: { fr: "Boussole IA", en: "AI Compass" },
      short: { fr: "Boussole IA", en: "AI Compass" },
      desc:  { fr: "Déclarer en toute transparence la part de l'IA dans un document produit.",
               en: "Declare transparently how AI contributed to a piece of work." },
      audience: { fr: "Étudiants et enseignants", en: "Students and teachers" },
      duration: { fr: "10 min", en: "10 min" } },


    { id: "lune-et-marees", arch: "associatif", status: "publie", langs: ["fr"],
      href: "ressources/lune-et-marees/Lune_sur_Cherbourg.html",
      title: { fr: "Lune, soleil et marées", en: "Moon, sun and tides" },
      short: { fr: "Lune et marées", en: "Moon and tides" },
      desc:  { fr: "Identifier les phases de la lune et leur relation avec les marées maritimes terrestres.",
               en: "Identify the phases of the moon and their relationship to the tides on Earth." },
      audience: { fr: "Stagiaires voile", en: "Cruising trainees" },
      duration: { fr: "10 à 15 min", en: "10 to 15 min" } },


    { id: "courant-de-bord", arch: "associatif", status: "chantier", langs: ["fr"],
      href: "ressources/courant-de-bord/index.html",
      title: { fr: "Courant de bord", en: "Courant de bord: power on board" },
      short: { fr: "Courant de bord", en: "Courant de bord" },
      desc:  { fr: "Câbler pas à pas l'installation électrique d'un voilier de croisière, puis la mettre à l'épreuve.",
               en: "Wire a cruising yacht's electrical system step by step, then put it to the test." },
      audience: { fr: "Stagiaires voile", en: "Cruising trainees" },
      duration: { fr: "30 à 45 min", en: "30 to 45 min" } },

    { id: "mousse-en-herbe", arch: "ludo", status: "publie", langs: ["fr"],
      href: "https://markoneko.github.io/mousse-en-herbe/",
      title: { fr: "Mousse en herbe", en: "Mousse en herbe: budding deckhand" },
      short: { fr: "Mousse en herbe", en: "Budding deckhand" },
      desc:  { fr: "Les fondamentaux de la voile, surtout le vocabulaire, pour les nouveaux membres d'AWA, base par base.",
               en: "Sailing fundamentals for new AWA members, one skill at a time." },
      audience: { fr: "Nouveaux équipiers", en: "New crew" },
      duration: { fr: "À son rythme", en: "Self-paced" } },

    { id: "carnet-de-nuages", arch: "ludo", status: "chantier", langs: ["fr"],
      href: "ressources/carnet-de-nuages/index.html",
      title: { fr: "Carnet de nuages", en: "Cloud notebook" },
      short: { fr: "Carnet de nuages", en: "Cloud notebook" },
      desc:  { fr: "Apprendre à reconnaître les nuages à partir de vraies photos de ciel prises en mer.",
               en: "Learn to identify clouds from real sky photos taken at sea." },
      audience: { fr: "Tous publics", en: "Everyone" },
      duration: { fr: "15 min", en: "15 min" } },

    { id: "ondes-et-radar", arch: "ludo", status: "chantier", langs: ["fr"],
      href: "ressources/ondes-et-radar/index.html",
      title: { fr: "Ondes et radar", en: "Waves and radar" },
      short: { fr: "Ondes et radar", en: "Waves and radar" },
      desc:  { fr: "Un récit interactif pour comprendre en jouant les ondes électromagnétiques et le radar.",
               en: "An interactive story to understand electromagnetic waves and radar by playing." },
      audience: { fr: "Étudiants, curieux", en: "Students, curious minds" },
      duration: { fr: "30 min", en: "30 min" } },

    { id: "vous-etes-le-heros", arch: "ludo", status: "chantier", langs: ["fr"],
      href: "ressources/vous-etes-le-heros/index.html",
      title: { fr: "Cours dont vous êtes le héros", en: "Choose-your-own-adventure courses" },
      short: { fr: "Vous êtes le héros", en: "Your own adventure" },
      desc:  { fr: "Des cours à embranchements, où chaque choix mène à une autre escale. Premiers récits en préparation.",
               en: "Branching courses where every choice leads to another port. First stories in preparation." },
      audience: { fr: "À venir", en: "Coming soon" },
      duration: { fr: "À venir", en: "Coming soon" } }
  ]
};
