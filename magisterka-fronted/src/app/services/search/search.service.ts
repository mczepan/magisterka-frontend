import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Team} from "../../common/types/team/team";
import {Player} from "../../common/types/player/player";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseUrl = 'http://localhost:8080/api/search'

  constructor(private httpClient: HttpClient) {
  }

  searchTeams(theKeyword: string): Observable<Team[]> {
    const searchUrl = `${this.baseUrl}/team/${theKeyword}`;

    console.log(searchUrl)
    return this.httpClient.get<GetTeamResponse>(searchUrl).pipe(
      map(response => response.teams)
    )
  }

  searchPlayers(theKeyword: string): Observable<Player[]> {
    const searchUrl = `${this.baseUrl}/player/${theKeyword}`;
    console.log(searchUrl)

    return this.httpClient.get<GetPlayerResponse>(searchUrl).pipe(
      map(response => response.player)
    )
  }
}

interface GetTeamResponse {
  teams: Team[];
}

interface GetPlayerResponse {
  player: Player[];
}
