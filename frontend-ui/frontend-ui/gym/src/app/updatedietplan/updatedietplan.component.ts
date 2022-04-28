import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Diet } from '../diet';
import { DietService } from '../diet.service';

@Component({
  selector: 'app-updatedietplan',
  templateUrl: './updatedietplan.component.html',
  styleUrls: ['./updatedietplan.component.css']
})
export class UpdatedietplanComponent implements OnInit {

  diet:Diet=new Diet();
  name:any;
  calories:any;
  bmiTo:any;
  bmiFrom:any;
  id:any;
  msg:any;
  rowData:any;
  row:any;
  plans:any;
  index:any;
  joiningDate:any;
  updateDietDetails:FormGroup;
  constructor(private formBuilder : FormBuilder,private  dialogRef:  MatDialogRef<UpdatedietplanComponent>,
    private dietService: DietService,@Inject(MAT_DIALOG_DATA) public data:any) {
    this.updateDietDetails=new FormGroup({});
   }

  ngOnInit(){
    this.updateDietDetails = this.formBuilder.group({
      id:['',[Validators.required]],
      name:['',[Validators.required]],
      calories:['',[Validators.required]],
      bmiFrom:['',[Validators.required]],
      bmiTo:['',[Validators.required]]
  });
  this.getData();
  this.dietService.getRowIndexMethod$.subscribe((data:any) => {
    this.row = data[0]; 
    console.log('user update object',this.row)
  });
  
  }

  public updateData(value:any)
  {
    this.data=value;
    this.dietService.updateMember(this.data).subscribe(data=>{
      Swal.fire(
        "Diet Plan is updated Successfully"
      )
     },error=>Swal.fire(
       "Diet plan is not updated"
     )
     );
  
  }

  public  closeMe() {
    this.dialogRef.close();
}

getData()
  {
    this.dietService.getAllDietPlans().subscribe(data => {  
      this.plans = data 
    })
  }

}
