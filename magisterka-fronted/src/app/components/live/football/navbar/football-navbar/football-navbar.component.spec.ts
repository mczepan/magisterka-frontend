import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballNavbarComponent } from './football-navbar.component';

describe('FootballNavbarComponent', () => {
  let component: FootballNavbarComponent;
  let fixture: ComponentFixture<FootballNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
