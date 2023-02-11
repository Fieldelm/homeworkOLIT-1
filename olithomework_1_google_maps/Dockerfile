
FROM node:latest

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .


ARG apikey
ENV REACT_APP_GOOGLEMAPS_API_KEY=$apikey 


EXPOSE 3000


CMD [ "npm", "start" ]

