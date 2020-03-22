import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

export class User {
  constructor(
    public status: string,
  ) {
  }

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) {
  }

  authenticate(username, password) {
    return this.httpClient.post<any>('http://localhost:8080/api/login/authenticate',{username,password}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username',username);
          sessionStorage.setItem('token', userData.token);
          return userData;
        }
      )

    );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}
