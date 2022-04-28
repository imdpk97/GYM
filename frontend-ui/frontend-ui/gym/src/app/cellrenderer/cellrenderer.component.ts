import { Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import swal from 'sweetalert';
import { ModelPopupComponent } from '../model-popup/model-popup.component';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cellrenderer',
  templateUrl: './cellrenderer.component.html',
  styleUrls: ['./cellrenderer.component.css']
})
export class CellrendererComponent implements OnInit{
  users!: Observable<User[]>;
  @Input() row: any;
  constructor(private userService:UserService,
  private  dialog:  MatDialog,private router:Router) { }
  params:any;
  gridOptions:any;
  index:any
  private gridApi: any;

  ngOnInit(){
    this.userService.getRowIndexMethod$.subscribe((data:any) => {
      this.row = data;
      this.row.forEach((element: any) => this.index=element.id);
       });
    
  }
  getData()
  {
    this.userService.getAllMember().subscribe(data => {  
      this.users = data   
      this.params.api.setRowData(this.users)
    });
  }
  deleteUser()
  {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover it",
      buttons: ["cancel", true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.userService.deleteMember(this.index).subscribe(() =>
        this.getData());
        swal("Member has been deleted!", {
          icon: "success",
        });
      }
    });
  }
  agInit(params:any)
  {
    this.params = params;
  }
  updateUser()
  {
  
    const dialogRef = this.dialog.open(ModelPopupComponent, {
      width: '750px',
 });  
    dialogRef.afterClosed().subscribe((param)=>
    this.getData())
  }


}