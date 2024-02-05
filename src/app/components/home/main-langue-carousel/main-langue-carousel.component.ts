import { Component, Input, OnInit } from '@angular/core';
import { ImagesLang } from 'src/app/interfaces/interfaces';

@Component({
     selector: 'app-main-langue-carousel',
     templateUrl: './main-langue-carousel.component.html',
     styleUrls: ['./main-langue-carousel.component.scss'],
})
export class MainLangueCarouselComponent implements OnInit {
     @Input() imageLang!: ImagesLang[];
     imageLangDesktop!: any[];

     ngOnInit(): void {
          this.imageLangDesktop = this.splitArrayIntoChunks(this.imageLang, 4);
     }

     splitArrayIntoChunks(array: any[], chunkSize: number): any[] {
          const resultArray = [];
          for (let i = 0; i < array.length; i += chunkSize) {
               const chunk = array.slice(i, i + chunkSize);
               resultArray.push(chunk);
          }
          return resultArray;
     }
}
