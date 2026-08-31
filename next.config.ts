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
   */
  output: "standalone",
};

export default nextConfig;
