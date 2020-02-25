FROM nginx:alpine
COPY . /usr/share/nginx/html
RUN export http_proxy=http://172.20.224.1:3128
RUN apk update
RUN apk add firefox-esr