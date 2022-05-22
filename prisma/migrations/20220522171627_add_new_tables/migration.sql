-- CreateTable
CREATE TABLE "repertories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "repertories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "musics" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "tab" TEXT NOT NULL,
    "lyrics" TEXT NOT NULL,

    CONSTRAINT "musics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "musicRepertory" (
    "repertoryId" INTEGER NOT NULL,
    "musicId" INTEGER NOT NULL,
    "lastTimePlayed" TIMESTAMP(3) NOT NULL,
    "timesplayed" INTEGER NOT NULL,

    CONSTRAINT "musicRepertory_pkey" PRIMARY KEY ("repertoryId","musicId")
);

-- AddForeignKey
ALTER TABLE "repertories" ADD CONSTRAINT "repertories_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "musicRepertory" ADD CONSTRAINT "musicRepertory_repertoryId_fkey" FOREIGN KEY ("repertoryId") REFERENCES "repertories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "musicRepertory" ADD CONSTRAINT "musicRepertory_musicId_fkey" FOREIGN KEY ("musicId") REFERENCES "musics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
