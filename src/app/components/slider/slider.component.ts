import {Component, OnInit} from '@angular/core';

import {ICarouselConfig, AnimationConfig} from 'angular4-carousel';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  imageSources: string[] = [
    'assets/img/slider/slider-1.jpg',
    'assets/img/slider/slider-2.jpg'
  ];

  config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: false,
    autoplayDelay: 2000,
    stopAutoplayMinWidth: 768
  };

  constructor() {
  }

  ngOnInit() {
    this.slide();
  }

  slide() {
    // const x = document.getElementById('carouselExample') as HTMLElement;
    // const y = x.getElementsByClassName('slide.bs.carousel');
    // console.log(y);
  }
}

