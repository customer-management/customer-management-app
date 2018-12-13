import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customer-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor() { }

  totalOrderAmount: number;

  ngOnInit() {
    this.totalOrderAmount = 0.00;
  }


}
