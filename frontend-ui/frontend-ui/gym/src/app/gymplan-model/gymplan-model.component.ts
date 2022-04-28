import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { GymplanService } from '../gymplan.service';
import { Plan } from '../plan';
import { UserService } from '../user.service';

@Component({
  selector: 'app-gymplan-model',
  templateUrl: './gymplan-model.component.html',
  styleUrls: ['./gymplan-model.component.css']
})
export class GymplanModelComponent implements OnInit {

  updatePlans:FormGroup;
  plan:Plan = new Plan();
  id:any;
  name:any;
  price:any;
  duration:any;
  row:any;
  constructor(private formBuilder : FormBuilder,private toastr:ToastrService,
    private  dialogRef:  MatDialogRef<GymplanModelComponent>,private gymPlanService:GymplanService,
    @Inject(MAT_DIALOG_DATA) public data:any,private userService:UserService) {
    this.updatePlans=new FormGroup({});
    this.row=data
   }
  ngOnInit(): void {
    this.updatePlans = this.formBuilder.group({
      id:['',[Validators.required]],
      name:['',[Validators.required]],
      price:['',[Validators.required]],
      duration:['',[Validators.required]],
     
  });


  
  this.userService.getRowIndexMethod$.subscribe((data:any) => {
    this.row = data[0]; 
  });
  

  }


  public submitData(value:any)
  {


    this.data=value;
    console.log(this.data)
    this.gymPlanService.updatePlan(this.data).subscribe(data=>{
      Swal.fire(
        "Plan is updated Successfully"
      )
     },error=>Swal.fire(
       "Plan is not updated"
     )
     );
  
   
  }

  public  closeMe() {
    this.dialogRef.close();
}

}
