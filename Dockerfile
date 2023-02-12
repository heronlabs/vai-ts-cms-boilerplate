FROM node:16-alpine

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile \
  && yarn cache clean \
  && yarn build

EXPOSE 1337

CMD ["yarn", "develop"]
