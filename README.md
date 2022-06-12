# [My Repertory](my-repertory.vercel.app)

## About this Project

The idea of the App is:

_"An app where you can create and manage music repertoires that you want to keep fresh in your memory"._

## Why?

This project came about after a problem that I as a musician had been facing for a long time: I always ended up forgetting how to play some songs after a while without practicing, so I needed something to show me when was the last time I played a certain song, so I could practice again and keep it fresh in my memory

This is an authorial project in constant development, so, I'll be happy if you could provide me any feedback about the project, code, structure or anything that you can report that could make me a better developer!

Email-me: rafaelnfsq@gmail.com

Connect with me at [LinkedIn](https://www.linkedin.com/in/rafaeelnunesf).

## Functionalities

- Sign-Up and Sign-In. I decided to make this functionality so that different users create their own lists, and only this user has access

- Create as many repertories as you want

- Add musics to a existing repertory

- Mark a music as practiced

- Delete a music from your repertory

- Musics
  - See when was the last time this was practiced
  - See the lyrics and tabs of this song

## Built With

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E)

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want
4. Configure the `.env` file using the `.env.example` file (see "Running application locally or inside docker section" for details)
5. Run all migrations

```bash
npm run dev-migration
```

6. Run the back-end in a development environment:

```bash
npm run dev
```

## How to run tests

1. Follow the steps in the last section
1. Configure the `.env.test` file using the `.env.example` file (see "Running application locally or inside docker" section for details)
1. Run all migrations

```bash
npm run dev-migrate-test
```

3. Run test:
   (locally)

```bash
npm run test
```

## Building and starting for production

```bash
npm run build
npm start
```

If you want to see in detail the whole part of how the frontend was built, take a look at this [repository!](https://github.com/rafaeelnunesf/My-Repertory)
