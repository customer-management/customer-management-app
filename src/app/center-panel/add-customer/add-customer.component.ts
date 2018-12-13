import { Component, OnInit } from '@angular/core';
import {CustomerBasic} from './customer-basic';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor() { }

  customerForm = new CustomerBasic();
  ngOnInit() {

  }

  validate(type) {
    if ('text' === type) {
      if (this.customerForm) {

      }
    }
  }
}
