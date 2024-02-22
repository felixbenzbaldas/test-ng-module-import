import { Component } from '@angular/core';
import { HelloService } from '../../one/hello.service';

@Component({
  selector: 'suit-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  constructor(private helloService: HelloService) {}

  text = this.helloService.sayHello();
}
