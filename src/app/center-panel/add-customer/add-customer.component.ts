import {Component, Input, OnInit} from '@angular/core';
import {CustomerBasic} from './customer-basic';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AddOrderComponent} from '../add-order/add-order.component';

@Component({
  selector: 'add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor() { }

  @Input('parties') parties: Array<any>;
  customerForm = new CustomerBasic();
  ngOnInit() {

  }
  addParty() {
    const newCustomer = this.customerForm.createCopy();
    this.customerForm.reset();

    this.parties.push(
      {
        id: newCustomer.partyId,
        name: newCustomer.name
      });
  }
  validate(type) {
    if ('text' === type) {
      if (this.customerForm) {

      }
    }
  }
}
