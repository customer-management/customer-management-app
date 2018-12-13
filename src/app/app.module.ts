import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { CenterPanelComponent } from './center-panel/center-panel.component';
import {AddCustomerComponent} from './center-panel/add-customer/add-customer.component';
import { TextComponentComponent } from './input-component/text-component/text-component.component';
import {FormsModule} from '@angular/forms';
import {TextInputValidator} from './validators/text-input-validator';
import {PhoneInputValidator} from './validators/phone-input-validator';
import {EmailValidator} from './validators/email-validator';
import { OrdersComponent } from './center-panel/orders/orders.component';
import { AddOrderComponent } from './center-panel/add-order/add-order.component';
import {SelectValidator} from './validators/select-validator';
import { AddOrderItemComponent } from './center-panel/add-order/add-order-item/add-order-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    RightPanelComponent,
    CenterPanelComponent,
    AddCustomerComponent,
    TextComponentComponent,
    OrdersComponent,
    AddOrderComponent,
    TextInputValidator,
    PhoneInputValidator,
    EmailValidator,
    SelectValidator,
    AddOrderItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
