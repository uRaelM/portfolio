import type { Dictionary } from './en';

/** 日本語。ソースである `en.ts` からの翻訳。 */
export const ja: Dictionary = {
  meta: {
    title: 'Rafael Miguel — フルスタック / モバイル開発者',
    description:
      'スケーラブルな Web・デスクトップ・モバイルアプリケーションの開発に 3 年以上携わるフルスタック / モバイル開発者。Kotlin テックリード。',
  },

  nav: {
    about: '概要',
    experience: '経歴',
    projects: 'プロジェクト',
    contact: '連絡',
    mathtype: 'MathType',
    languageLabel: '言語',
    skipToContent: '本文へスキップ',
    menuLabel: 'セクション',
  },

  hero: {
    greeting: 'はじめまして、',
    name: 'Rafael Miguel',
    roles: ['フルスタック開発者', 'モバイル開発者', 'Kotlin テックリード'],
    summary:
      'スケーラブルで高性能な Web・デスクトップ・モバイルアプリケーションの開発に 3 年以上携わるフルスタック / モバイル開発者です。現在は Kotlin 開発のテックリードとして、モバイル開発のデリバリーを主導し、タスクの優先順位付け、ミーティングの進行、実装方針の意思決定を担当しています。',
    location: 'ブラジル',
    ctaProjects: 'プロジェクトを見る',
    ctaEmail: '連絡する',
    statYears: '年の経験',
    statRoles: '件の兼任ポジション',
    statLanguages: 'つの言語',
  },

  about: {
    heading: '概要',
    body: 'React、Vue、Next.js、NestJS、Node.js、Kotlin、Flutter、PostgreSQL、Prisma、Firebase、AWS、Electron、および WalletConnect・Infura・Thirdweb・Coinbase SDK を用いた Web3 連携に関する確かな経験があります。アクセシビリティを重視したデジタルプロダクト、EPUB および Web Publication のワークフロー、セキュアな認証、レスポンシブな UI、プラットフォーム横断のパフォーマンス最適化に取り組んできました。さらに、Claude を用いて開発およびコードレビューのワークフローを支える専門 AI エージェントを構築しています。',
  },

  skills: {
    heading: '技術スキル',
    frontend: 'フロントエンド',
    backend: 'バックエンド',
    mobile: 'モバイル / デスクトップ',
    data: 'データベース & クラウド',
    web3: 'Web3',
    ai: 'AI / エージェント',
    leadership: 'リーダーシップ',
    frontendNote: 'レスポンシブ UI、アクセシビリティ、パフォーマンス最適化。',
    backendNote: 'REST API、認証、データモデリング。',
    mobileNote: 'Android およびデスクトップ向けのクロスプラットフォーム開発。',
    dataNote: 'データベース設計とスケーラビリティ。',
    web3Note: 'NFT・トークン取引、マルチウォレット対応。',
    aiNote: 'Claude で構築した、開発とコードレビュー向けの専門 AI エージェント。',
    leadershipNote: 'タスクの優先順位付け、デリバリー計画、チーム調整。',
    leadershipItems: ['技術リード', 'デリバリー計画', 'メンタリング'],
  },

  experience: {
    heading: '職務経歴',
    current: '現在',
    nees: {
      role: 'テックリード — Kotlin 開発',
      bullets: [
        'モバイルアプリ開発チームを統括し、デリバリーの運用、タスクの優先順位付け、Kotlin 開発における技術的な方針統一を担当しています。',
        'ミーティングを進行し、成果物を整理するとともに、プロダクト要件を実装計画へ落とし込む支援をしています。',
        'Kotlin、React、Electron を用いて、モバイル・Web・デスクトップの各プラットフォームで機能の開発と保守を行っています。',
        'キーボード操作、スクリーンリーダー対応、インクルーシブなユーザーフローなど、アクセシビリティを重視した機能を実装しています。',
        'NestJS でセキュアな認証フローを構築・保守し、アプリケーションの安全性と保守性の向上に貢献しています。',
        'さまざまなデバイスと利用状況に応じて、フロントエンドのパフォーマンスとレスポンシブ性を最適化しています。',
      ],
    },
    edge: {
      role: 'フルスタック Web 開発者',
      bullets: [
        'Vue、Node.js、Express、Prisma、PostgreSQL を用いて Web アプリケーションを開発・保守しています。',
        '整合性、スケーラビリティ、保守しやすいデータ関係を重視してデータベーススキーマを設計・最適化しています。',
        'RESTful API を実装し、動的なフロントエンド UI と連携させています。',
        '同組織内の並行プロジェクトで、Flutter によるクロスプラットフォームのモバイルアプリを開発しています。',
        '多職種のチームと協働し、構想から本番デプロイまで機能を届けています。',
      ],
    },
    labbit: {
      role: 'フルスタック Web3 開発者',
      bullets: [
        'パフォーマンスとユーザー体験を重視し、新機能の開発と既存 Web プラットフォームの保守を行いました。',
        'Firebase Authentication をゼロから実装し、アプリケーションのセキュリティとオンボーディング体験を改善しました。',
        '遅延読み込みや tree shaking などの手法でフロントエンドのパフォーマンスを最適化しました。',
        'Thirdweb、WalletConnect、Coinbase SDK、Infura といった Web3 ツールを統合し、NFT 取引・トークン取引・マルチウォレット機能に対応しました。',
      ],
    },
  },

  projects: {
    heading: '主なプロジェクト',
    visit: '開く',
    pnld: {
      tagline: 'ブラジル国家教科書・教材プログラム向けモバイルアプリ',
      bullets: [
        'アクセシビリティ、パフォーマンス、デジタル読書体験に重点を置いたモバイルアプリの機能を開発しました。',
        'EPUB および Web Publication の仕様に基づき、教育コンテンツの配信とインクルーシブな読書フローを支えました。',
      ],
    },
    freckle: {
      tagline: 'ライブ配信プラットフォーム',
      bullets: [
        'フロントエンドのアーキテクチャを設計し、パフォーマンス最適化を施すことで、あらゆるデバイスで高速かつレスポンシブな体験を実現しました。',
      ],
    },
    polybots: {
      tagline: 'Web3 ゲームプラットフォーム',
      bullets: [
        'Thirdweb と Infura による NFT 対応とウォレット接続を含む Web3 機能を統合し、プラットフォームのブロックチェーン機能を強化しました。',
      ],
    },
    mathtype: {
      tagline: 'monkeytype 風の暗算コンペティション',
      bullets: [
        'Next.js と Firebase で構築。サーバー側で署名されたスコア、グローバルランキング、7 言語対応の UI を備えています。',
      ],
    },
  },

  education: {
    heading: '学歴',
    degree: '情報システム学 学士',
  },

  languages: {
    heading: '語学',
    portuguese: 'ポルトガル語',
    english: '英語',
    french: 'フランス語',
    native: 'ネイティブ',
    advanced: '上級',
    basic: '初級',
  },

  contact: {
    heading: 'お問い合わせ',
    body: 'フルスタック開発、モバイル開発、技術リードに関するご相談を歓迎します。',
    emailLabel: 'メール',
    copy: 'コピー',
    copied: 'コピーしました',
  },

  footer: {
    rights: '© {year} Rafael Miguel',
  },
};

export default ja;
