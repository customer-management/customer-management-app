import {Component, Input, OnInit} from '@angular/core';
import {CustomerBasic} from './customer-basic';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AddOrderComponent} from '../add-order/add-order.component';
import {CustManagerService} from '../../cust-manager.service';
import {RestEndpoints} from '../../rest-endpoints';

@Component({
  selector: 'add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(private service: CustManagerService) { }

  @Input('parties') parties: Array<any>;
  customerForm = new CustomerBasic();
  successMessage: string;
  ngOnInit() {

  }
  addParty(addPartyForm) {
    const newCustomerData = this.customerForm.createCopy();
    this.customerForm.reset();
    this.service.post(RestEndpoints.PARTY, newCustomerData)
      .subscribe(data => {
        console.log('Data received after adding new Party', data);
          const party = {
            id: data.partyId,
            name: data.partyName
          };
          this.parties.push(party);
        this.successMessage = party.name + ' added successfully.';
      });
    addPartyForm.reset();
  }
  validate(type) {
    if ('text' === type) {
      if (this.customerForm) {

      }
    }
  }
}
