import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NestJs!';
  }
  getHi(name: string): string {
    return 'Hi ' + name;
  }
}
