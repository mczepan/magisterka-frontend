import { Component, OnInit } from '@angular/core';
import {TeamBasketball} from "../../../../common/table/basketball/basketball-teams/team-basketball";
import {BaskteballService} from "../../../../services/live/basketball/baskteball.service";

@Component({
  selector: 'app-basketball-teams',
  templateUrl: './basketball-teams.component.html',
  styleUrls: ['./basketball-teams.component.css']
})
export class BasketballTeamsComponent implements OnInit {

  teamsBasketball: TeamBasketball = new TeamBasketball();
  constructor(private basketballService: BaskteballService) { }

  ngOnInit(): void {
    this.basketballTeams();
  }

  private basketballTeams() {
    this.basketballService.getTeams().subscribe(
      data => {
        this.teamsBasketball = data;
      }
    )
  }

}
