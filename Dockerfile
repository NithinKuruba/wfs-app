FROM node:10 AS wfs-server-build
WORKDIR /usr/src/app
COPY wfs-ui/ ./wfs-ui/
RUN cd wfs-ui && npm install && npm run build
COPY wfs-api/ ./wfs-api/
RUN cd wfs-api && npm install && npm run tsc
EXPOSE 3080

CMD ["node", "./wfs-api/dist/server.js"]