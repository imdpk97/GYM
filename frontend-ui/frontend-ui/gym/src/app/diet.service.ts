import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Diet } from './diet';

@Injectable({
  providedIn: 'root'
})
export class DietService {


  
  baseUrl = 'http://localhost:8080/gym/dietPlan';

  getRowIndexMethod$: Observable<any>;
  private getRowIndexMethodSubject = new Subject<any>();
  
  constructor(private httpClient: HttpClient) {
    this.getRowIndexMethod$ = this.getRowIndexMethodSubject.asObservable();
  }

  addDietPlan(diet:Diet): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/addDietPlan`, diet);
  }

  getRowIndexMethod(data: any) {
    this.getRowIndexMethodSubject.next(data);
  }

  getAllDietPlans(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/all`);
  }

  getDietPlanById(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  deleteDietPlan(id: number): Observable<any> {
    console.log(id)
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }

  updateMember(diet: Diet): Observable<any> {
    return this.httpClient.put<Diet>(`${this.baseUrl}/update`, diet);
  }

}
