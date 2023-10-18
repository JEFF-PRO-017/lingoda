import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSubjectsComponent } from './main-subjects.component';

describe('MainSubjectsComponent', () => {
  let component: MainSubjectsComponent;
  let fixture: ComponentFixture<MainSubjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainSubjectsComponent]
    });
    fixture = TestBed.createComponent(MainSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
