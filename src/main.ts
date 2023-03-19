import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap(); //이름 아무거나 써도 됨 위에 함수 이름과 맞으면 됨.
