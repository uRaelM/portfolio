import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /*
   * O portfólio é servido na **raiz** do domínio, então não há `basePath` aqui
   * — ao contrário do MathType, que vive sob `/mathtype`. O link do cabeçalho
   * para lá é uma âncora comum, resolvida pelo proxy de produção.
   *
   * `standalone` recorta uma árvore mínima em `.next/standalone`, com só as
   * dependências alcançadas pelo build. É o que permite o último estágio do
   * Dockerfile rodar sem `node_modules` inteiro.
   *
   * Na Vercel, porém, `standalone` precisa ficar de fora. Lá o build roda com o
   * adaptador da própria Vercel, que monta o output serverless e não consome
   * `.next/standalone`; a etapa de standalone então tenta ler
   * `.next/next-server.js.nft.json` sem tratamento de erro (`copyTracedFiles`,
   * em `next/dist/build/utils.js`) e o `next build` morre com ENOENT. O Next
   * inclusive avisa no próprio fonte que `standalone` pode passar a ser proibido
   * quando há adaptador configurado. `VERCEL` é definida por ela em build time.
   */
  output: process.env.VERCEL ? undefined : "standalone",
};

export default nextConfig;
