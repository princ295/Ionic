import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OtpComponent } from './otp/otp.component';

import { SignUpRoutingModule } from "../signup/signup-routing.module";
import { PhoneComponent } from './phone/phone.component';
import { PhoneotpComponent } from './phoneotp/phoneotp.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [OtpComponent, PhoneComponent, PhoneotpComponent],
  imports: [
    CommonModule, SignUpRoutingModule,ReactiveFormsModule, FormsModule
  ],exports: [OtpComponent]
})
export class SignupModule { }
