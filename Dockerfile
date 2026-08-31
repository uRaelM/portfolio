# ── Stage 1: dependências ─────────────────────────────────────────
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# ── Stage 2: build ────────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1

# Sem `--build-arg` aqui, ao contrário do MathType: aquele projeto precisa das
# `NEXT_PUBLIC_FIREBASE_*` em build time porque elas são embutidas no bundle.
# Este não tem nenhuma variável pública — todo o conteúdo é estático, vindo de
# `src/lib/resume.ts` e dos dicionários.
RUN npm run build

# ── Stage 3: runtime enxuto (output standalone) ───────────────────
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]
