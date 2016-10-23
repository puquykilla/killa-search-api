FROM node:0.12

ADD . /usr/local/moon
WORKDIR /usr/local/moon

RUN npm install nodemon -g
RUN npm install