import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCallActionComponent } from './main-call-action.component';

describe('MainCallActionComponent', () => {
  let component: MainCallActionComponent;
  let fixture: ComponentFixture<MainCallActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCallActionComponent]
    });
    fixture = TestBed.createComponent(MainCallActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
