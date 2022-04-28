import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Activity } from '../activity';
import { ActivityRendererComponent } from '../activity-renderer/activity-renderer.component';
import { ActivityService } from '../activity.service';
import { AddActivityComponent } from '../add-activity/add-activity.component';

@Component({
  selector: 'app-activity-grid',
  templateUrl: './activity-grid.component.html',
  styleUrls: ['./activity-grid.component.css']
})
export class ActivityGridComponent implements OnInit {

  @Output() messageToEmit = new EventEmitter<any>();
  msg:any;

gridOptions:any;
private gridApi: any;
private gridColumnApi: any;  
rowData:any;
params:any;
public activity: Activity[] | undefined;  

constructor(private activityService:ActivityService,private router:Router, 
  private  dialog:  MatDialog) { }
  ngOnInit() {}

  columnDefs = [
    { headerName:'S.No',field: 'id', sortable: true, filter: true,hide:true },
    { field: 'day', sortable: true, filter: true },
    { field: 'workout', sortable: true, filter: true },
    {field:'Action',cellRenderer:ActivityRendererComponent}
  ];

  getData()
  {
    this.activityService.getAllActivity().subscribe(data => {  
      this.activity = data 
      this.params.api.setRowData(this.activity)
    })
  }

  getSelectedRowData() {
    let selectedNodes = this.gridApi.getSelectedNodes();
    let selectedData = selectedNodes.map((node: { data: any; }) => node.data);
    this.msg=selectedData;
    this.activityService.getRowIndexMethod(this.msg)
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
  
  
  addMember(){
    const dialogRef= this.dialog.open(AddActivityComponent, {
      width: '750px',
    });
    dialogRef.afterClosed().subscribe((param)=>
      this.getData()
    );
  }

}
