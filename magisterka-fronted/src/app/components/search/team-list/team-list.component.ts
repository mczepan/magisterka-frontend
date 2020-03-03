import { Component, OnInit } from '@angular/core';
import {SearchService} from "../../../services/search/search.service";
import {ActivatedRoute} from "@angular/router";
import {Team} from "../../../common/types/team/team";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: Team[];
  constructor(private searchService: SearchService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getTeamList();
    });
  }

  private getTeamList() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    this.searchService.searchTeams(theKeyword).subscribe(
      data => {
        this.teams = data;
      }
    )
  }
}
