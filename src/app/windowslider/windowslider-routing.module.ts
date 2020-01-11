import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WindowsliderPage } from './windowslider.page';

const routes: Routes = [
  {
    path: '',
    component: WindowsliderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WindowsliderPageRoutingModule {}
