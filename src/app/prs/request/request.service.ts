import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from './request.class';

const baseUrl = "http://localhost:52245/api/requests";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  list(): Observable<Request[]> {
    return this.http.get(`${baseUrl}`) as Observable<Request[]>;
  }
  get(id: string): Observable<Request> {
    return this.http.get(`${baseUrl}/${id}`) as Observable<Request>;
  }
  create(product: Request): Observable<any> {  //returns any type
    return this.http.post(`${baseUrl}`, product) as Observable<any>;
    
  }
  change(product: Request): Observable<any> { 
    return this.http.put(`${baseUrl}/${product.id}`, product) as Observable<any>; //put id on url and pass in user in body
    
  }
  remove(product: Request): Observable<any> { 
    return this.http.delete(`${baseUrl}/${product.id}`) as Observable<any>; 
    
  }

  constructor(private http: HttpClient) { }
}
