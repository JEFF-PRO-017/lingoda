import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLangueCarouselComponent } from './main-langue-carousel.component';

describe('MainLangueCarouselComponent', () => {
  let component: MainLangueCarouselComponent;
  let fixture: ComponentFixture<MainLangueCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainLangueCarouselComponent]
    });
    fixture = TestBed.createComponent(MainLangueCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
