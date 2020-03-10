import { Component, OnInit } from '@angular/core';
import {Standings} from "../../../../common/table/basketball/standings";
import {BaskteballService} from "../../../../services/live/basketball/baskteball.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-basketball-table',
  templateUrl: './basketball-table.component.html',
  styleUrls: ['./basketball-table.component.css']
})
export class BasketballTableComponent implements OnInit {

  standings: Standings = new Standings();
  constructor(private basketballService: BaskteballService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.basketballStandings();
  }

  private basketballStandings() {
    this.basketballService.getBasketballStandings().subscribe(
      data => {
        this.standings = data;
      }
    )
  }
}
