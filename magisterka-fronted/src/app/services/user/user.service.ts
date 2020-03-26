import {Injectable} from '@angular/core';
import {Team} from "../../common/types/team/team";
import {HttpClient} from "@angular/common/http";

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

  remove(idTeam: string) {
    const removeTeamUrl = `${this.baseUrl}/team/${idTeam}`;

    return this.httpClient.delete(removeTeamUrl);
  }

  addFavTeam(idTeam: string) {
    const addTeamUrl = `${this.baseUrl}/team/${idTeam}`;
    return this.httpClient.post<any>(addTeamUrl,{});

  }
}
