import { Component, OnInit } from '@angular/core';
import {Football} from "../../../../../common/live/football/general/football";
import {FootballService} from "../../../../../services/live/football/football.service";
import {ActivatedRoute} from "@angular/router";
import {Team} from "../../../../../common/types/team/team";

@Component({
  selector: 'app-football-detail',
  templateUrl: './football-detail.component.html',
  styleUrls: ['./football-detail.component.css']
})
export class FootballDetailComponent implements OnInit {

  match: Football = new Football();
  constructor(private footballService: FootballService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.match.homeTeamDetail = new Team();
    this.match.awayTeamDetail = new Team();
    this.route.paramMap.subscribe(() => {
      this.handleFootballGame()
    });
  }

  private handleFootballGame() {
    const theGameId: number = +this.route.snapshot.paramMap.get('id');

    this.footballService.getFootballGameDetails(theGameId).subscribe(
      data => {
        this.match = data;
      }
    )
  }
}
