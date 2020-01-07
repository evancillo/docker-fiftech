FROM node:10 as build-stage
RUN useradd -ms /bin/bash admin
USER admin

WORKDIR /home/admin
COPY . /home/admin

RUN npm install  @angular/cli &&\
    npm run build:prod &&\
    rm -rf /home/admin/node_modules

# Stage 2, based on Nginx, to have only the compiled app, ready for production with Nginx

FROM nginx:1.13.9-alpine
COPY ./config/nginx-custom.conf /etc/nginx/conf.d/default.conf
## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*
## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=build-stage /home/admin/dist /usr/share/nginx/html
EXPOSE  80
CMD ["nginx", "-g", "daemon off;"]