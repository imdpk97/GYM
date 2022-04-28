import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { GymplanService } from '../gymplan.service';
import { Plan } from '../plan';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})

export class RegisterUserComponent implements OnInit {
  user:User =new User();
  RegistrationDetails:FormGroup;
  name:any;
  email:any;
  height:any;
  weight:any;
  contact:any;
  password:any;
  age:any;
  role:any;
  joiningDate:any;
  plans:any;
  plan:any;
  selectedValue:any;
  constructor(private formBuilder : FormBuilder,private userService: UserService,
    private router:Router,private gymPlanService:GymplanService,private  dialogRef:  MatDialogRef<RegisterUserComponent>) {
    this.RegistrationDetails=new FormGroup({});
   }

  ngOnInit(){
    this.RegistrationDetails = this.formBuilder.group({
      name:['',[Validators.required,Validators.minLength(6)]],
      email:['',[Validators.required,Validators.email]],
      age:['',[Validators.required,Validators.pattern('^(1?[1-9]|[1-9][0-9]|[1][1-9][1-9]|100)$')
    ]],
      contact:['',[Validators.required,Validators.pattern("^[6-9]{1}[0-9]{9}$")]],
      height:['',[Validators.required]],
      weight:['',[Validators.required,Validators.pattern('^(1?[1-9]|[1-9][0-9]|[1][1-9][1-9]|250)$')]],
      joiningDate:['',[Validators.required]],
      plan:['',[Validators.required]]

  });
  this.getData()
  }

  getData()
  {
    this.gymPlanService.getAllPlans().subscribe(data => {  
      this.plans = data 
    })
  }

    
  clickMenuItem(plan:Plan){
    this.selectedValue=plan.name
}



  userRegister(){
    console.log('user object',this.user)
    this.userService.addMember(this.user).subscribe(data=>{
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
     
      }
      );



    
  }

  public  closeMe() {
    this.dialogRef.close();
}
}
