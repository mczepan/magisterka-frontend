import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FootballDetailComponent } from './football-detail.component';

describe('FootballDetailComponent', () => {
  let component: FootballDetailComponent;
  let fixture: ComponentFixture<FootballDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FootballDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FootballDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
