import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Diet } from '../diet';
import { DietService } from '../diet.service';

@Component({
  selector: 'app-adddiet',
  templateUrl: './adddiet.component.html',
  styleUrls: ['./adddiet.component.css']
})
export class AdddietComponent implements OnInit {

  DietPlan:FormGroup;
  name:any;
  calories:any;
  bmiTo:any;
  bmiFrom:any;
  diet:Diet=new Diet();
  constructor(private formBuilder : FormBuilder,private  dialogRef:  MatDialogRef<AdddietComponent>,
    private dietService:DietService) {
    this.DietPlan=new FormGroup({});
   }
  ngOnInit(): void {
    this.DietPlan = this.formBuilder.group({
      name:['',[Validators.required]],
      calories:['',[Validators.required]],
      bmiTo:['',[Validators.required]],
      bmiFrom:['',[Validators.required]]
  });
  }
  public submitData()
  {
    this.dietService.addDietPlan(this.diet).subscribe(data=>{
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
      }}
      );
}
  public  closeMe() {
    this.dialogRef.close();
}
}
