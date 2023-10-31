import { bootstrap } from './shared/utils/tools/bootstrap';
import MsUserModule from './apps/ms-user/ms-user.module';
import MsStudentModule from './apps/ms-student/ms-student.module';
import MsTrainingPlanModule from './apps/ms-treining-plan/ms-treining-plan.module';
import { expressFunction } from './shared/utils/tools/express-function';

exports.ms_users = expressFunction(bootstrap(MsUserModule));
exports.ms_students = expressFunction(bootstrap(MsStudentModule));
exports.ms_training_plan = expressFunction(bootstrap(MsTrainingPlanModule));
