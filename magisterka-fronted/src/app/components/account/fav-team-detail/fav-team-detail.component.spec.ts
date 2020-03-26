import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavTeamDetailComponent } from './fav-team-detail.component';

describe('FavTeamDetailComponent', () => {
  let component: FavTeamDetailComponent;
  let fixture: ComponentFixture<FavTeamDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavTeamDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavTeamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
