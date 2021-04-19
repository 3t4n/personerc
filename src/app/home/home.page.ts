import { Component,OnInit  } from '@angular/core';
import {ViewChild} from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit  {
  @ViewChild('true', { static: true }) slider;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    loop: true,
  };
  constructor() {}
  ngOnInit(){
  }
  slidesDidLoad(slides: IonSlides) {
    slides.startAutoplay();
  }
 
}
