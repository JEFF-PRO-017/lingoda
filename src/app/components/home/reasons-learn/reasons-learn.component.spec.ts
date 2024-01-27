import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonsLearnComponent } from './reasons-learn.component';

describe('ReasonsLearnComponent', () => {
  let component: ReasonsLearnComponent;
  let fixture: ComponentFixture<ReasonsLearnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReasonsLearnComponent]
    });
    fixture = TestBed.createComponent(ReasonsLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
