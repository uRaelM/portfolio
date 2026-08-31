import type { Dictionary } from './en';

/** 한국어. 원본인 `en.ts`에서 번역. */
export const ko: Dictionary = {
  meta: {
    title: 'Rafael Miguel — 풀스택 / 모바일 개발자',
    description:
      '확장 가능한 웹·데스크톱·모바일 애플리케이션을 3년 이상 개발해 온 풀스택 및 모바일 개발자. Kotlin 테크 리드.',
  },

  nav: {
    about: '소개',
    experience: '경력',
    projects: '프로젝트',
    contact: '연락',
    mathtype: 'MathType',
    languageLabel: '언어',
    skipToContent: '본문으로 건너뛰기',
    menuLabel: '섹션',
  },

  hero: {
    greeting: '안녕하세요, 저는',
    name: 'Rafael Miguel',
    roles: ['풀스택 개발자', '모바일 개발자', 'Kotlin 테크 리드'],
    summary:
      '확장 가능하고 성능이 뛰어난 웹·데스크톱·모바일 애플리케이션을 3년 이상 개발해 온 풀스택 및 모바일 개발자입니다. 현재 Kotlin 개발 테크 리드로서 모바일 산출물 전달을 주도하고, 업무 우선순위를 정하며, 회의를 조율하고 구현 방향을 결정하고 있습니다.',
    location: '브라질',
    ctaProjects: '프로젝트 보기',
    ctaEmail: '연락하기',
    statYears: '년 경력',
    statRoles: '개 겸임 직무',
    statLanguages: '개 구사 언어',
  },

  about: {
    heading: '소개',
    body: 'React, Vue, Next.js, NestJS, Node.js, Kotlin, Flutter, PostgreSQL, Prisma, Firebase, AWS, Electron과 WalletConnect·Infura·Thirdweb·Coinbase SDK를 활용한 Web3 연동에 폭넓은 경험이 있습니다. 접근성 중심의 디지털 제품, EPUB 및 Web Publication 워크플로, 보안 인증, 반응형 인터페이스, 플랫폼 전반의 성능 최적화를 다뤄 왔습니다. 또한 Claude로 개발 및 코드 리뷰 워크플로를 지원하는 특화 AI 에이전트를 구축합니다.',
  },

  skills: {
    heading: '기술 역량',
    frontend: '프런트엔드',
    backend: '백엔드',
    mobile: '모바일 / 데스크톱',
    data: '데이터베이스 & 클라우드',
    web3: 'Web3',
    ai: 'AI & 에이전트',
    leadership: '리더십',
    frontendNote: '반응형 UI, 접근성, 성능 최적화.',
    backendNote: 'REST API, 인증, 데이터 모델링.',
    mobileNote: 'Android 및 데스크톱 대상 크로스플랫폼 개발.',
    dataNote: '데이터베이스 모델링과 확장성.',
    web3Note: 'NFT·토큰 거래, 다중 지갑 지원.',
    aiNote: 'Claude로 구축한 개발 및 코드 리뷰용 특화 AI 에이전트.',
    leadershipNote: '업무 우선순위 설정, 산출물 계획, 팀 조율.',
    leadershipItems: ['기술 리더십', '산출물 계획', '멘토링'],
  },

  experience: {
    heading: '경력',
    current: '재직 중',
    nees: {
      role: '테크 리드 — Kotlin 개발',
      bullets: [
        '모바일 애플리케이션 개발팀을 이끌며 산출물 전달 프로세스, 업무 우선순위, Kotlin 개발의 기술적 정렬을 조율합니다.',
        '회의를 주재하고 산출물을 정리하며, 제품 요구사항을 구현 계획으로 옮기는 과정을 지원합니다.',
        'Kotlin, React, Electron으로 모바일·웹·데스크톱 전반의 기능을 개발하고 유지보수합니다.',
        '키보드 내비게이션, 스크린 리더 지원, 포용적인 사용자 흐름 등 접근성 중심 기능을 구현합니다.',
        'NestJS로 안전한 인증 흐름을 구축·유지하여 애플리케이션의 보안성과 유지보수성을 높이고 있습니다.',
        '다양한 기기와 사용 환경에서 프런트엔드 성능과 반응성을 최적화합니다.',
      ],
    },
    edge: {
      role: '풀스택 웹 개발자',
      bullets: [
        'Vue, Node.js, Express, Prisma, PostgreSQL로 웹 애플리케이션을 개발하고 유지보수합니다.',
        '무결성, 확장성, 유지보수 가능한 데이터 관계에 중점을 두고 데이터베이스 스키마를 설계하고 최적화합니다.',
        'RESTful API를 구현하고 동적인 프런트엔드 인터페이스와 연동합니다.',
        '같은 조직의 병행 프로젝트에서 Flutter로 크로스플랫폼 모바일 애플리케이션을 개발합니다.',
        '다분야 팀과 협업하여 기획부터 배포까지 기능을 완성합니다.',
      ],
    },
    labbit: {
      role: '풀스택 Web3 개발자',
      bullets: [
        '성능과 사용자 경험에 중점을 두고 신규 기능을 개발하고 기존 웹 플랫폼을 유지보수했습니다.',
        'Firebase Authentication을 처음부터 구현하여 애플리케이션 보안과 온보딩 경험을 개선했습니다.',
        '지연 로딩과 tree shaking 등의 기법으로 프런트엔드 성능을 최적화했습니다.',
        'Thirdweb, WalletConnect, Coinbase SDK, Infura 등 Web3 도구를 통합해 NFT 거래, 토큰 거래, 다중 지갑 기능을 지원했습니다.',
      ],
    },
  },

  projects: {
    heading: '주요 프로젝트',
    visit: '바로가기',
    pnld: {
      tagline: '브라질 국가 교과서·교육자료 프로그램 모바일 애플리케이션',
      bullets: [
        '접근성, 성능, 디지털 독서 경험에 중점을 둔 모바일 애플리케이션 기능을 개발했습니다.',
        'EPUB 및 Web Publication 개념을 다루며 교육 콘텐츠 전달과 포용적인 독서 흐름을 지원했습니다.',
      ],
    },
    freckle: {
      tagline: '라이브 스트리밍 플랫폼',
      bullets: [
        '프런트엔드 아키텍처를 설계하고 성능 최적화 기법을 적용해 다양한 기기에서 빠르고 반응성 좋은 경험을 제공했습니다.',
      ],
    },
    polybots: {
      tagline: 'Web3 게임 플랫폼',
      bullets: [
        'Thirdweb과 Infura를 활용한 NFT 지원 및 지갑 연결 등 Web3 기능을 통합하여 플랫폼의 블록체인 역량을 강화했습니다.',
      ],
    },
    mathtype: {
      tagline: 'monkeytype 스타일의 암산 대결',
      bullets: [
        'Next.js와 Firebase로 제작했으며, 서버에서 서명한 점수, 글로벌 순위표, 7개 언어로 번역된 인터페이스를 갖추고 있습니다.',
      ],
    },
  },

  education: {
    heading: '학력',
    degree: '정보시스템학 학사',
  },

  languages: {
    heading: '구사 언어',
    portuguese: '포르투갈어',
    english: '영어',
    french: '프랑스어',
    native: '모국어',
    advanced: '고급',
    basic: '초급',
  },

  contact: {
    heading: '연락하기',
    body: '풀스택·모바일 개발과 기술 리더십에 관한 이야기를 언제든 환영합니다.',
    emailLabel: '이메일',
    copy: '복사',
    copied: '복사됨',
  },

  footer: {
    rights: '© {year} Rafael Miguel',
  },
};

export default ko;
