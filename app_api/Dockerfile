
FROM node:latest

WORKDIR /app_api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 9000

CMD ["npm", "start"]