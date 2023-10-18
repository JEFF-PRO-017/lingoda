import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTeachersComponent } from './main-teachers.component';

describe('MainTeachersComponent', () => {
  let component: MainTeachersComponent;
  let fixture: ComponentFixture<MainTeachersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainTeachersComponent]
    });
    fixture = TestBed.createComponent(MainTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
