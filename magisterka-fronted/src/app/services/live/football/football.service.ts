import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Basketball} from "../../../common/live/basketball/general/basketball";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Football} from "../../../common/live/football/general/football";

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  private baseUrl = 'http://localhost:8080/api/live/football';

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
}

interface GetResponse {
  teams: {
    Match: Football[]
  };
}

interface GetResponseGameDetails {
  teams: {
    Match: Football
  };
}
