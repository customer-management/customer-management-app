import {Component, Input, OnInit} from '@angular/core';
import {PartyBasic} from './party-basic';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AddOrderComponent} from '../add-order/add-order.component';
import {CustManagerService} from '../../cust-manager.service';
import {RestEndpoints} from '../../rest-endpoints';

@Component({
  selector: 'add-party',
  templateUrl: './add-party.component.html',
  styleUrls: ['./add-party.component.css']
})
export class AddPartyComponent implements OnInit {

  constructor(private service: CustManagerService) { }

  parties: Array<any> = [];
  partyForm = new PartyBasic();
  successMessage: string;
  ngOnInit() {

  }
  addParty(addPartyForm) {
    const newCustomerData = this.partyForm.createCopy();
    console.log('Party data to be posted', newCustomerData);
    this.partyForm.reset();
    this.service.post(RestEndpoints.PARTY, newCustomerData)
      .subscribe(data => {
        console.log('Data received after adding new Party', data);
          const party = {
            id: data.partyId,
            name: data.partyName,
          };
          this.parties.push(party);
        this.successMessage = party.name + ' added successfully.';
      });
    addPartyForm.reset();
  }
}
