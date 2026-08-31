import type { Dictionary } from './en';

/**
 * Português do Brasil. Traduzido do `en.ts`, que é a fonte.
 *
 * Cargos ficam na forma usada no mercado brasileiro — "Tech Lead" não vira
 * "Líder Técnico" porque ninguém escreve isso num currículo daqui.
 */
export const pt: Dictionary = {
  meta: {
    title: 'Rafael Miguel — Desenvolvedor FullStack & Mobile',
    description:
      'Desenvolvedor FullStack e Mobile com mais de 3 anos de experiência construindo aplicações web, desktop e mobile escaláveis. Tech Lead de Kotlin.',
  },

  nav: {
    about: 'sobre',
    experience: 'experiência',
    projects: 'projetos',
    contact: 'contato',
    mathtype: 'MathType',
    languageLabel: 'idioma',
    skipToContent: 'Pular para o conteúdo',
    menuLabel: 'seções',
  },

  hero: {
    greeting: 'Olá, eu sou',
    name: 'Rafael Miguel',
    roles: ['Desenvolvedor FullStack', 'Desenvolvedor Mobile', 'Tech Lead de Kotlin'],
    summary:
      'Desenvolvedor FullStack e Mobile com mais de 3 anos de experiência construindo aplicações web, desktop e mobile escaláveis e de alta performance. Atuo como Tech Lead de desenvolvimento Kotlin, liderando a entrega mobile, priorizando tarefas, coordenando reuniões e orientando decisões de implementação.',
    location: 'Brasil',
    ctaProjects: 'Ver projetos',
    ctaEmail: 'Entrar em contato',
    statYears: 'anos de experiência',
    statRoles: 'cargos simultâneos',
    statLanguages: 'idiomas falados',
  },

  about: {
    heading: 'Sobre',
    body: 'Sólida experiência com React, Vue, Next.js, NestJS, Node.js, Kotlin, Flutter, PostgreSQL, Prisma, Firebase, AWS, Electron e integrações Web3 usando WalletConnect, Infura, Thirdweb e Coinbase SDK. Experiência com produtos digitais voltados à acessibilidade, fluxos de EPUB e Web Publication, autenticação segura, interfaces responsivas e otimização de performance entre plataformas. Também construo agentes de IA especializados com Claude para apoiar fluxos de desenvolvimento e revisão de código.',
  },

  skills: {
    heading: 'Competências técnicas',
    frontend: 'Front-end',
    backend: 'Back-end',
    mobile: 'Mobile / Desktop',
    data: 'Bancos de dados & Cloud',
    web3: 'Web3',
    ai: 'IA & agentes',
    leadership: 'Liderança',
    frontendNote: 'Interfaces responsivas, acessibilidade e otimização de performance.',
    backendNote: 'APIs REST, autenticação e modelagem de dados.',
    mobileNote: 'Desenvolvimento multiplataforma para Android e desktop.',
    dataNote: 'Modelagem de banco de dados e escalabilidade.',
    web3Note: 'Transações de NFT e tokens, suporte a múltiplas carteiras.',
    aiNote: 'Agentes de IA especializados construídos com Claude para desenvolvimento e revisão de código.',
    leadershipNote: 'Priorização de tarefas, planejamento de entregas e coordenação de time.',
    leadershipItems: ['Liderança técnica', 'Planejamento de entregas', 'Mentoria'],
  },

  experience: {
    heading: 'Experiência',
    current: 'Atual',
    nees: {
      role: 'Tech Lead — Desenvolvimento Kotlin',
      bullets: [
        'Lidero o time de desenvolvimento de aplicações mobile, coordenando rotinas de entrega, priorização de tarefas e alinhamento técnico do desenvolvimento em Kotlin.',
        'Conduzo reuniões, organizo entregáveis e apoio o time na tradução de requisitos de produto em planos de implementação.',
        'Desenvolvo e mantenho funcionalidades nas plataformas mobile, web e desktop usando Kotlin, React e Electron.',
        'Implemento funcionalidades focadas em acessibilidade, incluindo navegação por teclado, suporte a leitores de tela e fluxos inclusivos.',
        'Construo e mantenho fluxos de autenticação seguros com NestJS, contribuindo para maior segurança e manutenibilidade da aplicação.',
        'Otimizo a performance e a responsividade do front-end em diferentes dispositivos e contextos de uso.',
      ],
    },
    edge: {
      role: 'Desenvolvedor Web FullStack',
      bullets: [
        'Desenvolvo e mantenho aplicações web usando Vue, Node.js, Express, Prisma e PostgreSQL.',
        'Projeto e otimizo esquemas de banco de dados com foco em integridade, escalabilidade e relações de dados sustentáveis.',
        'Implemento APIs RESTful e as integro a interfaces front-end dinâmicas.',
        'Desenvolvo aplicações mobile multiplataforma com Flutter num projeto paralelo dentro da mesma organização.',
        'Colaboro com times multidisciplinares para entregar funcionalidades do conceito à implantação.',
      ],
    },
    labbit: {
      role: 'Desenvolvedor Web3 FullStack',
      bullets: [
        'Desenvolvi novas funcionalidades e mantive plataformas web existentes com foco em performance e experiência do usuário.',
        'Implementei o Firebase Authentication do zero, melhorando a segurança da aplicação e a experiência de onboarding.',
        'Otimizei a performance do front-end com técnicas como lazy loading e tree shaking.',
        'Integrei ferramentas Web3 incluindo Thirdweb, WalletConnect, Coinbase SDK e Infura para dar suporte a transações de NFT, transações de tokens e funcionalidade multi-carteira.',
      ],
    },
  },

  projects: {
    heading: 'Projetos selecionados',
    visit: 'Acessar',
    pnld: {
      tagline: 'Aplicativo mobile do Programa Nacional do Livro e do Material Didático',
      bullets: [
        'Desenvolvi funcionalidades do aplicativo mobile com foco em acessibilidade, performance e experiências de leitura digital.',
        'Trabalhei com os conceitos de EPUB e Web Publication, apoiando a entrega de conteúdo educacional e fluxos de leitura inclusivos.',
      ],
    },
    freckle: {
      tagline: 'Plataforma de transmissão ao vivo',
      bullets: [
        'Desenvolvi a arquitetura de front-end e apliquei técnicas de otimização de performance para entregar uma experiência responsiva e rápida em diferentes dispositivos.',
      ],
    },
    polybots: {
      tagline: 'Plataforma de jogo Web3',
      bullets: [
        'Integrei funcionalidades Web3 incluindo suporte a NFT e conexão de carteiras com Thirdweb e Infura, fortalecendo as capacidades de blockchain da plataforma.',
      ],
    },
    mathtype: {
      tagline: 'Competição de cálculo mental, no estilo monkeytype',
      bullets: [
        'Construído com Next.js e Firebase, com pontuação assinada no servidor, ranking global e interface traduzida para sete idiomas.',
      ],
    },
  },

  education: {
    heading: 'Formação',
    degree: 'Bacharelado em Sistemas de Informação',
  },

  languages: {
    heading: 'Idiomas',
    portuguese: 'Português',
    english: 'Inglês',
    french: 'Francês',
    native: 'Nativo',
    advanced: 'Avançado',
    basic: 'Básico',
  },

  contact: {
    heading: 'Vamos conversar',
    body: 'Aberto a conversas sobre trabalho em FullStack, mobile e liderança técnica.',
    emailLabel: 'E-mail',
    copy: 'Copiar',
    copied: 'Copiado',
  },

  footer: {
    rights: '© {year} Rafael Miguel',
  },
};

export default pt;
