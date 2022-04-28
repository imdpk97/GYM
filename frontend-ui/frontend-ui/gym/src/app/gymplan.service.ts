import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plan } from './plan';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GymplanService {


  baseUrl="http://localhost:8080/gym/plan"
  constructor(private httpClient:HttpClient) { }
   
  getAllPlans(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/all`);
  }

  getPlanById(id:number):Observable<any>
  {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  addPlan(plan: Plan): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/addPlan`,plan);
   }

  deletePlan(id:number):Observable<any>
  {
  return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
   }

  updatePlan(plan:Plan):Observable<any>
  {
  return this.httpClient.put<User>(`${this.baseUrl}/update`, plan)
  }

}
