import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurStudentsComponent } from './our-students.component';

describe('OurStudentsComponent', () => {
  let component: OurStudentsComponent;
  let fixture: ComponentFixture<OurStudentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurStudentsComponent]
    });
    fixture = TestBed.createComponent(OurStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
