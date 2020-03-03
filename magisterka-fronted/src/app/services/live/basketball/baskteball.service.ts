import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Basketball} from "../../../common/live/basketball/general/basketball";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class BaskteballService {

  private baseUrl = 'http://localhost:8080/api/live/basketball';

  constructor(private httpClient: HttpClient) { }

  getBasketballResultList(): Observable<Basketball[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response.games)
    );
  }
}

interface GetResponse {
  games: Basketball[];
}
