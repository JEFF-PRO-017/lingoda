import { Component, OnInit } from '@angular/core';
import { EventItem } from '../models/iEventIten-interfaces';

@Component({
     selector: 'app-home',
     templateUrl: './home.component.html',
     styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit {
     events!: EventItem[];

     responsiveOptions: any[] | undefined;
     products: any[]=[1,1,1,1,1]
value:number =3;

     constructor() {}
     ngOnInit() {
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

     
     // countries = [
     //      { name: 'Country 1', flag: 'assets/img/team-1.jpg' },
     //      { name: 'Country 2', flag: 'assets/img/team-1.jpg' },
     //      { name: 'Country 3', flag: 'flag3.jpg' },
     //      // Add more countries as needed
     //    ];
}
