import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginUserComponent } from './login-user/login-user.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  { path: '', component: LoginUserComponent},
   { path: 'login', component: LoginUserComponent },
  {path:'nav',component:NavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents =[LoginUserComponent,NavComponent,
]
