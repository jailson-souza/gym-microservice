/*
  Warnings:

  - You are about to drop the `StudentTrainingExerciseHistory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "StudentTrainingExerciseHistory" DROP CONSTRAINT "StudentTrainingExerciseHistory_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "StudentTrainingExerciseHistory" DROP CONSTRAINT "StudentTrainingExerciseHistory_studentId_fkey";

-- DropForeignKey
ALTER TABLE "StudentTrainingExerciseHistory" DROP CONSTRAINT "StudentTrainingExerciseHistory_trainingExerciseId_fkey";

-- AlterTable
ALTER TABLE "TrainingHistory" ALTER COLUMN "startDate" SET DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "StudentTrainingExerciseHistory";

-- CreateTable
CREATE TABLE "TrainingExerciseHistory" (
    "id" TEXT NOT NULL,
    "trainingExerciseId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3),
    "exerciseId" TEXT,

    CONSTRAINT "TrainingExerciseHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TrainingExerciseHistory" ADD CONSTRAINT "TrainingExerciseHistory_trainingExerciseId_fkey" FOREIGN KEY ("trainingExerciseId") REFERENCES "TrainingExercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingExerciseHistory" ADD CONSTRAINT "TrainingExerciseHistory_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE SET NULL ON UPDATE CASCADE;
