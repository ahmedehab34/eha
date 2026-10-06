# ---- Build phase ----
FROM node:18-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

# ---- Run phase ----
FROM nginx

COPY --from=build /app/build /usr/share/nginx/html
