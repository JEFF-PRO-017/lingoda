import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatStarComponent } from './stat-star.component';

describe('StatStarComponent', () => {
  let component: StatStarComponent;
  let fixture: ComponentFixture<StatStarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatStarComponent]
    });
    fixture = TestBed.createComponent(StatStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
