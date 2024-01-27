import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeTeacherComponent } from './become-teacher.component';

describe('BecomeTeacherComponent', () => {
  let component: BecomeTeacherComponent;
  let fixture: ComponentFixture<BecomeTeacherComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BecomeTeacherComponent]
    });
    fixture = TestBed.createComponent(BecomeTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
