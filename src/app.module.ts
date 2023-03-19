import { Module } from '@nestjs/common'
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController], //url을 가져오고 함수를 실행하는 일을 수행함, exporess의 라우터같은 존재
  providers: [],
})
export class AppModule { }
