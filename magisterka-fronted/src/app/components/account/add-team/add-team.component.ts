import { Component, OnInit } from '@angular/core';
import {Team} from "../../../common/types/team/team";
import {ActivatedRoute, Router} from "@angular/router";
import {SearchService} from "../../../services/search/search.service";
import {UserService} from "../../../services/user/user.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  displayResult: boolean;
  teams: Team[] = [];
  constructor(private searchService: SearchService,
              private userService: UserService,
              private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.displayResult = false;
  }

  findTeam(value: string) {
    this.displayResult = true;

    const theKeyword: string = value

    this.searchService.searchTeams(theKeyword).subscribe(
      data => {
        this.teams = data;
      }
    )
  }

  addTeam(idTeam: string) {
    this.userService.addFavTeam(idTeam).subscribe(
      data => {
        this.toastrService.success("Team has been added to favourite", "Success!");
      },
      error => {
        this.toastrService.warning("You have added this team earlier", "Warning!");
      }
    );
  }
}
