# Build stage
FROM node:25-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --silent
COPY . .
RUN npm run build

# Production stage
FROM node:25-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
# Install a small set of packages for Next.js production runtime if needed
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
ARG PORT=3000
ENV PORT=${PORT}
EXPOSE ${PORT}
CMD ["npm", "run", "start"]
