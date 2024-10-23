#
# Stage 1: Build stage
#
FROM node:20 AS build
WORKDIR /app
RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .
RUN pnpm build

#
# Stage 2: Run stage
#
FROM node:20-alpine3.19
WORKDIR /app
RUN npm install -g pnpm

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/.next ./.next

EXPOSE 3000

CMD ["pnpm", "start"]
