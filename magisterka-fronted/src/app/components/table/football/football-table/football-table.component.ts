import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FootballService} from "../../../../services/live/football/football.service";
import {FootballTable} from "../../../../common/table/football/football-table";

@Component({
  selector: 'app-football-table',
  templateUrl: './football-table.component.html',
  styleUrls: ['./football-table.component.css']
})
export class FootballTableComponent implements OnInit {

  teamsInLeague: FootballTable[] = [];
  leagueName: string;

  constructor(private footballService: FootballService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getTeamsInLeague();
    });
  }

  private getTeamsInLeague() {
    const theLeagueId: string = this.route.snapshot.paramMap.get('id');

    this.leagueName = this.route.snapshot.paramMap.get('keyword');

    this.footballService.getTeamsInLeague(theLeagueId).subscribe(
      data => {
        this.teamsInLeague = data;
      }
    )
  }
}
