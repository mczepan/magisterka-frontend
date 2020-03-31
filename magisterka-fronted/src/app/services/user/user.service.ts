import {Injectable} from '@angular/core';
import {Team} from "../../common/types/team/team";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FavTeam} from "../../common/fav-team/fav-team";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/user';
  constructor(private httpClient: HttpClient) { }

  getFavTeams() {
    const favTeamsUrl = `${this.baseUrl}/teams`;

    return this.httpClient.get<Team[]>(favTeamsUrl);
  }

  remove(theTeamID: string) {
    const removeTeamUrl = `${this.baseUrl}/team/${theTeamID}`;

    return this.httpClient.delete(removeTeamUrl);
  }

  addFavTeam(theTeamID: string) {
    const addTeamUrl = `${this.baseUrl}/team/${theTeamID}`;
    return this.httpClient.post<any>(addTeamUrl,{});

  }

  getFavTeam(theTeamID: string) {
    const getFavTeamUrl = `${this.baseUrl}/team/${theTeamID}`;
    return this.httpClient.get<FavTeam>(getFavTeamUrl);
  }

  getFavTeamOnt(hasCountry: string, hasColor: string, hasShape: string, hasPopulation: string, hasChampion: string, hasStyle: string, hasValue: string) : Observable<Team[]>{
    const getFavTeamUrlOnt = `${this.baseUrl}/team/ontology`;
    let data = {
      "hasColors": hasColor,
      "hasShape": hasShape,
      "hasPopulation": hasPopulation,
      "hasChampion": hasChampion,
      "hasStyle": hasStyle,
      "hasValue": hasValue,
      "hasCountry": hasCountry,
    }
    let body = JSON.stringify(data);
    const config = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    return this.httpClient.post<GetTeamResponse>(getFavTeamUrlOnt,body, config).pipe(
      map(response => response.teams)
    );
  }
}

interface GetTeamResponse {
  teams: Team[];
}
