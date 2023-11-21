import { Component, OnInit } from '@angular/core';

@Component({
     selector: 'app-all-teacher',
     templateUrl: './all-teacher.component.html',
     styleUrls: ['./all-teacher.component.scss'],
})
export class AllTeacherComponent implements OnInit {
     ishidden: boolean=true

     onIsHidden() {
          this.ishidden ? (this.ishidden = false) : (this.ishidden = true);
     }
     ngOnInit(): void {}
}
