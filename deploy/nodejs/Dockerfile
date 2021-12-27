#----------------DEVELOPMENT----------------
FROM node:12 as dev

USER root

RUN mkdir /home/node/.npm-global
ENV PATH=/home/node/.npm-global/bin:$PATH
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

WORKDIR /www
COPY . /www

EXPOSE 80
CMD ["npm", "start"]
