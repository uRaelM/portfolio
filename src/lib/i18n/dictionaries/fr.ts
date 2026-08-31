import type { Dictionary } from './en';

/** Français. Traduit de `en.ts`, qui est la source. */
export const fr: Dictionary = {
  meta: {
    title: 'Rafael Miguel — Développeur FullStack & Mobile',
    description:
      'Développeur FullStack et Mobile avec plus de 3 ans d’expérience dans la création d’applications web, desktop et mobiles évolutives. Tech Lead Kotlin.',
  },

  nav: {
    about: 'à propos',
    experience: 'expérience',
    projects: 'projets',
    contact: 'contact',
    mathtype: 'MathType',
    languageLabel: 'langue',
    skipToContent: 'Aller au contenu',
    menuLabel: 'sections',
  },

  hero: {
    greeting: 'Bonjour, je suis',
    name: 'Rafael Miguel',
    roles: ['Développeur FullStack', 'Développeur Mobile', 'Tech Lead Kotlin'],
    summary:
      'Développeur FullStack et Mobile avec plus de 3 ans d’expérience dans la création d’applications web, desktop et mobiles évolutives et performantes. Actuellement Tech Lead du développement Kotlin, je pilote la livraison mobile, priorise les tâches, coordonne les réunions et oriente les décisions d’implémentation.',
    location: 'Brésil',
    ctaProjects: 'Voir les projets',
    ctaEmail: 'Me contacter',
    statYears: 'ans d’expérience',
    statRoles: 'postes simultanés',
    statLanguages: 'langues parlées',
  },

  about: {
    heading: 'À propos',
    body: 'Solide expérience avec React, Vue, Next.js, NestJS, Node.js, Kotlin, Flutter, PostgreSQL, Prisma, Firebase, AWS, Electron et les intégrations Web3 via WalletConnect, Infura, Thirdweb et Coinbase SDK. Expérience des produits numériques axés sur l’accessibilité, des flux EPUB et Web Publication, de l’authentification sécurisée, des interfaces responsives et de l’optimisation des performances multiplateformes. Je construis également des agents IA spécialisés avec Claude pour accompagner les flux de développement et de revue de code.',
  },

  skills: {
    heading: 'Compétences techniques',
    frontend: 'Front-end',
    backend: 'Back-end',
    mobile: 'Mobile / Desktop',
    data: 'Bases de données & Cloud',
    web3: 'Web3',
    ai: 'IA & agents',
    leadership: 'Leadership',
    frontendNote: 'Interfaces responsives, accessibilité et optimisation des performances.',
    backendNote: 'API REST, authentification et modélisation des données.',
    mobileNote: 'Développement multiplateforme pour Android et desktop.',
    dataNote: 'Modélisation de bases de données et scalabilité.',
    web3Note: 'Transactions NFT et jetons, prise en charge multi-portefeuilles.',
    aiNote: 'Agents IA spécialisés construits avec Claude pour le développement et la revue de code.',
    leadershipNote: 'Priorisation des tâches, planification des livraisons et coordination d’équipe.',
    leadershipItems: ['Leadership technique', 'Planification des livraisons', 'Mentorat'],
  },

  experience: {
    heading: 'Expérience',
    current: 'En cours',
    nees: {
      role: 'Tech Lead — Développement Kotlin',
      bullets: [
        'Je dirige l’équipe de développement d’applications mobiles, en coordonnant les routines de livraison, la priorisation des tâches et l’alignement technique du développement en Kotlin.',
        'J’anime les réunions, organise les livrables et accompagne l’équipe dans la traduction des exigences produit en plans d’implémentation.',
        'Je développe et maintiens des fonctionnalités sur les plateformes mobile, web et desktop avec Kotlin, React et Electron.',
        'J’implémente des fonctionnalités axées sur l’accessibilité : navigation au clavier, prise en charge des lecteurs d’écran et parcours inclusifs.',
        'Je construis et maintiens des flux d’authentification sécurisés avec NestJS, renforçant la sécurité et la maintenabilité de l’application.',
        'J’optimise les performances et la réactivité du front-end sur différents appareils et contextes d’usage.',
      ],
    },
    edge: {
      role: 'Développeur Web FullStack',
      bullets: [
        'Je développe et maintiens des applications web avec Vue, Node.js, Express, Prisma et PostgreSQL.',
        'Je conçois et optimise des schémas de bases de données en privilégiant l’intégrité, la scalabilité et des relations de données maintenables.',
        'J’implémente des API RESTful et les intègre à des interfaces front-end dynamiques.',
        'Je développe des applications mobiles multiplateformes avec Flutter dans un projet parallèle au sein de la même organisation.',
        'Je collabore avec des équipes pluridisciplinaires pour livrer des fonctionnalités du concept au déploiement.',
      ],
    },
    labbit: {
      role: 'Développeur Web3 FullStack',
      bullets: [
        'J’ai développé de nouvelles fonctionnalités et maintenu des plateformes web existantes, en privilégiant les performances et l’expérience utilisateur.',
        'J’ai implémenté Firebase Authentication de zéro, améliorant la sécurité de l’application et l’expérience d’intégration.',
        'J’ai optimisé les performances du front-end avec des techniques comme le lazy loading et le tree shaking.',
        'J’ai intégré des outils Web3 dont Thirdweb, WalletConnect, Coinbase SDK et Infura pour prendre en charge les transactions NFT, les transactions de jetons et la gestion multi-portefeuilles.',
      ],
    },
  },

  projects: {
    heading: 'Projets sélectionnés',
    visit: 'Visiter',
    pnld: {
      tagline: 'Application mobile du Programme national du manuel et du matériel pédagogique',
      bullets: [
        'J’ai développé des fonctionnalités de l’application mobile axées sur l’accessibilité, les performances et les expériences de lecture numérique.',
        'J’ai travaillé avec les concepts EPUB et Web Publication, soutenant la diffusion de contenus éducatifs et des parcours de lecture inclusifs.',
      ],
    },
    freckle: {
      tagline: 'Plateforme de diffusion en direct',
      bullets: [
        'J’ai développé l’architecture front-end et appliqué des techniques d’optimisation des performances pour offrir une expérience responsive et rapide sur tous les appareils.',
      ],
    },
    polybots: {
      tagline: 'Plateforme de jeu Web3',
      bullets: [
        'J’ai intégré des fonctionnalités Web3, dont la prise en charge des NFT et la connexion de portefeuilles avec Thirdweb et Infura, renforçant les capacités blockchain de la plateforme.',
      ],
    },
    mathtype: {
      tagline: 'Compétition de calcul mental, façon monkeytype',
      bullets: [
        'Construit avec Next.js et Firebase, avec un score signé côté serveur, un classement mondial et une interface traduite en sept langues.',
      ],
    },
  },

  education: {
    heading: 'Formation',
    degree: 'Licence en Systèmes d’Information',
  },

  languages: {
    heading: 'Langues',
    portuguese: 'Portugais',
    english: 'Anglais',
    french: 'Français',
    native: 'Langue maternelle',
    advanced: 'Avancé',
    basic: 'Notions',
  },

  contact: {
    heading: 'Prenons contact',
    body: 'Ouvert aux échanges sur des missions FullStack, mobile et de leadership technique.',
    emailLabel: 'E-mail',
    copy: 'Copier',
    copied: 'Copié',
  },

  footer: {
    rights: '© {year} Rafael Miguel',
  },
};

export default fr;
