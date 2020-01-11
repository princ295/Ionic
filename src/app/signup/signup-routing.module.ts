import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtpComponent } from './otp/otp.component';
import { PhoneComponent } from './phone/phone.component';
import { PhoneotpComponent } from './phoneotp/phoneotp.component';


const routes: Routes = [
  {
    path: '', component: PhoneComponent
  },
  {
    path:'otp', component: OtpComponent
  },
  {
    path: 'phoneotp', component: PhoneotpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpRoutingModule {}
