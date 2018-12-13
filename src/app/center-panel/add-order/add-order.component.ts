import { Component, OnInit } from '@angular/core';
import {OrderForm} from './order-form';
declare var $;
@Component({
  selector: 'add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  constructor() { }
  orderForm = new OrderForm();
  parties = new Array<any>();
  orderItemForm: any = {};
  stockItems = new Array<any>();

  ngOnInit() {
    this.orderForm.partyName = 'NULL';
    this.loadParties();
  }

  openForm() {
    console.log('this.orderItemForm.partyName', this.orderItemForm.partyName);
    if (this.orderItemForm.partyName === 'NULL') {
      return false;
    }
    this.orderItemForm.partyName = this.getPartyName(this.orderForm.partyName);
    $('#new-order-form').modal('show');
  }

  getPartyName(partyId: string): string {
    console.log('partyId', partyId);
    for (let i = 0; i < this.parties.length; i++) {
      const party = this.parties[i];
      if (party.id === partyId) {
        return party.name;
      }
    }
    return null;
  }
  private loadParties() {
    const party1 = {
      id: 'PAR001',
      name: 'Maa Durga Groceries'
    };
    const party2 = {
      id: 'PAR002',
      name: 'Laxmi Traders'
    };
    const party3 = {
      id: 'PAR003',
      name: 'Vijaya Stores'
    };

    this.parties.push(party1);
    this.parties.push(party2);
    this.parties.push(party3);
  }


}
