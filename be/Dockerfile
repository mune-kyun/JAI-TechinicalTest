FROM node:18-alpine
WORKDIR /app

COPY package*.json ./
COPY . .
RUN npm install

COPY src src
COPY prisma prisma
COPY .env .env

RUN npm install
RUN npm run migrate
RUN npm run seed

EXPOSE 8000

CMD [ "node", "./src/server.js" ]