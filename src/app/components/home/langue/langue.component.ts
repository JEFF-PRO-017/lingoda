import { Component, Input } from '@angular/core';
import { ImagesLang } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-langue',
  templateUrl: './langue.component.html',
  styleUrls: ['./langue.component.scss']
})
export class LangueComponent {

  @Input() imgesLang!:ImagesLang
}
