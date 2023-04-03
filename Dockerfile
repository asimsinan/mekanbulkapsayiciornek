
FROM node:latest

WORKDIR /mekanbul_app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000