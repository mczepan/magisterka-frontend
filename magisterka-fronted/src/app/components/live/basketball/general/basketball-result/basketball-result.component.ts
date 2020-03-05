import { Component, OnInit } from '@angular/core';
import {BaskteballService} from '../../../../../services/live/basketball/baskteball.service';
import {Basketball} from '../../../../../common/live/basketball/general/basketball';
import {Router} from "@angular/router";

@Component({
  selector: 'app-basketball-result',
  templateUrl: './basketball-result-listV2.component.html',
  styleUrls: ['./basketball-result.component.css']
})
export class BasketballResultComponent implements OnInit {

  basketballResults: Basketball[];

  constructor(private basketballService: BaskteballService,
              private router: Router) { }

  ngOnInit(): void {
    this.basketballResult();
  }

  basketballResult() {
    this.basketballService.getBasketballResultList().subscribe(
      data => {
        this.basketballResults = data;
      }
    )
  }

  goToGameDetails(gameId: string, date: string) {
    const url = `${gameId}/${date}`;
    this.router.navigate([`/live/basketball/`, gameId,date]);
  }
}
