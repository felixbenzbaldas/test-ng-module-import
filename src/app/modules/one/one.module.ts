import { NgModule } from '@angular/core';
import { OneRoutingModule } from './one-routing.module';
import { FooComponent } from './foo/foo.component';
import { HelloService } from './hello.service';

@NgModule({
  imports: [OneRoutingModule],
  declarations: [FooComponent],
  providers: [HelloService],
  exports: [FooComponent],
})
export class OneModule {}
