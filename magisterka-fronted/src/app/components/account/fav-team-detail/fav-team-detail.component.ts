import { Component, OnInit } from '@angular/core';
import {FavTeam} from "../../../common/fav-team/fav-team";
import {UserService} from "../../../services/user/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-fav-team-detail',
  templateUrl: './fav-team-detail.component.html',
  styleUrls: ['./fav-team-detail.component.css']
})
export class FavTeamDetailComponent implements OnInit {

  favTeam: FavTeam = new FavTeam();
  constructor(private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
      this.getFavTeam();
      }
    );
  }

  private getFavTeam() {
    const theTeamID: string = this.route.snapshot.paramMap.get('id');

    this.userService.getFavTeam(theTeamID).subscribe(
      data => {
        this.favTeam = data;
      }
    )
  }
}
