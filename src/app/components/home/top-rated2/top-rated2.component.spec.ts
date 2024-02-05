import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRated2Component } from './top-rated2.component';

describe('TopRated2Component', () => {
  let component: TopRated2Component;
  let fixture: ComponentFixture<TopRated2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopRated2Component]
    });
    fixture = TestBed.createComponent(TopRated2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
