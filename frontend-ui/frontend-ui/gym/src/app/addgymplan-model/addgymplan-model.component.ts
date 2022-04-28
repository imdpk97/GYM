
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { GymplanService } from '../gymplan.service';
import { Plan } from '../plan';

@Component({
  selector: 'app-addgymplan-model',
  templateUrl: './addgymplan-model.component.html',
  styleUrls: ['./addgymplan-model.component.css']
})
export class AddgymplanModelComponent implements OnInit {

  Plans:FormGroup;
  plan:Plan=new Plan();
  id:any;
  name:any;
  price:any;
  duration:any;
  data:any;



  constructor(private formBuilder : FormBuilder,private toastr:ToastrService,
    private  dialogRef:  MatDialogRef<AddgymplanModelComponent>,private gymPlanService:GymplanService) {
    this.Plans=new FormGroup({});
   }
  ngOnInit(): void {
    this.Plans = this.formBuilder.group({
      id:['',[Validators.required]],
      name:['',[Validators.required]],
      price:['',[Validators.required]],
      duration:['',[Validators.required]],
     
  });

  }


  public submitData()
  {
    this.gymPlanService.addPlan(this.plan).subscribe(data=>{
      console.log(this.plan)
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
