import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { UserData } from './user-data';
import { of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'api/users';

  users$ = of(UserData.users);

  constructor(private http: HttpClient) {}
}
