/*
  Warnings:

  - You are about to drop the column `order` on the `TrainingPlan` table. All the data in the column will be lost.
  - You are about to drop the `StudentExerciseHistory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TrainingPlanExercise` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TrainingPlanHistory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "StudentExerciseHistory" DROP CONSTRAINT "StudentExerciseHistory_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "StudentExerciseHistory" DROP CONSTRAINT "StudentExerciseHistory_studentId_fkey";

-- DropForeignKey
ALTER TABLE "TrainingPlanExercise" DROP CONSTRAINT "TrainingPlanExercise_exerciseId_fkey";

-- DropForeignKey
ALTER TABLE "TrainingPlanExercise" DROP CONSTRAINT "TrainingPlanExercise_treiningPlanId_fkey";

-- DropForeignKey
ALTER TABLE "TrainingPlanHistory" DROP CONSTRAINT "TrainingPlanHistory_treiningPlanId_fkey";

-- AlterTable
ALTER TABLE "TrainingPlan" DROP COLUMN "order",
ADD COLUMN     "objective" VARCHAR(1000);

-- DropTable
DROP TABLE "StudentExerciseHistory";

-- DropTable
DROP TABLE "TrainingPlanExercise";

-- DropTable
DROP TABLE "TrainingPlanHistory";

-- CreateTable
CREATE TABLE "Training" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,
    "trainingPlanId" TEXT NOT NULL,
    "isActive" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Training_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingExercise" (
    "id" TEXT NOT NULL,
    "treiningId" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "intervalInSeconds" INTEGER,
    "order" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TrainingExercise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrainingHistory" (
    "id" TEXT NOT NULL,
    "treiningPlanId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "trainingId" TEXT,

    CONSTRAINT "TrainingHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentTrainingExerciseHistory" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "trainingExerciseId" TEXT NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "exerciseId" TEXT,

    CONSTRAINT "StudentTrainingExerciseHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Training" ADD CONSTRAINT "Training_trainingPlanId_fkey" FOREIGN KEY ("trainingPlanId") REFERENCES "TrainingPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingExercise" ADD CONSTRAINT "TrainingExercise_treiningId_fkey" FOREIGN KEY ("treiningId") REFERENCES "Training"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingExercise" ADD CONSTRAINT "TrainingExercise_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingHistory" ADD CONSTRAINT "TrainingHistory_trainingId_fkey" FOREIGN KEY ("trainingId") REFERENCES "Training"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentTrainingExerciseHistory" ADD CONSTRAINT "StudentTrainingExerciseHistory_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentTrainingExerciseHistory" ADD CONSTRAINT "StudentTrainingExerciseHistory_trainingExerciseId_fkey" FOREIGN KEY ("trainingExerciseId") REFERENCES "TrainingExercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StudentTrainingExerciseHistory" ADD CONSTRAINT "StudentTrainingExerciseHistory_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE SET NULL ON UPDATE CASCADE;
