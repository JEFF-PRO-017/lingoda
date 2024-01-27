import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRatedTeachersComponent } from './top-rated-teachers.component';

describe('TopRatedTeachersComponent', () => {
  let component: TopRatedTeachersComponent;
  let fixture: ComponentFixture<TopRatedTeachersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopRatedTeachersComponent]
    });
    fixture = TestBed.createComponent(TopRatedTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
