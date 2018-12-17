import {Component, Input, OnInit} from '@angular/core';
import {AllOrdersSummary} from '../all-orders-summary';

@Component({
  selector: 'order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  @Input('allOrders') allOrders: AllOrdersSummary;
  constructor() { }

  ngOnInit() {
  }

}
