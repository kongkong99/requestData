FROM node:14

RUN mkdir -p /usr/src/requestInterface

WORKDIR /usr/src/requestInterface

# add npm package
COPY package.json /usr/src/requestInterface/package.json

RUN npm i --registry=https://registry.npm.taobao.org

# copy code
COPY . /usr/src/requestInterface

EXPOSE 7002

CMD npx egg-scripts start --port=7002