import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { CenterPanelComponent } from './center-panel/center-panel.component';
import {AddCustomerComponent} from './center-panel/add-customer/add-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    RightPanelComponent,
    CenterPanelComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
