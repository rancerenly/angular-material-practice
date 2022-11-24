import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  usersUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<IUser[]>(this.usersUrl);
  }
}
