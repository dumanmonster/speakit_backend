-- AlterTable
ALTER TABLE "Topic" ADD COLUMN     "language" TEXT NOT NULL DEFAULT 'EN';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "language" TEXT DEFAULT 'EN';
