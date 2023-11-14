FROM node:20-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .

ARG VITE_APP_BASE_URL


RUN yarn build
FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/ .

VOLUME ["/var/run/docker.sock"]


EXPOSE 4173
CMD ["yarn", "preview"]

