import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballResultComponent } from './basketball-result.component';

describe('BasketballResultComponent', () => {
  let component: BasketballResultComponent;
  let fixture: ComponentFixture<BasketballResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketballResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketballResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
