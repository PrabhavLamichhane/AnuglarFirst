import { Injectable } from '@angular/core';
import { Person, MoviesResponse } from '../models/person';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  userLoggedInSource = new BehaviorSubject(false);
  userLoggedInObs = this.userLoggedInSource.asObservable();

  constructor(private httpClient: HttpClient) {
    if (localStorage.getItem('token')) {
      this.userLoggedInSource.next(true);
    }
    else {
      this.userLoggedInSource.next(false);
    }
  }

  getPersons(): Observable<Array<Person>> {

    let u = "https://localhost:44356/api/main/getpersons";

    // it needs token
    return this.httpClient.get<any>(u)
      .pipe(map(m => {
        return m.data;
      }));
    // const persons: Person[] = [];
    // persons.push(new Person("Ramesh", 22, "Male"));
    // persons.push(new Person("Rama", 10, "Feale"));
    // persons.push(new Person("Dinesh", 28, "Male"));
    // return of(persons);
  }

  verifyUser(username: string, password: string): Observable<Boolean> {
    let u = "https://localhost:44356/api/main/validateuser";
    return this.httpClient.post<any>(u, { Login: username, Password: password })
      .pipe(
        map(m => {
          if (m && m.success && m.token) {
            localStorage.setItem('token', m.token);
            localStorage.setItem('name', m.name);
            this.userLoggedInSource.next(true);
            return true;
          }
          else {
            return false;
          }
        }));
    // if (username == "admin" && password == "admin")
    //   return of(true);

    // return of(false);
  }

  getName(): any {
    return localStorage.getItem('name');
  }

  logout() {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    this.userLoggedInSource.next(false);
  }

  getMovies(term: string): Observable<MoviesResponse> {
    let url = "https://www.omdbapi.com/?apikey=8ac04f1d&s=" + term;
    return this.httpClient.get<MoviesResponse>(url);
  }

  isAuthenticated(): boolean {
    // also validate the token
    if (localStorage.getItem('token'))
      return true;
    return false;
  }
}
