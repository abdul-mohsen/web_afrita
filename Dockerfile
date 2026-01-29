FROM node:latest
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .
RUN npm run build
ENV NODE_ENV=production
ARG PORT
ENV PORT=${PORT:-3000}
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
EXPOSE ${PORT}
CMD ["node", "index.js"]
