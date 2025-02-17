import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 5000);
}
bootstrap()
  .then(() => console.log('Server is running'))
  .catch((error) => console.log(error));
