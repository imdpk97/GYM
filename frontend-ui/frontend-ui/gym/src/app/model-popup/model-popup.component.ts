import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { GymplanService } from '../gymplan.service';

import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-model-popup',
  templateUrl: './model-popup.component.html',
  styleUrls: ['./model-popup.component.css']
})
export class ModelPopupComponent implements OnInit {
  user:User =new User();
  name:any;
  email:any;
  height:any;
  weight:any;
  contact:any;
  password:any;
  age:any;
  role:any;
  id:any;
  msg:any;
  rowData:any;
  row:any;
  plans:any;
  index:any;
  joiningDate:any;
  updateDetails:FormGroup;
  constructor(private formBuilder : FormBuilder,private  dialogRef:  MatDialogRef<ModelPopupComponent>,
    private userService: UserService,private gymPlanService:GymplanService,private toastr:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data:any) {


      
    this.updateDetails=new FormGroup({});
    
    // this.row=data
   }

  ngOnInit(){
    
    this.updateDetails = this.formBuilder.group({
      id:['',[Validators.required]],
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
  this.getData();
  
  this.userService.getRowIndexMethod$.subscribe((data:any) => {
    this.row = data[0]; 
    console.log('user update object',this.row)
  });
  
  }

  public updateData(value:any)
  {
    this.data=value;
    this.userService.updateMember(this.data).subscribe(data=>{
      Swal.fire(
        "member is updated Successfully"
      )
     },error=>Swal.fire(
       "member is not updated"
     )
     );
  
  }

  public  closeMe() {
    this.dialogRef.close();
}

getData()
  {
    this.gymPlanService.getAllPlans().subscribe(data => {  
      this.plans = data 
      // console.log('plans',this.plans)
    })
  }


}


