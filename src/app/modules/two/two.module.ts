import { NgModule } from '@angular/core';
import { TestComponent } from './test/test.component';
import { OneModule } from '../one/one.module';
import { TwoRoutingModule } from './two-routing.module';

@NgModule({
  declarations: [TestComponent],
  imports: [TwoRoutingModule],
  providers: [],
})
export class TwoModule {}
