FROM keymetrics/pm2:16-buster

WORKDIR /servers

# Bundle APP files
COPY ./json_server/package*.json /servers/
RUN npm i
COPY ./json_server /servers/

ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

CMD [ "pm2-runtime", "start", "pm2.json" ]
