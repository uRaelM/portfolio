/**
 * Dicionário-fonte. **Toda chave nova nasce aqui.**
 *
 * `Dictionary = typeof en` é o que sustenta os outros seis idiomas: eles são
 * tipados contra este objeto, então esquecer uma chave — ou errar o nome de
 * uma — vira erro de `npx tsc --noEmit`, não um buraco que só aparece em
 * produção para quem lê coreano.
 *
 * O que **não** é traduzido, e por isso vive fora do dicionário (em
 * `lib/resume.ts`): nomes de empresa, de projeto, de instituição, datas e a
 * lista de tecnologias. `React` e `PostgreSQL` se escrevem igual em japonês, e
 * duplicá-los sete vezes só criaria sete lugares para divergirem.
 */
export const en = {
  meta: {
    title: 'Rafael Miguel — FullStack & Mobile Developer',
    description:
      'FullStack and Mobile Developer with 3+ years of experience building scalable web, desktop, and mobile applications. Kotlin Tech Lead.',
  },

  nav: {
    about: 'about',
    experience: 'experience',
    projects: 'projects',
    contact: 'contact',
    mathtype: 'MathType',
    languageLabel: 'language',
    skipToContent: 'Skip to content',
    menuLabel: 'sections',
  },

  hero: {
    greeting: 'Hi, I am',
    name: 'Rafael Miguel',
    /** As três funções do topo do currículo, separadas para virarem chips. */
    roles: ['FullStack Developer', 'Mobile Developer', 'Kotlin Tech Lead'],
    summary:
      'FullStack and Mobile Developer with 3+ years of experience building scalable, high-performance web, desktop, and mobile applications. Currently serving as Kotlin Development Tech Lead, leading mobile delivery, prioritizing tasks, coordinating meetings, and guiding implementation decisions.',
    location: 'Brazil',
    ctaProjects: 'See projects',
    ctaEmail: 'Get in touch',
    /** Rótulos dos números do topo. Os valores ficam em `resume.ts`. */
    statYears: 'years of experience',
    statRoles: 'concurrent roles',
    statLanguages: 'spoken languages',
  },

  about: {
    heading: 'About',
    body: 'Strong background in React, Vue, Next.js, NestJS, Node.js, Kotlin, Flutter, PostgreSQL, Prisma, Firebase, AWS, Electron, and Web3 integrations using WalletConnect, Infura, Thirdweb, and Coinbase SDK. Experienced in accessibility-oriented digital products, EPUB and Web Publication workflows, secure authentication, responsive interfaces, and performance optimization across platforms. Also builds specialized AI agents with Claude, applied to development and code review workflows.',
  },

  skills: {
    heading: 'Technical skills',
    /** Chaves fixas — casam com `SKILLS` em `resume.ts`. Só o rótulo traduz. */
    frontend: 'Front-end',
    backend: 'Back-end',
    mobile: 'Mobile / Desktop',
    data: 'Databases & Cloud',
    web3: 'Web3',
    ai: 'AI & agents',
    leadership: 'Leadership',
    frontendNote: 'Responsive UI, accessibility, and performance optimization.',
    backendNote: 'REST APIs, authentication, and data modeling.',
    mobileNote: 'Cross-platform development for Android and desktop.',
    dataNote: 'Database modeling and scalability.',
    web3Note: 'NFT and token transactions, multi-wallet support.',
    aiNote: 'Specialized AI agents built with Claude for development and code review.',
    leadershipNote: 'Task prioritization, delivery planning, team coordination.',
    /*
     * Único grupo cujos chips moram no dicionário: os demais listam nomes de
     * tecnologia, que não se traduzem, mas "mentoria" e "planejamento de
     * entregas" são prosa comum e ficariam em inglês nas outras seis versões.
     */
    leadershipItems: ['Tech leadership', 'Delivery planning', 'Mentoring'],
  },

  experience: {
    heading: 'Experience',
    current: 'Present',
    /**
     * Uma entrada por cargo, na ordem do currículo. As chaves (`nees`, `edge`,
     * `labbit`) casam com `EXPERIENCE` em `resume.ts`, que guarda empresa e
     * período; aqui fica só o que muda de idioma.
     */
    nees: {
      role: 'Tech Leader — Kotlin Development',
      bullets: [
        'Lead the mobile application development team, coordinating delivery routines, task prioritization, and technical alignment for Kotlin-based development.',
        'Lead meetings, organize deliverables, and support the team in translating product requirements into implementation plans.',
        'Develop and maintain features across mobile, web, and desktop platforms using Kotlin, React, and Electron.',
        'Implement accessibility-focused features including keyboard navigation, screen reader support, and inclusive user flows.',
        'Build and maintain secure authentication flows with NestJS, contributing to stronger application security and maintainability.',
        'Optimize front-end performance and responsiveness across different devices and usage contexts.',
      ],
    },
    edge: {
      role: 'FullStack Web Developer',
      bullets: [
        'Develop and maintain web applications using Vue, Node.js, Express, Prisma, and PostgreSQL.',
        'Design and optimize database schemas with focus on integrity, scalability, and maintainable data relationships.',
        'Implement RESTful APIs and integrate them with dynamic front-end interfaces.',
        'Develop cross-platform mobile applications with Flutter in a parallel project within the same organization.',
        'Collaborate with multidisciplinary teams to deliver features from concept to deployment.',
      ],
    },
    labbit: {
      role: 'FullStack Web3 Developer',
      bullets: [
        'Developed new features and maintained existing web platforms with focus on performance and user experience.',
        'Implemented Firebase Authentication from scratch, improving application security and onboarding experience.',
        'Optimized front-end performance using techniques such as lazy loading and tree shaking.',
        'Integrated Web3 toolkits including Thirdweb, WalletConnect, Coinbase SDK, and Infura to support NFT transactions, token transactions, and multi-wallet functionality.',
      ],
    },
  },

  projects: {
    heading: 'Selected projects',
    visit: 'Visit',
    pnld: {
      tagline: 'Mobile application for the National Textbook and Educational Materials Program',
      bullets: [
        'Developed mobile application features focused on accessibility, performance, and digital reading experiences.',
        'Worked with EPUB and Web Publication concepts, supporting educational content delivery and inclusive reading flows.',
      ],
    },
    freckle: {
      tagline: 'Live streaming platform',
      bullets: [
        'Developed front-end architecture and applied performance optimization techniques to deliver a responsive, fast experience across devices.',
      ],
    },
    polybots: {
      tagline: 'Web3 game platform',
      bullets: [
        'Integrated Web3 functionality including NFT support and wallet connectivity with Thirdweb and Infura, strengthening the platform blockchain capabilities.',
      ],
    },
    mathtype: {
      tagline: 'Mental math competition, monkeytype style',
      bullets: [
        'Built with Next.js and Firebase, with server-signed scoring, a global leaderboard, and an interface translated into seven languages.',
      ],
    },
  },

  education: {
    heading: 'Education',
    degree: "Bachelor's Degree in Information Systems",
  },

  languages: {
    heading: 'Languages',
    portuguese: 'Portuguese',
    english: 'English',
    french: 'French',
    native: 'Native',
    advanced: 'Advanced',
    basic: 'Basic',
  },

  contact: {
    heading: 'Get in touch',
    body: 'Open to conversations about FullStack, mobile, and technical leadership work.',
    emailLabel: 'Email',
    copy: 'Copy',
    copied: 'Copied',
  },

  footer: {
    /** `{year}` é preenchido por `fmt()` no componente. */
    rights: '© {year} Rafael Miguel',
  },
};

export type Dictionary = typeof en;

export default en;
