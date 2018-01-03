FROM node:8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install -g babel-cli webpack --registry=https://registry.npm.taobao.org
RUN RUN npm install --dev --registry=https://registry.npm.taobao.org

ARG NODE_ENV
ENV NODE_ENV production
COPY . /usr/src/app
RUN npm run wp-build

CMD [ "npm", "start" ]
EXPOSE 8000