import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Team} from "../../common/types/team/team";
import {Player} from "../../common/types/player/player";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseUrl = 'http://localhost:8080/api/search';

  constructor(private httpClient: HttpClient) {
  }

  searchTeams(theKeyword: string): Observable<Team[]> {
    const searchUrl = `${this.baseUrl}/teams/${theKeyword}`;

    let username = 'javainuse'
    let password = 'password'
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});


    return this.httpClient.get<GetTeamResponse>(searchUrl, {headers}).pipe(
      map(response => response.teams)
    )
  }

  searchPlayers(theKeyword: string): Observable<Player[]> {
    const searchUrl = `${this.baseUrl}/players/${theKeyword}`;

    let username = 'javainuse'
    let password = 'password'
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});


    return this.httpClient.get<GetPlayersResponse>(searchUrl, {headers}).pipe(
      map(response => response.player)
    )
  }

  getPlayer(thePlayerId: string) {
    const searchUrl = `${this.baseUrl}/player/${thePlayerId}`;

    let username = 'javainuse'
    let password = 'password'
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});


    return this.httpClient.get<GetSinglePlayerResponse>(searchUrl, {headers}).pipe(
      map(response => response.players)
    )
  }

  getTeam(theTeamId: string) {
    const searchUrl = `${this.baseUrl}/team/${theTeamId}`;

    let username = 'javainuse'
    let password = 'password'
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + ':' + password)});

    return this.httpClient.get<GetTeamResponse>(searchUrl, {headers}).pipe(
      map(response => response.teams)
    )
  }
}

interface GetTeamResponse {
  teams: Team[];
}

interface GetPlayersResponse {
  player: Player[];
}

interface GetSinglePlayerResponse {
  players: Player[];
}


