import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/a',
    pathMatch: 'full',
  },
  {
    path: 'a',
    component: AComponent,
    data: {index: 0}
  },
  {
    path: 'b',
    component: BComponent,
    data: {index: 1}
  },
  {
    path: 'c',
    component: CComponent,
    data: {index: 2}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
