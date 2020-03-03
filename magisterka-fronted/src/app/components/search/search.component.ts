import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  sportType = 'player';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  doSerach(value: string) {
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/search/${this.sportType}/${value}`);

  }
}
