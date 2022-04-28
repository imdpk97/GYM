import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdddietComponent } from '../adddiet/adddiet.component';
import { Diet } from '../diet';
import { DietService } from '../diet.service';
import { DietplanrendererComponent } from '../dietplanrenderer/dietplanrenderer.component';

@Component({
  selector: 'app-diet-plan',
  templateUrl: './diet-plan.component.html',
  styleUrls: ['./diet-plan.component.css']
})
export class DietPlanComponent implements OnInit {


@Output() messageToEmit = new EventEmitter<any>();
msg:any;
gridOptions:any;
private gridApi: any;
private gridColumnApi: any;  
rowData:any;
params:any;
public diets:Diet[];

constructor(private dietService:DietService,private router:Router,private  dialog:MatDialog) { }

  ngOnInit() {}

  columnDefs = [
    { headerName:'S.No',field: 'id', sortable: true, filter: true,hide:true },
    { field: 'name', sortable: true, filter:true},
    { field: 'calories', sortable: true, filter: true },
    { field: 'bmiFrom', sortable: true, filter: true },
    { field: 'bmiTo', sortable: true, filter: true },
    {field:'Action',cellRenderer:DietplanrendererComponent}
  ];

  getData()
  {
    this.dietService.getAllDietPlans().subscribe(data => {  
      this.diets = data 
      this.params.api.setRowData(this.diets)
    })
  }

  getSelectedRowData() {
    let selectedNodes = this.gridApi.getSelectedNodes();
    let selectedData = selectedNodes.map((node: { data: any; }) => node.data);
    this.msg=selectedData;
    this.dietService.getRowIndexMethod(this.msg)
  }
  onGridReady(params:any)
  {
    this.gridApi=params.api;
    this.gridColumnApi=params.columnApi;
    params.api.sizeColumnsToFit(); 
    this.gridApi.setDomLayout("autoHeight"); 
    this.params=params
    this.getData();
  }
  
  addDietPlan(){
    const dialogRef= this.dialog.open(AdddietComponent, {
      width: '750px',
    });
    dialogRef.afterClosed().subscribe((param)=>
      this.getData()
    );
  }

}
