import { Component, OnInit } from '@angular/core';
import {BaskteballService} from "../../../../../services/live/basketball/baskteball.service";
import {Basketball} from "../../../../../common/live/basketball/general/basketball";

@Component({
  selector: 'app-basketball-result',
  templateUrl: './basketball-result-listV2.component.html',
  styleUrls: ['./basketball-result.component.css']
})
export class BasketballResultComponent implements OnInit {

  basketballResults: Basketball[];

  constructor(private basketballService: BaskteballService) { }

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

}
