FROM node:22.9-alpine AS dev

ARG SRC_DIR=/usr/src/app
ARG NODE_PATH

WORKDIR ${SRC_DIR}
COPY . ${SRC_DIR}

RUN npm install -g npm@11.3.0

RUN npm i

#########################################

FROM dev as prod

RUN npm run build
