import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {Team} from "../../../common/types/team/team";
import {Router} from "@angular/router";

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: Team[];
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    this.getFavTeamList();
  }

  private getFavTeamList() {
    this.userService.getFavTeams().subscribe(
      data => {
        this.teams = data;
      }
    )
  }

  removeTeam(idTeam: string) {
    this.userService.remove(idTeam).subscribe()
  }
}
