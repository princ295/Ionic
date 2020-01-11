import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-windowslider',
  templateUrl: './windowslider.page.html',
  styleUrls: ['./windowslider.page.scss'],
})
export class WindowsliderPage implements OnInit {

  constructor() { }

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  
  ngOnInit() {
  }

}
