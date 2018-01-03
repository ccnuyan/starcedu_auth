FROM node:8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV production
COPY package.json /usr/src/app/
RUN npm install -g babel-cli
COPY . /usr/src/app

CMD [ "npm", "start" ]
EXPOSE 8000