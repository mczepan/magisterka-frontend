import {Component, OnInit} from '@angular/core';
import {SportTypes} from "./common/types/sport-types";
import {SportTypesService} from "./services/types/sport-types.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ang-test';
  sportTypes: SportTypes[];

  constructor(private sportTypesService: SportTypesService) {
  }

  ngOnInit(): void {
    this.sportTypesList();
  }

  sportTypesList() {
    this.sportTypesService.getSportTypesList().subscribe(
      data => {
        this.sportTypes = data;
      }
    )
  }

}
