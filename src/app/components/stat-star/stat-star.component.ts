import { Component, Input, OnInit } from '@angular/core';

@Component({
     selector: 'app-stat-star',
     templateUrl: './stat-star.component.html',
     styleUrls: ['./stat-star.component.scss'],
})
export class StatStarComponent implements OnInit {
     @Input() starGood!: number;
     starEmpty: number[] = [0, 0, 0, 0, 0, 0];

     ngOnInit(): void {
          this.onStar(5);
     }

     onStar(note: number) {
          if (note <= 6) {
               while (note > 0) {
                    note--;
                    this.starEmpty[note] = 1;
               }
          }
     }
}
