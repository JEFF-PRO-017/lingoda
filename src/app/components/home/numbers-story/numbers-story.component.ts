import { Component, Input } from '@angular/core';
import { StatNumber } from 'src/app/interfaces/interfaces';

@Component({
     selector: 'app-numbers-story',
     templateUrl: './numbers-story.component.html',
     styleUrls: ['./numbers-story.component.scss'],
})
export class NumbersStoryComponent {
     @Input() statNumber!: StatNumber[];
}
