FROM node:12-alpine
WORKDIR /usr/programming/nlw-1
COPY package*.json ./
RUN npm install --only=prod
COPY ./dist ./dist