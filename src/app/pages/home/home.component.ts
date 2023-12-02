import { Component, OnInit } from '@angular/core';
import { EventItem } from '../models/iEventIten-interfaces';
import { CityPrimeng } from 'src/app/interfaces/interfaces';

@Component({
     selector: 'app-home',
     templateUrl: './home.component.html',
     styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
     events!: EventItem[];

     responsiveOptions: any[] | undefined;
     products: any[] = [1, 1, 1, 1, 1];
     value: number = 3;

     cities!: CityPrimeng[];

     selectedCities!: CityPrimeng[];
     
     ngOnInit() {

          this.cities = [
               {name: 'New York', code: 'NY'},
               {name: 'Rome', code: 'RM'},
               {name: 'London', code: 'LDN'},
               {name: 'Istanbul', code: 'IST'},
               {name: 'Paris', code: 'PRS'}
           ];
          this.events = [
               { status: 'Flexible Scheduling', icon: 'fa-solid fa-calendar-days', text: 'Book and attend classes on your schedule' },
               { status: 'Pay as you go', icon: 'fa-solid fa-comments-dollar', text: 'No contracts - buy lessons only' },
               { status: 'Lessons made for you', icon: 'fa-solid fa-person-chalkboard', text: 'Customize lessons for your specific needs' },
               { status: 'Outstanding tutors', icon: 'fa-solid fa-people-robbery', text: 'Choose from highly qualified tutors around the globe' },
          ];
          this.responsiveOptions = [
               {
                    breakpoint: '1199px',
                    numVisible: 1,
                    numScroll: 1,
               },
               {
                    breakpoint: '991px',
                    numVisible: 2,
                    numScroll: 1,
               },
               {
                    breakpoint: '767px',
                    numVisible: 1,
                    numScroll: 1,
               },
          ];
     }
}
