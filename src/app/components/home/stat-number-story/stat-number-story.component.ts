import { Component, Input } from '@angular/core';

@Component({
     selector: 'app-stat-number-story',
     templateUrl: './stat-number-story.component.html',
     styleUrls: ['./stat-number-story.component.scss'],
})
export class StatNumberStoryComponent {
     @Input() src!: string;
     @Input() stat!: string;
     @Input() body!: string;
}
