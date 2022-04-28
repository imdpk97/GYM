import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import swal from 'sweetalert';
import { Activity } from '../activity';
import { ActivityModelComponent } from '../activity-model/activity-model.component';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity-renderer',
  templateUrl: './activity-renderer.component.html',
  styleUrls: ['./activity-renderer.component.css']
})
export class ActivityRendererComponent implements OnInit {
  activity!: Observable<Activity[]>;
  @Input() row: any;
  constructor(private activityService:ActivityService,
  private  dialog:  MatDialog,private router:Router) { }
  data:any;
  params:any;
  gridOptions:any;
  result:any;
  @Output() messageToEmit = new EventEmitter<any>();
  msg:any;
  private gridApi: any;

  ngOnInit(){
    this.activityService.getRowIndexMethod$.subscribe((data:any) => {
      this.row = data; 
      this.row.forEach((element: any) => this.index=element.id);
    });
    
  }
  index:any
  element:any;
  getData()
  {
    this.activityService.getAllActivity().subscribe(data => {  
      this.activity = data   
      this.params.api.setRowData(this.activity)
    });
  }
  deleteActivity()
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
        this.activityService.deleteActivity(this.index).subscribe(() =>
        this.getData());
      
        swal("Your  file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your file is safe!");
      }
    });
  }
  urow:any;
  agInit(params:any)
  {
    this.params = params;
  }

  updateActivity()
  {
  
    const dialogRef = this.dialog.open(ActivityModelComponent, {
      width: '750px',
    });  
    dialogRef.afterClosed().subscribe((param)=>
    this.getData())
  }


}
