import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTeamOntComponent } from './add-team-ont.component';

describe('AddTeamOntComponent', () => {
  let component: AddTeamOntComponent;
  let fixture: ComponentFixture<AddTeamOntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTeamOntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTeamOntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
