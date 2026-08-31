import type { Dictionary } from './en';

/** Español. Traducido de `en.ts`, que es la fuente. */
export const es: Dictionary = {
  meta: {
    title: 'Rafael Miguel — Desarrollador FullStack & Mobile',
    description:
      'Desarrollador FullStack y Mobile con más de 3 años de experiencia construyendo aplicaciones web, de escritorio y móviles escalables. Tech Lead de Kotlin.',
  },

  nav: {
    about: 'sobre mí',
    experience: 'experiencia',
    projects: 'proyectos',
    contact: 'contacto',
    mathtype: 'MathType',
    languageLabel: 'idioma',
    skipToContent: 'Saltar al contenido',
    menuLabel: 'secciones',
  },

  hero: {
    greeting: 'Hola, soy',
    name: 'Rafael Miguel',
    roles: ['Desarrollador FullStack', 'Desarrollador Mobile', 'Tech Lead de Kotlin'],
    summary:
      'Desarrollador FullStack y Mobile con más de 3 años de experiencia construyendo aplicaciones web, de escritorio y móviles escalables y de alto rendimiento. Actualmente Tech Lead de desarrollo Kotlin, liderando la entrega móvil, priorizando tareas, coordinando reuniones y orientando decisiones de implementación.',
    location: 'Brasil',
    ctaProjects: 'Ver proyectos',
    ctaEmail: 'Contactar',
    statYears: 'años de experiencia',
    statRoles: 'cargos simultáneos',
    statLanguages: 'idiomas hablados',
  },

  about: {
    heading: 'Sobre mí',
    body: 'Sólida experiencia con React, Vue, Next.js, NestJS, Node.js, Kotlin, Flutter, PostgreSQL, Prisma, Firebase, AWS, Electron e integraciones Web3 usando WalletConnect, Infura, Thirdweb y Coinbase SDK. Experiencia en productos digitales orientados a la accesibilidad, flujos de EPUB y Web Publication, autenticación segura, interfaces responsivas y optimización del rendimiento entre plataformas. También construyo agentes de IA especializados con Claude para apoyar los flujos de desarrollo y revisión de código.',
  },

  skills: {
    heading: 'Competencias técnicas',
    frontend: 'Front-end',
    backend: 'Back-end',
    mobile: 'Mobile / Escritorio',
    data: 'Bases de datos y Cloud',
    web3: 'Web3',
    ai: 'IA & agentes',
    leadership: 'Liderazgo',
    frontendNote: 'Interfaces responsivas, accesibilidad y optimización del rendimiento.',
    backendNote: 'APIs REST, autenticación y modelado de datos.',
    mobileNote: 'Desarrollo multiplataforma para Android y escritorio.',
    dataNote: 'Modelado de bases de datos y escalabilidad.',
    web3Note: 'Transacciones de NFT y tokens, soporte multi-cartera.',
    aiNote: 'Agentes de IA especializados construidos con Claude para desarrollo y revisión de código.',
    leadershipNote: 'Priorización de tareas, planificación de entregas y coordinación de equipo.',
    leadershipItems: ['Liderazgo técnico', 'Planificación de entregas', 'Mentoría'],
  },

  experience: {
    heading: 'Experiencia',
    current: 'Actual',
    nees: {
      role: 'Tech Lead — Desarrollo Kotlin',
      bullets: [
        'Lidero el equipo de desarrollo de aplicaciones móviles, coordinando rutinas de entrega, priorización de tareas y alineación técnica del desarrollo en Kotlin.',
        'Conduzco reuniones, organizo entregables y apoyo al equipo en traducir los requisitos de producto en planes de implementación.',
        'Desarrollo y mantengo funcionalidades en las plataformas móvil, web y de escritorio usando Kotlin, React y Electron.',
        'Implemento funcionalidades enfocadas en accesibilidad, incluyendo navegación por teclado, soporte para lectores de pantalla y flujos inclusivos.',
        'Construyo y mantengo flujos de autenticación seguros con NestJS, contribuyendo a mayor seguridad y mantenibilidad de la aplicación.',
        'Optimizo el rendimiento y la responsividad del front-end en distintos dispositivos y contextos de uso.',
      ],
    },
    edge: {
      role: 'Desarrollador Web FullStack',
      bullets: [
        'Desarrollo y mantengo aplicaciones web usando Vue, Node.js, Express, Prisma y PostgreSQL.',
        'Diseño y optimizo esquemas de bases de datos con foco en integridad, escalabilidad y relaciones de datos mantenibles.',
        'Implemento APIs RESTful y las integro con interfaces front-end dinámicas.',
        'Desarrollo aplicaciones móviles multiplataforma con Flutter en un proyecto paralelo dentro de la misma organización.',
        'Colaboro con equipos multidisciplinarios para entregar funcionalidades desde el concepto hasta el despliegue.',
      ],
    },
    labbit: {
      role: 'Desarrollador Web3 FullStack',
      bullets: [
        'Desarrollé nuevas funcionalidades y mantuve plataformas web existentes con foco en rendimiento y experiencia de usuario.',
        'Implementé Firebase Authentication desde cero, mejorando la seguridad de la aplicación y la experiencia de incorporación.',
        'Optimicé el rendimiento del front-end con técnicas como lazy loading y tree shaking.',
        'Integré herramientas Web3 incluyendo Thirdweb, WalletConnect, Coinbase SDK e Infura para dar soporte a transacciones de NFT, transacciones de tokens y funcionalidad multi-cartera.',
      ],
    },
  },

  projects: {
    heading: 'Proyectos seleccionados',
    visit: 'Visitar',
    pnld: {
      tagline: 'Aplicación móvil del Programa Nacional del Libro y Material Didáctico',
      bullets: [
        'Desarrollé funcionalidades de la aplicación móvil enfocadas en accesibilidad, rendimiento y experiencias de lectura digital.',
        'Trabajé con los conceptos de EPUB y Web Publication, apoyando la entrega de contenido educativo y flujos de lectura inclusivos.',
      ],
    },
    freckle: {
      tagline: 'Plataforma de transmisión en vivo',
      bullets: [
        'Desarrollé la arquitectura de front-end y apliqué técnicas de optimización del rendimiento para entregar una experiencia responsiva y rápida en distintos dispositivos.',
      ],
    },
    polybots: {
      tagline: 'Plataforma de juego Web3',
      bullets: [
        'Integré funcionalidades Web3 incluyendo soporte para NFT y conexión de carteras con Thirdweb e Infura, fortaleciendo las capacidades blockchain de la plataforma.',
      ],
    },
    mathtype: {
      tagline: 'Competencia de cálculo mental, al estilo monkeytype',
      bullets: [
        'Construido con Next.js y Firebase, con puntuación firmada en el servidor, clasificación global e interfaz traducida a siete idiomas.',
      ],
    },
  },

  education: {
    heading: 'Formación',
    degree: 'Licenciatura en Sistemas de Información',
  },

  languages: {
    heading: 'Idiomas',
    portuguese: 'Portugués',
    english: 'Inglés',
    french: 'Francés',
    native: 'Nativo',
    advanced: 'Avanzado',
    basic: 'Básico',
  },

  contact: {
    heading: 'Hablemos',
    body: 'Abierto a conversaciones sobre trabajo en FullStack, mobile y liderazgo técnico.',
    emailLabel: 'Correo',
    copy: 'Copiar',
    copied: 'Copiado',
  },

  footer: {
    rights: '© {year} Rafael Miguel',
  },
};

export default es;
