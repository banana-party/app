FROM nginx:latest

WORKDIR /app

COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80/tcp

CMD ["/bin/sh", "-c", "exec nginx -g 'daemon off;';"]
