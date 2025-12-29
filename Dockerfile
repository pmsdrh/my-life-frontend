FROM node:20-alpine as build

WORKDIR /app
COPY package.json ./
RUN npm install

COPY . .
RUN npm run build


FROM nginx:alpine as prod

RUN rm /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html


COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
