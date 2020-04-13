FROM node:12.16.0
WORKDIR /var/code/
ADD . /var/code/
EXPOSE 2020
ENTRYPOINT ./startup.sh
