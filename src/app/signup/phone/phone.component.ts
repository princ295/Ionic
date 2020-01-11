import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { 
  NavController, 
  LoadingController,
  AlertController, MenuController  } from '@ionic/angular';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent implements OnInit {

  public phoneForm: FormGroup;
 
  constructor(public navCtrl: NavController,  public menu: MenuController,
    public formBuilder: FormBuilder, public loadingCtrl: LoadingController,
    public alertCtrl: AlertController) {
      menu.swipeEnable(false, 'menu1');
      this.phoneForm = formBuilder.group({
        phone: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required])],
      });
    }
    ngOnInit() {}

  ionViewDidEnter() {
  }


  UpdateNumber(){
    let loading = this.loadingCtrl.create({
     
    });
  }
}
