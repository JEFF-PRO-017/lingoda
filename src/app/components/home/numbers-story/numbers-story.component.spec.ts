import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersStoryComponent } from './numbers-story.component';

describe('NumbersStoryComponent', () => {
  let component: NumbersStoryComponent;
  let fixture: ComponentFixture<NumbersStoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumbersStoryComponent]
    });
    fixture = TestBed.createComponent(NumbersStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
