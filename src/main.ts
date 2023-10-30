// import { NestFactory } from '@nestjs/core';
// import AppsModule from './apps/apps.module';
// import { ValidationPipe } from '@nestjs/common';

import AppsModule from './apps/apps.module';
import { bootstrap } from './shared/utils/tools/bootstrap';
import { expressFunction } from './shared/utils/tools/express-function';

// async function bootstrap() {
//   const PORT = process.env.PORT;
//   const app = await NestFactory.create(AppsModule);
//   app.useLogger(false);
//   app.enableCors();
//   app.useGlobalPipes(new ValidationPipe());
//   app.listen(PORT, () => console.log(`server is running in port ${PORT}`));
// }

// bootstrap();

export default expressFunction(bootstrap(AppsModule));
