FROM node:16-alpine

# hadolint ignore=DL3018
RUN apk update \
  && apk add --no-cache \
  build-base \
  gcc \
  autoconf \
  automake \
  zlib-dev \
  libpng-dev \
  nasm \
  bash \
  vips-dev

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile \
  && yarn cache clean \
  && yarn build

EXPOSE 1337

CMD ["yarn", "develop"]
