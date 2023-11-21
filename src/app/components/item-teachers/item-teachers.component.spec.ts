import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTeachersComponent } from './item-teachers.component';

describe('ItemTeachersComponent', () => {
  let component: ItemTeachersComponent;
  let fixture: ComponentFixture<ItemTeachersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemTeachersComponent]
    });
    fixture = TestBed.createComponent(ItemTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
