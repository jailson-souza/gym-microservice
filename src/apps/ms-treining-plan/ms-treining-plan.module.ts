import { Module } from '@nestjs/common';
import { MusclesModule } from './modules/muscles/muscles.module';
import { ExercisesModule } from './modules/exercises/exercises.module';
import { TrainingPlansModule } from './modules/treining-plan/treining-plan.module';
import { TrainingPlanHistoryModule } from './modules/treining-plan-history/training-plan-history.module';
import { GlobalModule } from 'src/shared/utils/tools/global.module';
import { TrainingModule } from './modules/training/training.module';

@Module({
  imports: [
    MusclesModule,
    ExercisesModule,
    TrainingPlansModule,
    TrainingPlanHistoryModule,
    TrainingModule,
  ],
  providers: [],
})
export default class MsTrainingPlanModule extends GlobalModule {
  static PORT = 3002;
}
