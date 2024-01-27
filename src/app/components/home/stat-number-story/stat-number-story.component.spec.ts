import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatNumberStoryComponent } from './stat-number-story.component';

describe('StatNumberStoryComponent', () => {
  let component: StatNumberStoryComponent;
  let fixture: ComponentFixture<StatNumberStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatNumberStoryComponent]
    });
    fixture = TestBed.createComponent(StatNumberStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
