FROM node:8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install -g babel-cli webpack --registry=https://registry.npm.taobao.org
RUN RUN npm install --only=dev --registry=https://registry.npm.taobao.org

RUN npm install -g mocha --registry=https://registry.npm.taobao.org

ARG NODE_ENV
ENV NODE_ENV test
COPY . /usr/src/app
RUN webpack

CMD ["npm", "run", "build-install-test"]