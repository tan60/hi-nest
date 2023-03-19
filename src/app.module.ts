import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [], //url을 가져오고 함수를 실행하는 일을 수행함, exporess의 라우터같은 존재
  providers: [],
})
export class AppModule { }
