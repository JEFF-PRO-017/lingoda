import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
     selector: 'app-main-carousel',
     templateUrl: './main-carousel.component.html',
     styleUrls: ['./main-carousel.component.scss'],
})
export class MainCarouselComponent implements OnInit {
     flag: string = 'assets/img/drapeau1.jpg';
     countries = [
          { name: 'CM', flag: 'assets/img/drapeau1.jpg', teachers: 2399 },

          // Add more countries as needed
     ];

     // isHovered = false;
     // transformValue = 'translateX(0)';
     // interval: any;

     // @ViewChild('carousel') carousel: ElementRef | undefined;

     ngOnInit() {
          // this.startCarousel();
     }

     // startCarousel() {
     //   this.interval = setInterval(() => {
     //     this.updateCarousel();
     //   }, 2000); // Ajustez l'intervalle selon vos besoins
     // }

     // stopCarousel() {
     //   clearInterval(this.interval);
     // }

     // updateCarousel() {
     //   if (!this.isHovered && this.carousel) {
     //     const currentTransformValue = this.getCurrentTransformValue();
     //     const newTransformValue = currentTransformValue - 310; // Ajustez 310 selon la largeur de la diapositive

     //     this.transformValue = `translateX(${newTransformValue}px)`;

     //     const slides = this.carousel.nativeElement.querySelectorAll('.slide');
     //     const firstSlide = slides[0];
     //     const clone = firstSlide.cloneNode(true);
     //     this.carousel.nativeElement.appendChild(clone);
     //     this.carousel.nativeElement.removeChild(firstSlide);
     //     this.transformValue = 'translateX(0)';
     //   }
     // }

     // getCurrentTransformValue(): number {
     //   if (this.carousel) {
     //     return parseFloat(getComputedStyle(this.carousel.nativeElement).getPropertyValue('transform').split(',')[4]);
     //   }
     //   return 0;
     // }

     // @HostListener('mouseenter')
     // onMouseEnter() {
     //   this.isHovered = true;
     // }

     // @HostListener('mouseleave')
     // onMouseLeave() {
     //   this.isHovered = false;
     // }

     // @HostListener('window:resize', ['$event'])
     // onResize(event: Event) {
     //   // Recalculer le déplacement lors du redimensionnement de la fenêtre
     //   this.transformValue = `translateX(${this.getCurrentTransformValue()}px)`;
     // }
}
