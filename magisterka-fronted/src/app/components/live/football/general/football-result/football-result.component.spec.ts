import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballResultComponent } from './football-result.component';

describe('FootballResultComponent', () => {
  let component: FootballResultComponent;
  let fixture: ComponentFixture<FootballResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
