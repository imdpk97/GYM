import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-dietdetails',
  templateUrl: './dietdetails.component.html',
  styleUrls: ['./dietdetails.component.css']
})
export class DietdetailsComponent implements OnInit {
  user:User=new User();
  inputs: FormGroup ;
  age: any;
  height: any;
  weight : any;
  calculate:any;
  // private errorHandler:ErrorHandler;
  constructor(private formBuilder: FormBuilder) { 
  this.inputs = new FormGroup({});
  }
ngOnInit() {
    this.inputs = this.formBuilder.group({
      age:['',[Validators.required,Validators.pattern('^(1?[1-9]|[1-9][0-9]|[1][1-9][1-9]|100)$')
    ]],
      height:['',[Validators.required]],
      weight:['',[Validators.required,Validators.pattern('^(1?[1-9]|[1-9][0-9]|[1][1-9][1-9]|250)$')]],
     });
    }

   calculateBmi(value:any)
   {
    this.height = value.height;
    this.weight = value.weight;
    this.calculate=(this.weight/this.height/this.height)*10000
    console.log(console.log(this.calculate.toPrecision(4)))
   }
 

}
