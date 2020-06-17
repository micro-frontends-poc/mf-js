FROM node
ADD . /var/app
WORKDIR /var/app
ENV PATH="/var/app/node_modules/.bin/:${PATH}"
RUN npm install
CMD npm run start
EXPOSE 3002