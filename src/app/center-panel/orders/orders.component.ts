import {Component, Input, OnInit} from '@angular/core';
import {AllOrdersSummary} from '../all-orders-summary';

@Component({
  selector: 'customer-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  @Input('allOrders') allOrders: AllOrdersSummary;

  constructor() { }

  totalOrderAmount: number;

  ngOnInit() {
    this.totalOrderAmount = 0.00;
  }


}
