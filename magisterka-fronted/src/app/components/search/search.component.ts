import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  sportType = 'players';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  doSerach(value: string) {
    this.router.navigateByUrl(`/search/${this.sportType}/${value}`);

  }
}
