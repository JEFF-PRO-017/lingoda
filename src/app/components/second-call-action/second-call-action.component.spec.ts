import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondCallActionComponent } from './second-call-action.component';

describe('SecondCallActionComponent', () => {
  let component: SecondCallActionComponent;
  let fixture: ComponentFixture<SecondCallActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecondCallActionComponent]
    });
    fixture = TestBed.createComponent(SecondCallActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
