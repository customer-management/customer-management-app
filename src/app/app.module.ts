import { AddPartyComponent } from './center-panel/add-party/add-party.component';
import { AppRoute } from './app.routing';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CenterPanelComponent } from './center-panel/center-panel.component';
import { TextComponentComponent } from './input-component/text-component/text-component.component';
import {FormsModule} from '@angular/forms';
import {TextInputValidator} from './validators/text-input-validator';
import {PhoneInputValidator} from './validators/phone-input-validator';
import {EmailValidator} from './validators/email-validator';
import { OrdersComponent } from './center-panel/orders/orders.component';
import { AddOrderComponent } from './center-panel/add-order/add-order.component';
import {SelectValidator} from './validators/select-validator';
import { AddOrderItemComponent } from './center-panel/add-order/add-order-item/add-order-item.component';
import {QuantityValidator} from './validators/quantity-validator';
import {PercentageValidator} from './validators/percentage-validator';
import {OrderHistoryComponent} from './center-panel/order-history/order-history.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    LeftPanelComponent,
    CenterPanelComponent,
    AddPartyComponent,
    TextComponentComponent,
    OrdersComponent,
    AddOrderComponent,
    AddOrderItemComponent,
    TextInputValidator,
    PhoneInputValidator,
    EmailValidator,
    SelectValidator,
    QuantityValidator,
    PercentageValidator,
    OrderHistoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoute.ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
