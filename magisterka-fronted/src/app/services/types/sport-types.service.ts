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


    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response.sports)
    );
  }

  getSportType(theSportType: string): Observable<SportTypes> {


    const sportTypeUrl = `${this.baseUrl}/${theSportType}`;
    return this.httpClient.get<SportTypes>(sportTypeUrl, );
  }
}

interface GetResponse {
  sports: SportTypes[];

}
