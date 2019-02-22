import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';
const baseUrl = "http://localhost:3000";
const headers = new HttpHeaders();
@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private http: HttpClient) { }

  
  getUser(id: string): Observable<User[]>{
    return this.http.get(`${baseUrl}/users?id=${id}`).pipe(
      map((data: User[]) => {
          return data
      })
    )
  }

  getUsers(): Observable<User[]>{
    return this.http.get(`${baseUrl}/users`).pipe(
      map((data: User[]) => {
          return data
      })
    )
  }

  postUser(user: User): Observable<User>{
    return this.http.post(`${baseUrl}/users`, user , {headers}).pipe(
      map((data: User) => {
        return data
      })
    )
  }

  deleteUser(id: string){
    return this.http.delete(`${baseUrl}/users/${id}`)
  }

  editUser(user: User): Observable<User>{
    return this.http.put(`${baseUrl}/users/${user.id}`, user).pipe(
      map((data: User)=>{
        return data
      })
    )
  }
}
