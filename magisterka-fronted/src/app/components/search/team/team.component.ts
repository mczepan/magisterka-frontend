import { Component, OnInit } from '@angular/core';
import {Team} from "../../../common/types/team/team";
import {SearchService} from "../../../services/search/search.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  team: Team[];
  constructor(private searchService: SearchService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getTeam();
    });
  }

  private getTeam() {
    const theTeamId: string = this.route.snapshot.paramMap.get('id');

    this.searchService.getTeam(theTeamId).subscribe(
      data => {
        this.team = data;
      }
    )
  }

}
