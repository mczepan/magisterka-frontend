import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballTableComponent } from './basketball-table.component';

describe('BasketballTableComponent', () => {
  let component: BasketballTableComponent;
  let fixture: ComponentFixture<BasketballTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketballTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketballTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
