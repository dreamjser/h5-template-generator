FROM node:16.20-alpine

WORKDIR /apps

COPY package*.json /apps/

RUN npm i pnpm -g && pnpm i --ignore-scripts

COPY . /apps

RUN npm run build:s-test


FROM nginx

COPY --from=0 /apps/dist /usr/share/nginx/html/

COPY --from=0 /apps/deploy/default.conf /etc/nginx/conf.d/default.conf
