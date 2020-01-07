FROM node:10 as build-stage
RUN useradd -ms /bin/bash admin
USER admin

WORKDIR /home/admin
COPY . /home/admin

RUN npm install  @angular/cli &&\
    npm run build:prod &&\
    rm -rf /home/admin/node_modules

