import { Component, Input } from '@angular/core';
import { ImagesLang } from 'src/app/interfaces/interfaces';

@Component({
     selector: 'app-header-home',
     templateUrl: './header-home.component.html',
     styleUrls: ['./header-home.component.scss'],
})
export class HeaderHomeComponent {
     @Input() images!: ImagesLang[];
}
