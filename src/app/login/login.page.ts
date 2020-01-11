import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { EmailValidator } from "../validation/Email";


import {
  Platform,
  LoadingController, 
  NavController,
  AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;
  public initState: boolean =  false;

  constructor(
    public navCtrl: NavController, public platform: Platform, public menu: MenuController, public loadingCtrl: LoadingController, 
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
  ) { 
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  ngOnInit() {
  }

  goToSignup(){}


  goToResetPassword(){}

  loginViaFacebook(){}

  loginUser(){
    console.log(this.loginForm.value);
  }
}
