import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WindowsliderPageRoutingModule } from './windowslider-routing.module';

import { WindowsliderPage } from './windowslider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WindowsliderPageRoutingModule
  ],
  declarations: [WindowsliderPage]
})
export class WindowsliderPageModule {}
