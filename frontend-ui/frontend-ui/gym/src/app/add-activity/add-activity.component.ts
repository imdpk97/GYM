import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.component.html',
  styleUrls: ['./add-activity.component.css']
})
export class AddActivityComponent implements OnInit {

  
  Activity:FormGroup;
  activity:Activity=new Activity();


  workout:any;
  day:any;
  data:any;



  constructor(private formBuilder : FormBuilder,
    private  dialogRef:  MatDialogRef<AddActivityComponent>,private activityService:ActivityService) {
    this.Activity=new FormGroup({});
   }
  ngOnInit(): void {
    this.Activity = this.formBuilder.group({
      workout:['',[Validators.required]],
      day:['',[Validators.required]],
     
  });

  }


  public submitData()
  {
    this.activityService.addActivity(this.activity).subscribe(data=>{
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
