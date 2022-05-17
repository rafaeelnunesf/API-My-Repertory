FROM node:16

WORKDIR /usr/src/

COPY . . 

EXPOSE 5000

RUN npm i 
RUN npx prisma generate
RUN npx prisma migrate dev 

CMD ["npm", "run", "dev-migrate"]