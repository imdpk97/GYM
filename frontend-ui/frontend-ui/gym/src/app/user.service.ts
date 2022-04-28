import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  baseUrl = 'http://localhost:8080/gym/member';

  myMethod$: Observable<any>;
  getRowIndexMethod$: Observable<any>;

  private myMethodSubject = new Subject<any>();
  private getRowIndexMethodSubject = new Subject<any>();
  constructor(private httpClient: HttpClient) {
    this.myMethod$ = this.myMethodSubject.asObservable();
    this.getRowIndexMethod$ = this.getRowIndexMethodSubject.asObservable();
  }

  addMember(user: User): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/addMember`, user);
  }

  getRowIndexMethod(data: any) {
    this.getRowIndexMethodSubject.next(data);
  }

  myMethod(data: any) {
    this.myMethodSubject.next(data);
  }

  getAllMember(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/all`);
  }

  getMemberById(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  deleteMember(id: number): Observable<any> {
    console.log(id)
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }

  updateMember(user: User): Observable<any> {
    return this.httpClient.put<User>(`${this.baseUrl}/update`, user);
  }

  gettoken() {
    return !!localStorage.getItem('SeesionUser');
  }
}
