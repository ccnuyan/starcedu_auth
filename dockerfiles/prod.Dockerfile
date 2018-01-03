FROM node:8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV production
COPY package.json /usr/src/app/
RUN npm install -g babel-cli webpack --registry=https://registry.npm.taobao.org
RUN npm install --development --registry=https://registry.npm.taobao.org
COPY . /usr/src/app
RUN npm run wp-build

CMD [ "npm", "start" ]
EXPOSE 8000