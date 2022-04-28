import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  MemberCount!:number;
  GymPlanCount!:number;
  ActivityCount!:number;
  DietPlanCount!:number;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

constructor(private breakpointObserver: BreakpointObserver,
  private authService:AuthServiceService,private router: Router,private adminService:AdminService) {}
  ngOnInit(){
    if(!this.loggedIn()){
      this.router.navigateByUrl('/login')
    }
    this.adminService.getCount().subscribe(data=>{
      console.log("dashboard data : ",data)
      if(data!=null){
        this.GymPlanCount=data.GymPlanCount;
        this.MemberCount=data.MemberCount;
        this.ActivityCount=data.ActivityCount;
        this.DietPlanCount=data.DietPlanCount;
      }
    })
  }
    loggedIn(){
      if(localStorage.getItem('User'))
      return true;
      else 
      return false;
    }
    onLogout(){
      // alert("Logout")
      swal({
        title: "Are you sure you want to logout?",
        buttons: ["cancel", true],
        dangerMode: true,
      })
      .then((isLogout) => {
        if (isLogout) {

          localStorage.removeItem('User');
          console.log(localStorage.removeItem('User'))
          this.router.navigateByUrl('/login')
        }
      });
    }
  
    dashboard=true;
    members=false;
    plans=false;
    bmi=false;
    activity=false;
    diet=false;
    hideAll(){
      this.dashboard=false;
      this.members=false;
      this.plans=false;
      this.activity=false;
      this.diet=false;
      this.bmi=false;
    }
    showComponent(menu:number){
     this.hideAll();
      switch(menu){
        case 1:
          this.dashboard=true;
          break;
        case 2:
          this.members=true;
          break;
        case 3:
          this.plans=true;
          break;
          case 4:
          this.activity=true;
          break;
          case 5:
          this.diet=true;
          break;
        case 6:
          this.bmi=true;
          break;
      }
    }
  menuItems = ['dashboard','members', 'plans', 'BMI calculator','Activity','Diet Plan','logout'];
  
  
}
