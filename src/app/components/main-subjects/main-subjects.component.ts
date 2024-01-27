import { Component } from '@angular/core';

@Component({
     selector: 'app-main-subjects',
     templateUrl: './main-subjects.component.html',
     styleUrls: ['./main-subjects.component.scss'],
})
export class MainSubjectsComponent {
     images: any;
     responsiveOptions: any;

     constructor() {
          this.responsiveOptions = [
               {
                    breakpoint: '1024px',
                    numVisible: 1,
                    numScroll: 3,
               },
          ];
     }

     ngOnInit(): void {
          this.images = [
               { code: 'gb', lang: 'English', number: 40 },
               { code: 'fr', lang: 'French', number: 32 },
               { code: 'es', lang: 'Spanish', number: 50 },
               { code: 'us', lang: 'Us English', number: 25 },
               { code: 'ar', lang: 'Arabe', number: 20 },
               { code: 'de', lang: 'Deutch', number: 18 },
               { code: 'it', lang: 'Italian', number: 18 },
               { code: 'jp', lang: 'Japanese', number: 36 },
          ];
     }
}
