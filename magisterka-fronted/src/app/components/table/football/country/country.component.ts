import {Component, OnInit} from '@angular/core';
import {FootballService} from "../../../../services/live/football/football.service";
import {ActivatedRoute} from "@angular/router";
import {League} from "../../../../common/table/football/league";

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  leagues: League[] = [];
  constructor(private footballService: FootballService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.leaguesInCountry();
  }


  private leaguesInCountry() {
    const theCountry: string = this.route.snapshot.paramMap.get('country');
    this.footballService.getLeagues(theCountry).subscribe(
      data => {
        this.leagues = data;
      }
    )
  }
}
