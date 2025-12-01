FROM alpine:3.21

WORKDIR /app

COPY . .

RUN npm install 

EXPOSE 3000

CMD ["npm", "start"]