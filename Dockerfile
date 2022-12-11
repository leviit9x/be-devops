FROM node:lts As development

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

COPY prisma ./prisma/

RUN yarn add glob rimraf

RUN apt-get -qy update && apt-get -qy install openssl

RUN yarn --only=development

# Bundle app source
COPY . .

RUN yarn build

FROM node:lts As production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

# Here Prisma folder to the container
COPY prisma ./prisma/

RUN yarn add glob rimraf

RUN yarn --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/main"]