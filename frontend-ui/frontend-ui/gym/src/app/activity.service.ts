import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Activity } from './activity';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {


  getRowIndexMethod$: Observable<any>;
  private getRowIndexMethodSubject = new Subject<any>();


  constructor(private httpClient:HttpClient) { 
    this.getRowIndexMethod$ = this.getRowIndexMethodSubject.asObservable();

  }
   baseUrl="http://localhost:8080/gym/activity"

  
  getAllActivity(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/all`);
  }
  addActivity(activity: Activity): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/addActivity`,activity);
   }

 getRowIndexMethod(data: any) {
  this.getRowIndexMethodSubject.next(data);
}


deleteActivity(id:number):Observable<any>
{
  return this.httpClient.delete(`${this.baseUrl}/delete/${id}`)
}


updateActivity(activity: Activity):Observable<any>
{
  
  return this.httpClient.put<User>(`${this.baseUrl}/update`, activity)
}
}
