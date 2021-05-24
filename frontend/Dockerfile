FROM node:alpine AS deps

#create directory

RUN mkdir -p /usr/src
ENV PORT 3000

#create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#install packages

COPY package*.json /usr/src/app
COPY yarn.lock /usr/src/app
RUN yarn install

#copy source files
COPY . /usr/src/app

EXPOSE 3000
CMD "yarn" "dev"

