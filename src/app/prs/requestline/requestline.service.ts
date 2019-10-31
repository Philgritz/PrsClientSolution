import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requestline } from './requestline.class';
import { SystemService } from '../system/system.service';

const baseUrl = "http://localhost:52245/api/requestlines";

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  list(): Observable<Requestline[]> {
    return this.http.get(`${baseUrl}`) as Observable<Requestline[]>;
  }
  get(id: string): Observable<Requestline> {
    return this.http.get(`${baseUrl}/${id}`) as Observable<Requestline>;
  }
  create(requestline: Requestline): Observable<any> {  
    return this.http.post(`${baseUrl}`, requestline) as Observable<any>;
    
  }
  change(requestline: Requestline): Observable<any> { 
    return this.http.put(`${baseUrl}/${requestline.id}`, requestline) as Observable<any>; 
    
  }
  remove(requestline: Requestline): Observable<any> { 
    return this.http.delete(`${baseUrl}/${requestline.id}`) as Observable<any>; 
    
  }

  constructor(
    private syssvc: SystemService,
    private http: HttpClient
  ) { }
}
