import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import swal from 'sweetalert';

import Swal from 'sweetalert2';
import { GymplanModelComponent } from '../gymplan-model/gymplan-model.component';
import { GymplanService } from '../gymplan.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-gymplan-renderer',
  templateUrl: './gymplan-renderer.component.html',
  styleUrls: ['./gymplan-renderer.component.css']
})
export class GymplanRendererComponent implements OnInit {
  plans!: Observable<User[]>;
  @Input() row: any;
  index:any;
  params:any;
  constructor(private userService:UserService,
    private toastr:ToastrService,private http: HttpClient ,  private  dialog:  MatDialog,private gymPlanService:GymplanService) { }

  ngOnInit(): void {


    this.userService.getRowIndexMethod$.subscribe((data:any) => {
      this.row = data;
      console.log('row',this.row)
      
      this.row.forEach((element: any) => this.index=element.id);
      console.log(this.index)
    });
    
  }


  getData()
  {
    this.gymPlanService.getAllPlans().subscribe(data => {  
      this.plans = data 
      this.params.api.setRowData(this.plans)
    })
  }




  deletePlan()
  {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this file!",
      icon: "warning",
      buttons: ["cancel", true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.gymPlanService.deletePlan(this.index).subscribe(() => 
        this.getData());

        swal("Your  file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your file is safe!");
      }
    });
    
  }
  
  // deletePlan()
  // {
  //   if(confirm("Are you sure want to delete this plan")){
  //     this.userService.getRowIndexMethod$.subscribe((data:any) => {
  //       this.row = data; 
  //       console.log(this.row)
  //       this.row.forEach((element: any) => this.index=element.id);
  //       console.log(this.index)
  //       this.gymPlanService.deletePlan(this.index).subscribe(() => console.log("user deleted"));
  //       this.getData()
  //   }
  //   );  
  //   } 
  // }
  


  agInit(params:any)
  {
    this.params=params
  }
  updatePlan()
  {
    
    const dialogRef = this.dialog.open(GymplanModelComponent, {
      width: '750px',
    });
    dialogRef.afterClosed().subscribe((param)=>
    this.getData())
  }
  }





