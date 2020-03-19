import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Football} from "../../../common/live/football/general/football";
import {League} from "../../../common/table/football/league";
import {FootballTable} from "../../../common/table/football/football-table";

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  private baseUrl = 'http://localhost:8080/api/live/football';
  private tableUrl = 'http://localhost:8080/api/sport/soccer';

  constructor(private httpClient: HttpClient) {
  }

  getFootballResultList(): Observable<Football[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response.teams.Match));
  }

  getFootballGameDetails(theGameId: number): Observable<Football> {
    const matchUrl = `${this.baseUrl}/${theGameId}`;

    return this.httpClient.get<GetResponseGameDetails>(matchUrl).pipe(
      map(response => response.teams.Match[0]));
  }

  getLeagues(theCountry: string): Observable<League[]> {
    const matchTableUrl = `${this.tableUrl}/leagues/${theCountry}`;

    return this.httpClient.get<GetLeaguesInCountry>(matchTableUrl).pipe(
      map(response => response.countrys));

  }

  getTeamsInLeague(theLeagueId: string): Observable<FootballTable[]> {
    const matchTableUrl = `${this.tableUrl}/table/${theLeagueId}`;

    return this.httpClient.get<GetTeamsInLeague>(matchTableUrl).pipe(
      map(response => response.table));
  }
}

interface GetResponse {
  teams: {
    Match: Football[]
  };
}

interface GetTeamsInLeague {
  table: FootballTable[]
}

interface GetLeaguesInCountry {
  countrys: League[]
}

interface GetResponseGameDetails {
  teams: {
    Match: Football
  };
}
