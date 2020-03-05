import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBasketballComponent } from './detail-basketball.component';

describe('DetailBasketballComponent', () => {
  let component: DetailBasketballComponent;
  let fixture: ComponentFixture<DetailBasketballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBasketballComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBasketballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
