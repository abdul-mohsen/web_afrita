# syntax=docker/dockerfile:1.4
FROM node:20-alpine AS base
WORKDIR /app
ENV NODE_ENV=production


FROM base AS deps
# copy only lockfile and package.json to leverage layer cache
COPY package*.json ./
# enable npm cache in a persistent location and install deps
RUN --mount=type=cache,target=/root/.npm \
    npm i


FROM base AS builder
# copy deps from previous stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# cache Next build cache (optional) and build
RUN --mount=type=cache,target=/root/.next/cache \
    npm run build

FROM node:20-alpine AS runner
ARG PORT
ENV PORT=${PORT:-3000}
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
EXPOSE ${PORT}
CMD ["sh","-c","npx","next","start"]
