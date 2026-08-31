/**
 * Dados do currículo que **não** dependem do idioma.
 *
 * Nome de empresa, de instituição, período, URL e nome de tecnologia se
 * escrevem igual em coreano e em português. Mantê-los aqui, e não nos sete
 * dicionários, significa que corrigir uma data é uma edição em vez de sete —
 * e que não existe o estado em que a versão japonesa mostra um período
 * desatualizado porque alguém esqueceu de propagar.
 *
 * As `key` de cada item casam com as chaves correspondentes do dicionário
 * (`t.experience.nees`, `t.projects.pnld`), e o `as const` é o que faz o
 * TypeScript verificar esse casamento em vez de confiar nele.
 */

export const PROFILE = {
  name: 'Rafael Miguel',
  email: 'rafael.dsm3@gmail.com',
} as const;

/** Rótulos e notas vêm de `t.skills[key]`; só a lista de tecnologias mora aqui. */
export const SKILLS = [
  { key: 'frontend', items: ['React', 'Vue', 'Next.js', 'TypeScript'] },
  { key: 'backend', items: ['Node.js', 'Express', 'NestJS', 'Prisma'] },
  { key: 'mobile', items: ['Kotlin', 'Android', 'Flutter', 'Electron'] },
  { key: 'data', items: ['PostgreSQL', 'Firebase', 'AWS'] },
  { key: 'web3', items: ['WalletConnect', 'Infura', 'Thirdweb', 'Coinbase SDK'] },
  // Nomes próprios, então continuam aqui e não no dicionário — 'Claude Code'
  // se escreve igual em coreano.
  { key: 'ai', items: ['Claude', 'Claude Code'] },
  /*
   * Sem `items`: liderança não tem lista de tecnologias, e os chips dela são
   * prosa traduzível — vivem em `t.skills.leadershipItems`, não aqui.
   */
  { key: 'leadership', items: [] },
] as const;

/**
 * `to: null` significa cargo atual — o rótulo traduzido (`t.experience.current`)
 * entra no lugar na renderização. Guardar `null` em vez da string 'Present'
 * evita ter a palavra "Present" cravada em inglês dentro de um dado.
 */
export const EXPERIENCE = [
  {
    key: 'nees',
    company: 'NEES — Núcleo de Excelência e Tecnologias Sociais',
    from: '2024',
    to: null,
    stack: ['Kotlin', 'React', 'Electron', 'NestJS'],
  },
  {
    key: 'edge',
    company: 'EDGE — Centro de Inovação',
    from: '2025',
    to: null,
    stack: ['Vue', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Flutter'],
  },
  {
    key: 'labbit',
    company: 'Labbit Space Inc.',
    from: '2023',
    to: '2023',
    stack: ['Firebase', 'Thirdweb', 'WalletConnect', 'Coinbase SDK', 'Infura'],
  },
] as const;

/**
 * MathType vem primeiro por ser o único com uma versão navegável no mesmo
 * domínio — é para onde o botão do cabeçalho leva, e um visitante que clica
 * espera encontrá-lo em destaque, não no rodapé da lista.
 *
 * `url` interno (`/mathtype`) é distinguido pelo prefixo `/`: o componente usa
 * âncora comum nos dois casos, mas só abre em nova aba os externos.
 */
export const PROJECTS = [
  {
    key: 'mathtype',
    name: 'MathType',
    url: '/mathtype',
    stack: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind'],
  },
  {
    key: 'pnld',
    name: 'PNLD Digital',
    url: null,
    stack: ['Kotlin', 'Android', 'EPUB', 'Accessibility'],
  },
  {
    key: 'freckle',
    name: 'Freckle Live',
    url: null,
    stack: ['React', 'Performance'],
  },
  {
    key: 'polybots',
    name: 'PolyBots Game',
    url: null,
    stack: ['Thirdweb', 'Infura', 'NFT'],
  },
] as const;

export const EDUCATION = {
  school: 'IFAL — Instituto Federal de Alagoas',
  from: '2021',
  to: '2026',
} as const;

/**
 * Os idiomas falados pela pessoa — diferente de `LOCALES`, que são os idiomas
 * em que a *interface* existe. As duas listas não têm relação: a interface é
 * traduzida para chinês, o autor não fala chinês.
 */
export const SPOKEN = [
  { key: 'portuguese', level: 'native' },
  { key: 'english', level: 'advanced' },
  { key: 'french', level: 'basic' },
] as const;

/** Números do topo. Strings, não inteiros: '3+' não é um número. */
export const STATS = {
  years: '3+',
  roles: String(EXPERIENCE.filter((e) => e.to === null).length),
  languages: String(SPOKEN.length),
} as const;
