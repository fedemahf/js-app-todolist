FROM node:bullseye

WORKDIR /usr/app
COPY ./ ./
EXPOSE 3000
EXPOSE 3001

ENTRYPOINT [ "/bin/bash", "/usr/app/start.sh" ]
