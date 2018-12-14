import {Component, Inject, Injectable, Input, OnInit} from '@angular/core';
import {OrderForm} from './order-form';
import {AddOrderItemComponent} from './add-order-item/add-order-item.component';
declare var $;

@Component({
  selector: 'add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  constructor() { }
  orderForm = new OrderForm();
  @Input('parties')parties: Array<any>;
  orderItemForm: any = {};
  stockItems = new Array<any>();
  viewAction = '';
  updatingParty = false;
  orderCreated: boolean;
  orderSummary = {
    itemCount: 0,
    totalPrice: 0.00
  };

  ngOnInit() {
    this.orderForm.partyName = 'NULL';
    // this.loadParties();
  }

  openForm(target: any) {
    const selected = target.value;
    console.log('Selected', selected);
    console.log('this.orderItemForm.partyName', this.orderItemForm.partyName);
    this.orderItemForm.partyName = selected;
    console.log('this.orderItemForm.partyName now', this.orderItemForm.partyName);

    this.resetOrderSummary();

    if (this.orderItemForm.partyName === 'NULL') {
      return false;
    }
    this.orderItemForm.partyName = this.getPartyName(this.orderForm.partyName);
    $('#new-order-form').modal('show');
  }
  cancelForm() {
    this.orderForm.partyName = 'NULL';
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
  setViewAction(action: string) {
    this.viewAction = action;
  }
  updateOrderSummary(itemCount: number, totalPrice: number) {
    this.orderSummary.itemCount = itemCount;
    this.orderSummary.totalPrice = totalPrice;
    this.orderCreated = this.orderSummary.itemCount > 0;
    if (!this.orderCreated) {
      this.cancelForm();
    }
  }
  resetOrderSummary() {
    this.orderSummary.itemCount = 0;
    this.orderSummary.totalPrice = 0.00;
    this.orderCreated = false;
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
