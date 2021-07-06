import { Injectable } from '@angular/core';
import { throwError, Observable, from, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { catchError, mergeMap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users';
  private flatUsersUrl = 'api/flatUsers';

  private flatUsers$: Observable<User[]> = this.http
    .get<User[]>(this.flatUsersUrl)
    .pipe(catchError(this.handleError));

  usersInDetail$ = this.flatUsers$.pipe(
    mergeMap(userList =>
      from(userList).pipe(
        mergeMap(userItem =>
          this.http.get<User>(`${this.usersUrl}/${userItem.id}`)
        )
      )
    ),
    toArray()
  );
  constructor(private http: HttpClient) {}

  private handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
