import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  
  authUser(user:any){
    let UserArray=[];
    if(localStorage.getItem('Users')){
      UserArray=JSON.parse(localStorage.getItem('User') || '{}');
    }
    return UserArray.find((p:any)=>p.email===user.email && p.password===user.password);
  }


    //  isLoggedIn()
    //  {
    //    return !!localStorage.getItem('Users')
    //  }
}
