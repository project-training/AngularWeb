FROM node:11
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g @angular/cli
COPY . /usr/src/app
CMD ng serve --host 0.0.0.0 --disableHostCheck --port 4200