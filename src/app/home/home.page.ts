import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';


import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmailValidator  } from "../validation/Email";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public signupForm: FormGroup;
 
  constructor(
    public navCtrl: NavController, public formBuilder: FormBuilder, public loadingCtrl: LoadingController , public alertCtrl: AlertController
  ) {
    this.signupForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }
  signupUser(){

  }
  goToLogin(){
    
  }
}
