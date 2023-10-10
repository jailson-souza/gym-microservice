import { Module } from '@nestjs/common';
import { MusclesModule } from './modules/muscles/muscles.module';
import { ExercisesModule } from './modules/exercises/exercises.module';
import { WorkoutsModule } from './modules/workouts/workouts.module';
import { WorkoutHistoryModule } from './modules/workout-history/workoutHistory.module';
import { GlobalModule } from 'src/shared/utils/tools/global.module';

@Module({
  imports: [
    ...GlobalModule.imports(),
    MusclesModule,
    ExercisesModule,
    WorkoutsModule,
    WorkoutHistoryModule,
  ],
  providers: [...GlobalModule.providers()],
})
export default class MsWorkoutModule extends GlobalModule {
  static PORT = 3002;
}
