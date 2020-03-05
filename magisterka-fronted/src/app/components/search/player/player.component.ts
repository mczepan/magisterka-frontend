import { Component, OnInit } from '@angular/core';
import {Player} from "../../../common/types/player/player";
import {SearchService} from "../../../services/search/search.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  player: Player[];
  constructor(private searchService: SearchService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getPlayer();
    });
  }

  private getPlayer() {
    const thePlayerId: string = this.route.snapshot.paramMap.get('id');

    this.searchService.getPlayer(thePlayerId).subscribe(
      data => {
        this.player = data;
      }
    )
  }
}
