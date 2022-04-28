import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import swal from 'sweetalert';
import { Diet } from '../diet';
import { DietService } from '../diet.service';
import { UpdatedietplanComponent } from '../updatedietplan/updatedietplan.component';

@Component({
  selector: 'app-dietplanrenderer',
  templateUrl: './dietplanrenderer.component.html',
  styleUrls: ['./dietplanrenderer.component.css']
})
export class DietplanrendererComponent implements OnInit {
  diets!:Observable<Diet[]>;
  @Input() row: any;
  constructor(private dietService:DietService,
  private  dialog:  MatDialog,private router:Router) { }
  params:any;
  gridOptions:any;
  index:any
  diet:any;
  private gridApi: any;

  ngOnInit(){
    this.dietService.getRowIndexMethod$.subscribe((data:any) => {
      this.row = data;
      this.row.forEach((element: any) => this.index=element.id);
       });
    
  }
  getData()
  {
    this.dietService.getAllDietPlans().subscribe(data => {  
      this.diet = data   
      this.params.api.setRowData(this.diet)
    });
  }
  deleteDietPlan()
  {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover it",
      buttons: ["cancel", true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.dietService.deleteDietPlan(this.index).subscribe(() =>
        this.getData());
        swal("Diet Plan has been deleted!", {
          icon: "success",
        });
      }
    });
  }
  agInit(params:any)
  {
    this.params = params;
  }
  updateDietPlan()
  {
  
    const dialogRef = this.dialog.open(UpdatedietplanComponent, {
      width: '750px',
 });  
    dialogRef.afterClosed().subscribe((param)=>
    this.getData())
  }



}
