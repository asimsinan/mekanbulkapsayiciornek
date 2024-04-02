
FROM node:latest

WORKDIR /mekanbul_api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9000

CMD ["npm", "start"]