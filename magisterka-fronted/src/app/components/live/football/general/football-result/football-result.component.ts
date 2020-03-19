import {Component, OnInit} from '@angular/core';
import {Football} from "../../../../../common/live/football/general/football";
import {Router} from "@angular/router";
import {FootballService} from "../../../../../services/live/football/football.service";

@Component({
  selector: 'app-football-result',
  templateUrl: './football-result.component.html',
  styleUrls: ['./football-result.component.css']
})
export class FootballResultComponent implements OnInit {

  footballResults: Football[] = [];

  constructor(private footballService: FootballService,
              private router: Router) { }

  ngOnInit(): void {
    this.footballResult();
  }

  footballResult() {
    this.footballService.getFootballResultList().subscribe(
      data => {
        this.footballResults = data;
      }
    )
  }

  goToGameDetails(currentId: number) {
    this.router.navigateByUrl(`live/soccer/details/${currentId}`);
  }
}
