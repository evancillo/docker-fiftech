FROM node:10 as build-stage
RUN useradd -ms /bin/bash admin
USER admin

WORKDIR /home/admin
COPY . /home/admin

RUN npm install
    #node app.js &&\
    #rm -rf /home/admin/node_modules

EXPOSE 3000