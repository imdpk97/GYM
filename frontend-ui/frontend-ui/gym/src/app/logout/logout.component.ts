import { Component, OnInit } from '@angular/core';
import { VERSION } from '@angular/platform-browser';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  name:string="";
  constructor() { }

  ngOnInit(){
   this.onLogout();
  }

  onLogout()
  {
    localStorage.removeItem('User');
    console.log(localStorage.removeItem('User'))
  
  }
}
