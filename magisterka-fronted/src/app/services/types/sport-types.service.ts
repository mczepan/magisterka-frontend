import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {SportTypes} from '../../common/types/sport-types';

@Injectable({
  providedIn: 'root'
})
export class SportTypesService {

  private baseUrl = 'http://localhost:8080/api/sport/types';

  constructor(private httpClient: HttpClient) { }

  getSportTypesList(): Observable<SportTypes[]> {
    let username='javainuse'
    let password='password'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    return this.httpClient.get<GetResponse>(this.baseUrl,{headers}).pipe(
      map(response => response.sports)
    );
  }

  getSportType(theSportType: string): Observable<SportTypes> {
    let username='javainuse'
    let password='password'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });

    const sportTypeUrl = `${this.baseUrl}/${theSportType}`;
    return this.httpClient.get<SportTypes>(sportTypeUrl, {headers});
  }
}

interface GetResponse {
  sports: SportTypes[];

}
