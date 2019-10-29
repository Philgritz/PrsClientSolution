import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class';

const baseUrl = "http://localhost:52245/api/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //returns user or instance or null.  then store user in system service --> 
  //setUser(user.User) {this._loggedInUser = user;}
  //after call need to subscribe to results

  login(username: string, password: string): Observable<User> | Observable<null> {
    return this.http.get(`${baseUrl}/${username}/${password}`) as Observable<User>;
  }

  list(): Observable<User[]> {
    return this.http.get(`${baseUrl}`) as Observable<User[]>;
  }
  get(id: string): Observable<User> {
    return this.http.get(`${baseUrl}/${id}`) as Observable<User>;
  }
  create(user: User): Observable<any> {  //returns any type
    return this.http.post(`${baseUrl}`, user) as Observable<any>; //pass in user instance as 2nd param
    
  }
  change(user: User): Observable<any> { 
    return this.http.put(`${baseUrl}/${user.id}`, user) as Observable<any>; //put id on url and pass in user in body
    
  }
  remove(user: User): Observable<any> { 
    return this.http.delete(`${baseUrl}/${user.id}`) as Observable<any>; 
    
  }

  constructor(private http: HttpClient) { }
}
