import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Basketball} from "../../../common/live/basketball/general/basketball";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Boxscore} from "../../../common/live/basketball/detail/boxscore";
import {Standings} from "../../../common/table/basketball/standings";
import {TeamBasketball} from "../../../common/table/basketball/basketball-teams/team-basketball";


@Injectable({
  providedIn: 'root'
})
export class BaskteballService {


  private baseUrl = 'http://localhost:8080/api/live/basketball';
  private baseUrlTable = 'http://localhost:8080/api/sport/league/table/nba';
  private baseUrlTeam = 'http://localhost:8080/api/sport/basketball/team';

  constructor(private httpClient: HttpClient) { }

  getBasketballResultList(): Observable<Basketball[]> {
    let username='javainuse'
    let password='password'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.httpClient.get<GetResponse>(this.baseUrl,{headers}).pipe(
      map(response => response.games)
    );
  }

  getBasketballGameDetails(theDate: string,theGameID:string): Observable<Boxscore> {
    const detailUrl = `${this.baseUrl}/${theDate}/${theGameID}`;
    let username='javainuse'
    let password='password'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<Boxscore>(detailUrl,{headers});
  }

  getBasketballStandings(): Observable<Standings> {
    let username='javainuse'
    let password='password'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.httpClient.get<Standings>(this.baseUrlTable,{headers});
  }

  getTeams() : Observable<TeamBasketball> {
    let username='javainuse'
    let password='password'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.httpClient.get<TeamBasketball>(this.baseUrlTeam,{headers});
  }
}

interface GetResponse {
  games: Basketball[];
}
