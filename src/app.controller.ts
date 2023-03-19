import { Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  //end point를 설정한다
  //query paramter는 아래와 같이 사용
  //하지만 controller에서 직접 사용하지 않고 service로 넘겨서 비즈니스 로직은 service로 넘겨서 처리해야 함
  @Get("/hello")
  sayHello(@Query('name') name: string): string {
    return this.appService.getHi(name);
  }

  @Post("/posting")
  postName(name: string): string {
    return name;
  }
}
