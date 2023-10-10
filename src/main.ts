import { bootstrap } from './shared/utils/tools/bootstrap';

async function main() {
  [
    await import('./apps/ms-user/ms-user.module'),
    await import('./apps/ms-student/ms-student.module'),
    await import('./apps/ms-workout/ms-workout.module'),
  ].forEach(async (NestModule) => {
    const PORT = NestModule.default.PORT;
    const app = await bootstrap(NestModule.default)();
    app.listen(PORT, () =>
      console.log(`${NestModule.default.name} is running in port ${PORT}`),
    );
  });
}
main();
