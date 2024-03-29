import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from './request.class';
import { SystemService } from '../system/system.service';

const baseUrl = "http://localhost:52245/api/requests";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  refresh(id: string){}


  // getbystatusandid(userid: number, status: string): Observable<Request[]> {
  //   return this.http.get(`${baseUrl}/${userid}/${status}`) as Observable<any>;
  // }

  setreview(id: string): Observable<Request> | Observable<null> {
    return this.http.put(`${baseUrl}/review/${id}`, null) as Observable<Request>;
  }

  setapprove(id: string): Observable<Request> | Observable<null> {
    return this.http.put(`${baseUrl}/approved/${id}`, null) as Observable<Request>;
  }

  setreject(id: string): Observable<Request> | Observable<null> {
    return this.http.put(`${baseUrl}/rejected/${id}`, null) as Observable<Request>;
  }


  list(): Observable<Request[]> {
    return this.http.get(`${baseUrl}`) as Observable<Request[]>;
  }
  get(id: string): Observable<Request> {
    return this.http.get(`${baseUrl}/${id}`) as Observable<Request>;
  }
  create(request: Request): Observable<any> {  //returns any type
    return this.http.post(`${baseUrl}`, request) as Observable<any>;
    
  }
  change(request: Request): Observable<any> { 
    return this.http.put(`${baseUrl}/${request.id}`, request) as Observable<any>; //put id on url and pass in user in body
    
  }
  remove(request: Request): Observable<any> { 
    return this.http.delete(`${baseUrl}/${request.id}`) as Observable<any>; 
    
  }
  // reviews(user: User): Observable<Request> {

  // }
  // approve(request: Request): Observable<any> {
    
  // }
  reject(request: Request): Observable<Request[]> {
    return this.http.put(`${baseUrl}/reject/${request.id}`, request) as Observable<any>;
  }

  constructor(
    private syssvc: SystemService,
    private http: HttpClient
    ) {
//this.baseUrl = `${syssvc.baseUrl/api/requests}`;
     }
}
