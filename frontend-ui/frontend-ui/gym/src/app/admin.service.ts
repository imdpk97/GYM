import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl="http://localhost:8080/gym/admin";
  constructor(private httpClient:HttpClient) { }

  loginAdmin(admin:Admin):Observable<object>
  {
    return this.httpClient.post(`${this.baseUrl}/login`,admin);
  }


  getCount():Observable<any>
  {
    return this.httpClient.get(`http://localhost:8080/gym/dashboard/getCount`)
  }
}
