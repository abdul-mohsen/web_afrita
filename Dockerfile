FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
RUN npm run build
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
