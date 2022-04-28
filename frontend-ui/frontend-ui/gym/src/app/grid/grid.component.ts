import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CellrendererComponent } from '../cellrenderer/cellrenderer.component';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Output() messageToEmit = new EventEmitter<any>();
  msg:any;
  msg2:any;

gridOptions:any;
private gridApi: any;
private gridColumnApi: any;  
rowData:any;
params:any;
public users: User[] | undefined;  

constructor(private userService:UserService,private router:Router, 
  private  dialog:  MatDialog) { }
  ngOnInit() {}

  columnDefs = [
    { headerName:'S.No',field: 'id', sortable: true, filter: true,hide:true },
    { field: 'name', sortable: true, filter:true},
    { field: 'email', sortable: true, filter: true},
    { field: 'contact', sortable: true, filter: true},
    { field: 'joiningDate', sortable: true, filter: true },
    { field: 'height', sortable: true, filter: true },
    { field: 'weight', sortable: true, filter: true},
    { field: 'age', sortable: true, filter: true },
    {field:'plan'},
    {field:'dietPlan'},
    {field:'Action',cellRenderer:CellrendererComponent}
  ];

  getData()
  {
    this.userService.getAllMember().subscribe(data => {  
      this.users = data 
      console.log(this.users)
      this.params.api.setRowData(this.users)
    })
  }

  getSelectedRowData() {
    let selectedNodes = this.gridApi.getSelectedNodes();
    let selectedData = selectedNodes.map((node: { data: any; }) => node.data);
    this.msg=selectedData;
    this.userService.getRowIndexMethod(this.msg)
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
  
  newMember=false;
  addMember(){
    const dialogRef= this.dialog.open(RegisterUserComponent, {
      width: '750px',
    });
    dialogRef.afterClosed().subscribe((param)=>
      this.getData()
    );
  }
}
