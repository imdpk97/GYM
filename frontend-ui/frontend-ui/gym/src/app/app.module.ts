import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select'
import {MatRadioModule} from '@angular/material/radio'
import {MatCardModule} from '@angular/material/card'
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { NgChartsModule } from 'ng2-charts';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { LogoutComponent } from './logout/logout.component';
import { AgGridModule } from 'ag-grid-angular';
import { GridComponent } from './grid/grid.component';
import { ModelPopupComponent } from './model-popup/model-popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import { GymPlanComponent } from './gym-plan/gym-plan.component';
import { CellrendererComponent } from './cellrenderer/cellrenderer.component';
import { GymplanRendererComponent } from './gymplan-renderer/gymplan-renderer.component';
import { GymplanModelComponent } from './gymplan-model/gymplan-model.component';
import { AddgymplanModelComponent } from './addgymplan-model/addgymplan-model.component';
import { DietdetailsComponent } from './dietdetails/dietdetails.component';
import { ActivityGridComponent } from './activity-grid/activity-grid.component';
import { ActivityRendererComponent } from './activity-renderer/activity-renderer.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { ActivityModelComponent } from './activity-model/activity-model.component';
import { MatMenuModule} from '@angular/material/menu';
import { DietPlanComponent } from './diet-plan/diet-plan.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdddietComponent } from './adddiet/adddiet.component';
import { DietplanrendererComponent } from './dietplanrenderer/dietplanrenderer.component';
import { UpdatedietplanComponent } from './updatedietplan/updatedietplan.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginUserComponent,
    NavComponent,
    BmiCalculatorComponent,
    LogoutComponent,
    GridComponent,
    ModelPopupComponent,
    GymPlanComponent,
    CellrendererComponent,
    GymplanRendererComponent,
    GymplanModelComponent,
    AddgymplanModelComponent,
    DietdetailsComponent,
    ActivityGridComponent,
    ActivityRendererComponent,
    AddActivityComponent,
    ActivityModelComponent,
    DietPlanComponent,
    AdddietComponent,
    DietplanrendererComponent,
    UpdatedietplanComponent,
   
  ],
  imports: [
    MatSelectModule,
    MatDialogModule,
    Ng2SearchPipeModule,
    MatMenuModule,
    RouterModule,
   AgGridModule.withComponents([null]),
   NgChartsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
      MatButtonModule,
      MatFormFieldModule,
      MatSelectModule,
      MatRadioModule,
      MatCardModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatInputModule,
      HttpClientModule,
      LayoutModule,
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      ToastrModule.forRoot()

  ],
  providers: [],entryComponents:[CellrendererComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
