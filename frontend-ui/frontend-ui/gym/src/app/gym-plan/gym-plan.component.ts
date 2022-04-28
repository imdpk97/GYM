import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddgymplanModelComponent } from '../addgymplan-model/addgymplan-model.component';
import { CellrendererComponent } from '../cellrenderer/cellrenderer.component';
import { GymplanModelComponent } from '../gymplan-model/gymplan-model.component';
import { GymplanRendererComponent } from '../gymplan-renderer/gymplan-renderer.component';
import { GymplanService } from '../gymplan.service';
import { Plan } from '../plan';
import { UserService } from '../user.service';

@Component({
  selector: 'app-gym-plan',
  templateUrl: './gym-plan.component.html',
  styleUrls: ['./gym-plan.component.css']
})
export class GymPlanComponent implements OnInit {
rowData:any;

plans!:Plan[];
private gridApi:any;
private gridColumnApi:any;
msg:any;
params:any;
constructor(private gymPlanService:GymplanService,private userService:UserService, 
  private  dialog:  MatDialog){


  }
  ngOnInit() {
   
  }
    
    columnDefs = [
      {field: 'id', sortable: true, filter: true,hide:true},
        {field: 'name', sortable: true, filter: true},
        {field: 'duration', sortable: true, filter: true},
        {field: 'price', sortable: true, filter: true},
        {field:'Action',cellRenderer:GymplanRendererComponent}
   
   
      ];



       
  getData()
  {
    this.gymPlanService.getAllPlans().subscribe(data => {  
      this.plans = data 
      console.log('plans',this.plans)
      this.params.api.setRowData(this.plans)
    })
  }
    onGridReady(params:any)
    {
      this.gridApi=params.api;
      this.gridColumnApi=params.columnApi;
      params.api.sizeColumnsToFit(); 
      this.gridApi.setDomLayout("autoHeight"); 
      // params.api.setRowData(this.plans)
      this.params=params
      this.getData();

    }

   
  
    getSelectedRowData() {
      let selectedNodes = this.gridApi.getSelectedNodes();
      let selectedData = selectedNodes.map((node: { data: any; }) => node.data);
      this.msg=selectedData;
      this.userService.getRowIndexMethod(this.msg)  
    }
  
    addPlan()
    {
      const dialogRef=this.dialog.open(AddgymplanModelComponent, {
        width: '450px',
      });
      dialogRef.afterClosed().subscribe((param)=>
      this.getData()
    );

  
    }

}
