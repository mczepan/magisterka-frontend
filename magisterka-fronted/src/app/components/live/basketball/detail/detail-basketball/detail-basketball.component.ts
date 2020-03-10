import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BaskteballService} from "../../../../../services/live/basketball/baskteball.service";
import {Boxscore} from "../../../../../common/live/basketball/detail/boxscore";

@Component({
  selector: 'app-detail-basketball',
  templateUrl: './detail-basketball.component.html',
  styleUrls: ['./detail-basketball.component.css']
})
export class DetailBasketballComponent implements OnInit {

  boxscore: Boxscore = new Boxscore();
  date: Date;
  constructor(private basketballService: BaskteballService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
        this.basketballDetails();
      }
    );
  }

  private basketballDetails() {
    const theDate: string = this.route.snapshot.paramMap.get('date');
    const theGameID: string = this.route.snapshot.paramMap.get('game-id');

    this.basketballService.getBasketballGameDetails(theGameID,theDate).subscribe(
      data => {
        this.boxscore = data;
      }
    )
  }
}
