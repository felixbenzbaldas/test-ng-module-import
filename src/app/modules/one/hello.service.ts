import { Injectable } from '@angular/core';

@Injectable()
export class HelloService {
  sayHello(): string {
    return 'Hello!';
  }

  constructor() {}
}
