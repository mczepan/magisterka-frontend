import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketballTeamsComponent } from './basketball-teams.component';

describe('BasketballTeamsComponent', () => {
  let component: BasketballTeamsComponent;
  let fixture: ComponentFixture<BasketballTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketballTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketballTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
