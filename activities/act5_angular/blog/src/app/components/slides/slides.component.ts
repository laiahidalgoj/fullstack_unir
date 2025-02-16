import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit {

  images: string[] = [
    './assets/roma-banner.png',
    './assets/paris-banner.png',
    './assets/marrakech-banner.png',
    './assets/jordania-banner.png'
  ];

  currentIndex = 0;

  constructor() { }

  ngOnInit(): void {
    this.autoSlide();
  }

  autoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 6000); 
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }
}
