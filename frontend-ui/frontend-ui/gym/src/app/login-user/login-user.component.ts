import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  admin:Admin = new Admin();
  data=null;
  constructor(private adminService:AdminService,private router: Router,
    private authService:AuthServiceService) { }
  ngOnInit(): void {
  }

  userLogin()
  {
    console.log(this.admin)
    this.adminService.loginAdmin(this.admin).subscribe(data=>
      {


      var response=Object.values(data);
      if(!response[1]){
        Swal.fire(
          response[0],
          // 'success'
        )
      }
      else{
        Swal.fire(
          response[0],
          // 'error'
        )
      }
     
       if(!response[1]){
        localStorage.setItem('User',JSON.stringify(data));
        console.log(  localStorage.getItem('User'));
       this.router.navigateByUrl('/nav')
       }
       else{
          (<HTMLFormElement>document.getElementById("login")).reset();
        
       }

      }
      // ,error=>alert("sorry please enter correct id and password")
      )
  }

}


