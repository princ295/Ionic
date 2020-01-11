import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder ,Validators} from "@angular/forms";

import {
  Platform,
  LoadingController, 
  NavController,
  AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss'],
})
export class OtpComponent implements OnInit {

  
  public otpForm: FormGroup;
  public initState: boolean =  false;

  constructor(
    public navCtrl: NavController, public platform: Platform, public menu: MenuController, public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
  ) {
    this.otpForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
   }

  ngOnInit() {}

  submitOtp(){}


}
