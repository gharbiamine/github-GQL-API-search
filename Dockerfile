FROM node:20-alpine AS builder
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .

ARG VITE_APP_BASE_URL
ARG VITE_APP_GITHUB_PUBLIC_API_KEY

RUN yarn build
FROM node:20-alpine AS runner
WORKDIR /app
COPY --from=builder /app/ .

EXPOSE 5173
CMD ["yarn", "dev"]