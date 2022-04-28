import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {
  user:User=new User();
  BMI: FormGroup ;
  age: any;
  height: any;
  weight : any;
  gender: any;
  calculate:any;
  constructor(private formBuilder: FormBuilder) { 
  this.BMI = new FormGroup({});
  }
ngOnInit() {
    this.BMI = this.formBuilder.group({
      age:['',[Validators.required,Validators.pattern('^(1?[1-9]|[1-9][0-9]|[1][1-9][1-9]|100)$')
    ]],
      height:['',[Validators.required]],
      weight:['',[Validators.required,Validators.pattern('^(1?[1-9]|[1-9][0-9]|[1][1-9][1-9]|250)$')]],
     });
    }
    bmi=0
    calculateBMI(weight:any,height:any){
      height=(height/100).toFixed(2);
      console.log("height",height)
      console.log(weight)
      this.bmi=Math.round(weight/(height*height));
     
    }
  
   
   
}