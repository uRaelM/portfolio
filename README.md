# portfolio

Portfólio pessoal de Rafael Miguel. Next.js 16 (App Router) + Tailwind v4,
servido na **raiz** de `rafaelmiguel.com.br` — o MathType vive sob `/mathtype`,
em outro container, e o botão do cabeçalho leva até lá.

## Rodando

```bash
npm install
npm run dev          # http://localhost:3000
```

Com Docker, do mesmo jeito que o MathType:

```bash
docker compose up --build   # http://localhost:3001
```

A porta 3001 é do host; dentro do container continua sendo a 3000. A 3000 do
host fica livre para o MathType, então os dois sobem lado a lado.

Em produção quem resolve `/` e `/mathtype` é o proxy do domínio. Em
desenvolvimento o botão do cabeçalho aponta para um `/mathtype` que não existe
localmente — isso é esperado; suba o MathType atrás de um proxy se precisar
testar a travessia.

## Idiomas

Sete: inglês, português, espanhol, francês, chinês, japonês e coreano — o mesmo
conjunto do MathType, porque os dois compartilham o domínio.

O idioma é escolhido na primeira visita pelo `Accept-Language`, com o país como
desempate, e gravado no cookie `portfolio-lang` (`src/proxy.ts`). O seletor do
cabeçalho reescreve esse cookie.

- `src/lib/i18n/dictionaries/en.ts` é a **fonte**. Toda chave nova nasce aqui;
  `Dictionary = typeof en` tipa os outros seis, então esquecer uma chave vira
  erro de `npx tsc --noEmit`, não um buraco em produção.
- `src/lib/resume.ts` guarda o que **não** se traduz: nomes de empresa, de
  projeto, períodos, URLs e tecnologias. Corrigir uma data é uma edição, não
  sete.

## Verificação

```bash
npx tsc --noEmit     # pega chave faltando em qualquer um dos seis dicionários
npm run lint
npm run build
```
