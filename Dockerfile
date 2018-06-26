FROM node:8-alpine

RUN mkdir -p /usr/share/app
WORKDIR /usr/share/app

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

EXPOSE 80

CMD yarn run start
