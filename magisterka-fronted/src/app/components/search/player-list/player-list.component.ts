import { Component, OnInit } from '@angular/core';
import {Team} from "../../../common/types/team/team";
import {SearchService} from "../../../services/search/search.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Player} from "../../../common/types/player/player";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players: Player[];
  constructor(private searchService: SearchService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getPlayerList();
    });
  }

  private getPlayerList() {
    const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

    this.searchService.searchPlayers(theKeyword).subscribe(
      data => {
        this.players = data;
      }
    )
  }

  getPlayerDetails(idPlayer: string) {
    this.router.navigateByUrl(`/search/player/${idPlayer}`);
  }
}
