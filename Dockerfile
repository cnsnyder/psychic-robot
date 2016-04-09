FROM docker.io/node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN git clone https://github.com/cnsnyder/psychic-robot.git
WORKDIR /usr/src/app/psychic-robot

RUN npm install -g tsc tsd
RUN tsd reinstall --clean
RUN tsc -p .
CMD [ "node", "server.js" ]
EXPOSE 3000
