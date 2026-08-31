import type { Dictionary } from './en';

/** 简体中文。译自作为源文件的 `en.ts`。 */
export const zh: Dictionary = {
  meta: {
    title: 'Rafael Miguel — 全栈与移动端开发工程师',
    description:
      '拥有 3 年以上经验的全栈与移动端开发工程师，专注于构建可扩展的 Web、桌面和移动应用。Kotlin 技术负责人。',
  },

  nav: {
    about: '关于',
    experience: '经历',
    projects: '项目',
    contact: '联系',
    mathtype: 'MathType',
    languageLabel: '语言',
    skipToContent: '跳到主要内容',
    menuLabel: '章节',
  },

  hero: {
    greeting: '你好，我是',
    name: 'Rafael Miguel',
    roles: ['全栈开发工程师', '移动端开发工程师', 'Kotlin 技术负责人'],
    summary:
      '拥有 3 年以上经验的全栈与移动端开发工程师，专注于构建可扩展、高性能的 Web、桌面和移动应用。目前担任 Kotlin 开发技术负责人，主导移动端交付、任务优先级排定、会议协调以及实现方案的技术决策。',
    location: '巴西',
    ctaProjects: '查看项目',
    ctaEmail: '与我联系',
    statYears: '年经验',
    statRoles: '个在职岗位',
    statLanguages: '门语言',
  },

  about: {
    heading: '关于',
    body: '深入掌握 React、Vue、Next.js、NestJS、Node.js、Kotlin、Flutter、PostgreSQL、Prisma、Firebase、AWS、Electron，以及基于 WalletConnect、Infura、Thirdweb 和 Coinbase SDK 的 Web3 集成。在无障碍数字产品、EPUB 与 Web Publication 工作流、安全认证、响应式界面和跨平台性能优化方面具有丰富经验。此外，我基于 Claude 构建专用 AI 智能体，用于支持开发与代码评审流程。',
  },

  skills: {
    heading: '专业技能',
    frontend: '前端',
    backend: '后端',
    mobile: '移动端 / 桌面端',
    data: '数据库与云',
    web3: 'Web3',
    ai: 'AI 与智能体',
    leadership: '团队领导',
    frontendNote: '响应式界面、无障碍设计与性能优化。',
    backendNote: 'REST API、身份认证与数据建模。',
    mobileNote: '面向 Android 与桌面端的跨平台开发。',
    dataNote: '数据库建模与可扩展性。',
    web3Note: 'NFT 与代币交易，多钱包支持。',
    aiNote: '基于 Claude 构建的专用 AI 智能体，用于开发与代码评审。',
    leadershipNote: '任务优先级排定、交付规划与团队协调。',
    leadershipItems: ['技术领导', '交付规划', '团队辅导'],
  },

  experience: {
    heading: '工作经历',
    current: '至今',
    nees: {
      role: '技术负责人 — Kotlin 开发',
      bullets: [
        '带领移动应用开发团队，负责协调交付流程、任务优先级排定以及 Kotlin 开发的技术对齐。',
        '主持会议、组织交付物，并支持团队将产品需求转化为实现方案。',
        '使用 Kotlin、React 和 Electron 在移动端、Web 端和桌面端开发与维护功能。',
        '实现以无障碍为核心的功能，包括键盘导航、屏幕阅读器支持和包容性的用户流程。',
        '基于 NestJS 构建并维护安全的身份认证流程，提升应用的安全性与可维护性。',
        '优化前端在不同设备和使用场景下的性能与响应速度。',
      ],
    },
    edge: {
      role: '全栈 Web 开发工程师',
      bullets: [
        '使用 Vue、Node.js、Express、Prisma 和 PostgreSQL 开发与维护 Web 应用。',
        '设计并优化数据库结构，注重数据完整性、可扩展性和可维护的数据关系。',
        '实现 RESTful API，并将其与动态前端界面集成。',
        '在同一机构的并行项目中，使用 Flutter 开发跨平台移动应用。',
        '与跨职能团队协作，将功能从概念推进到上线部署。',
      ],
    },
    labbit: {
      role: '全栈 Web3 开发工程师',
      bullets: [
        '开发新功能并维护既有 Web 平台，重点关注性能与用户体验。',
        '从零实现 Firebase Authentication，提升了应用安全性与新用户引导体验。',
        '通过懒加载和 tree shaking 等技术优化前端性能。',
        '集成 Thirdweb、WalletConnect、Coinbase SDK 和 Infura 等 Web3 工具，支持 NFT 交易、代币交易和多钱包功能。',
      ],
    },
  },

  projects: {
    heading: '精选项目',
    visit: '访问',
    pnld: {
      tagline: '巴西国家教材与教学资料计划的移动应用',
      bullets: [
        '开发移动应用功能，聚焦无障碍、性能与数字阅读体验。',
        '基于 EPUB 与 Web Publication 规范开展工作，支撑教育内容分发与包容性阅读流程。',
      ],
    },
    freckle: {
      tagline: '直播平台',
      bullets: [
        '设计前端架构并应用性能优化技术，在各类设备上提供快速、响应式的体验。',
      ],
    },
    polybots: {
      tagline: 'Web3 游戏平台',
      bullets: [
        '集成 Web3 功能，包括 NFT 支持以及通过 Thirdweb 和 Infura 实现的钱包连接，增强了平台的区块链能力。',
      ],
    },
    mathtype: {
      tagline: 'monkeytype 风格的心算竞赛',
      bullets: [
        '基于 Next.js 与 Firebase 构建，包含服务端签名计分、全球排行榜，以及翻译成七种语言的界面。',
      ],
    },
  },

  education: {
    heading: '教育背景',
    degree: '信息系统学士',
  },

  languages: {
    heading: '语言能力',
    portuguese: '葡萄牙语',
    english: '英语',
    french: '法语',
    native: '母语',
    advanced: '高级',
    basic: '入门',
  },

  contact: {
    heading: '联系我',
    body: '欢迎就全栈、移动端开发与技术管理相关的机会交流。',
    emailLabel: '邮箱',
    copy: '复制',
    copied: '已复制',
  },

  footer: {
    rights: '© {year} Rafael Miguel',
  },
};

export default zh;
