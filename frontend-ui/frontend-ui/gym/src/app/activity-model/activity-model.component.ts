import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Activity } from '../activity';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity-model',
  templateUrl: './activity-model.component.html',
  styleUrls: ['./activity-model.component.css']
})
export class ActivityModelComponent implements OnInit {
  activity:Activity = new Activity();
  id:any;
  day:any;
  workout:any;
  row:any;
  updateDetails:FormGroup;
  constructor(private formBuilder : FormBuilder,private  dialogRef:  MatDialogRef<ActivityModelComponent>,
    private activityService:ActivityService,@Inject(MAT_DIALOG_DATA) public data:any) {
    this.updateDetails=new FormGroup({});
   }

  ngOnInit(){
    this.updateDetails = this.formBuilder.group({
      id:['',[Validators.required]],
      day:['',[Validators.required]],
      workout:['',[Validators.required]],
    });
  
  
  this.activityService.getRowIndexMethod$.subscribe((data:any) => {
    this.row = data[0]; 
    console.log('update',this.row)
  });
  
  }

  public updateData(value:any)
  {
    this.data=value;
    this.activityService.updateActivity(this.data).subscribe(data=>{
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



}
