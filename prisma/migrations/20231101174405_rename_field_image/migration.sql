/*
  Warnings:

  - You are about to drop the column `sourceImages` on the `Exercise` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Exercise" DROP COLUMN "sourceImages",
ADD COLUMN     "image" TEXT;
