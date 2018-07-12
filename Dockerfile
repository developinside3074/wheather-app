FROM node:9-alpine

ENV NODE_ENV production

#RUN mkdir /opt/app-root
WORKDIR /opt/app-root

COPY package-lock.json /opt/app-root/src/
COPY package.json /opt/app-root/src/

RUN npm install

COPY . /opt/app-root/
RUN npm run build

EXPOSE 4000

CMD["node", "./server"]