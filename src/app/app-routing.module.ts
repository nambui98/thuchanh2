import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Bai1Component } from './bai1/pages/bai1/bai1.component';
import { Bai2Component } from './bai2/pages/bai2/bai2.component';

const routes: Routes = [
  { path: 'bai1', component: Bai1Component },
  { path: '', component: Bai1Component },
  { path: 'bai2', component: Bai2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
