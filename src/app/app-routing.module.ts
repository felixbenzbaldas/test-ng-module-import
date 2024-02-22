import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'one',
    loadChildren: () =>
      import('./modules/one/one.module').then((m) => m.OneModule),
  },
  {
    path: 'two',
    loadChildren: () =>
      import('./modules/two/two.module').then((m) => m.TwoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
