import { bootstrap } from './shared/utils/tools/bootstrap';
import MsUserModule from './apps/ms-user/ms-user.module';
import MsStudentModule from './apps/ms-student/ms-student.module';
import MsWorkoutModule from './apps/ms-workout/ms-workout.module';
import { expressFunction } from './shared/utils/tools/express-function';

exports.ms_users = expressFunction(bootstrap(MsUserModule));
exports.ms_students = expressFunction(bootstrap(MsStudentModule));
exports.ms_workouts = expressFunction(bootstrap(MsWorkoutModule));
