import {Injectable} from '@angular/core';
import {Team} from "../../common/types/team/team";
import {HttpClient} from "@angular/common/http";
import {FavTeam} from "../../common/fav-team/fav-team";

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
}
