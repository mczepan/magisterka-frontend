import { Component, OnInit } from '@angular/core';
import {SportTypes} from "../../../common/types/sport-types";
import {SportTypesService} from "../../../services/types/sport-types.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-sport-types',
  templateUrl: './sport-types.component.html',
  styleUrls: ['./sport-types.component.css']
})
export class SportTypesComponent implements OnInit {

  sportType: SportTypes = new SportTypes();

  constructor(private sportTypesService: SportTypesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
      this.sportTypesList();
      }
    );
  }

  sportTypesList() {
    const theSportType: string = this.route.snapshot.paramMap.get('sport');
    this.sportTypesService.getSportType(theSportType).subscribe(
      data => {
        this.sportType = data;
      }
    )
  }

}
