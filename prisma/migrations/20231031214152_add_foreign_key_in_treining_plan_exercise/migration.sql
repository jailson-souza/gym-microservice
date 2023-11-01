-- AddForeignKey
ALTER TABLE "TrainingPlanExercise" ADD CONSTRAINT "TrainingPlanExercise_treiningPlanId_fkey" FOREIGN KEY ("treiningPlanId") REFERENCES "TrainingPlan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrainingPlanExercise" ADD CONSTRAINT "TrainingPlanExercise_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "Exercise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
