-- AlterTable
ALTER TABLE "User" ALTER COLUMN "currentLevel" DROP NOT NULL,
ALTER COLUMN "learnedTopics" SET DATA TYPE TEXT[];
