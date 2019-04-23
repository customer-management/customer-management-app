import { AddPartyComponent } from './center-panel/add-party/add-party.component';
import { CenterPanelComponent } from './center-panel/center-panel.component';
import { AddOrderComponent } from './center-panel/add-order/add-order.component';
import { Component } from '@angular/core';
import { Route } from '@angular/router';
export class AppRoute {
  static ROUTES: Array<Route> = [
      {
        path: '',
        component: AddPartyComponent
      },
      {
        path: 'order',
        component: AddOrderComponent
      },
      {
        path: 'order/create',
        component: AddOrderComponent
      },
      {
        path: 'party',
        component: AddPartyComponent
      }
  ];
}
