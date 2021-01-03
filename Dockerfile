FROM node:12-alpine
WORKDIR /usr/programming/nlw-1
COPY package*.json ./
RUN npm install
COPY tsconfig.json ./
COPY ./src ./src
RUN npm run build

## this is stage two , where the app actually runs
FROM node:12-alpine
WORKDIR /usr/programming/nlw-1
COPY package*.json ./
RUN npm install --only=production
COPY --from=0 /usr/programming/nlw-1/dist ./dist