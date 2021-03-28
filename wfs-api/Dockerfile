FROM node:10 AS wfs-server-build
WORKDIR /usr/src/app
COPY package*.json ./
COPY tsconfig*.json ./
COPY src ./src
RUN npm install && npm run tsc
COPY ./dist .

EXPOSE 3080

CMD ["node", "./src/boot.js"]