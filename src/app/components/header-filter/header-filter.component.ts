import { Component, OnInit } from '@angular/core';

interface City {
     name: string;
     code: string;
}

@Component({
     selector: 'app-header-filter',
     templateUrl: './header-filter.component.html',
     styleUrls: ['./header-filter.component.scss'],
})
export class HeaderFilterComponent implements OnInit {
     cities!: City[];

     selectedCities!: City[];

     constructor() {}
     ngOnInit(): void {
          this.cities = [
               { name: 'New York', code: 'NY' },
               { name: 'Rome', code: 'RM' },
               { name: 'London', code: 'LDN' },
               { name: 'Istanbul', code: 'IST' },
               { name: 'Paris', code: 'PRS' },
          ];
     }

}
