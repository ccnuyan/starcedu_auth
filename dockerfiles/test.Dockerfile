FROM node:8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV test
COPY package.json /usr/src/app/
RUN npm install -g babel-cli mocha webpack --registry=https://registry.npm.taobao.org
RUN npm install --registry=https://registry.npm.taobao.org
COPY . /usr/src/app
RUN npm run db-build
RUN npm run db-install
RUN webpack

CMD [ "npm", "test" ]