-- CreateTable
CREATE TABLE "Definition" (
    "id" SERIAL NOT NULL,
    "word" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Definition_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Definition_word_key" ON "Definition"("word");
