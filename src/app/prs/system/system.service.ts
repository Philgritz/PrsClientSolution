import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../user/user.class';
import { Router } from '@angular/router';

const baseUrl = "http://localhost:52245/api/users";



@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedinuser: User = null;
  user: User;

  checkLogin(user: User): void {
    if(this.loggedinuser == null)
    this.router.navigateByUrl('/login');
  }

  
  
  setUser(user: User)  {
    this.loggedinuser = user; console.log("logged in setUser Working", this.loggedinuser)
  }
  
  getUser(): User {
    return this.loggedinuser; 
  }






  constructor(
    private router: Router,
    private http: HttpClient) { }

  //in ngOninit do a GetUser from SS.   
}
