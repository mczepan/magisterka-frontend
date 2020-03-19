import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-football-navbar',
  templateUrl: './football-navbar.component.html',
  styleUrls: ['./football-navbar.component.css']
})
export class FootballNavbarComponent implements OnInit {

  countries = ['Austria',
    'Belgium',
    'Croatia',
    'Czechia',
    'Denmark',
    'England',
    'France',
    'Germany',
    'Greece',
    'Holland',
    'Hungary',
    'Italy',
    'Norway',
    'Poland',
    'Portugal',
    'Romania',
    'Russia',
    'Serbia',
    'Slovakia',
    'Slovenia',
    'Spain',
    'Sweden',
    'Switzerland',
    'Turkey',
    'Ukraine'
  ]
  constructor() { }

  ngOnInit(): void {
  }
}
