import { Component, OnInit } from '@angular/core';
import { EventItem } from '../models/iEventIten-interfaces';
import { CityPrimeng, ImagesLang, StatNumber } from 'src/app/interfaces/interfaces';

@Component({
     selector: 'app-home',
     templateUrl: './home.component.html',
     styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
     imageLang: ImagesLang[] = [
          { code: 'gb', lang: 'English', number: 40 },
          { code: 'fr', lang: 'French', number: 32 },
          { code: 'es', lang: 'Spanish', number: 50 },
          { code: 'us', lang: 'Us English', number: 25 },
          { code: 'ar', lang: 'Arabe', number: 20 },
          { code: 'de', lang: 'Deutch', number: 18 },
          { code: 'it', lang: 'Italian', number: 18 },
          { code: 'jp', lang: 'Japanese', number: 36 },
     ];

     statNumber: StatNumber[] = [
          {
               src: '/assets/img/img-home/classe.svg',
               stat: '245 k',
               boby: 'Classes a year',
          },
          {
               src: '/assets/img/img-home/students.svg',
               stat: '245+k',
               boby: 'students taught',
          },
          {
               src: '/assets/img/img-home/teachers.svg',
               stat: '245+k',
               boby: 'professional teachers',
          },
     ];
}
