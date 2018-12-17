import {Component, Input, OnInit} from '@angular/core';
import {OrderForm} from './order-form';
import {AllOrdersSummary} from '../all-orders-summary';
import {PartyOrder} from '../party-order';
import {OrderItem} from './order-item';
declare var $;

@Component({
  selector: 'add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  @Input('parties') parties: Array<any>;
  @Input('allOrders') allOrders: AllOrdersSummary;

  constructor() { }

  orderForm = new OrderForm();
  orderItemForm: any = {};
  viewAction = '';

  ngOnInit() {
    this.orderForm.partyName = 'NULL';
  }

  openForm(target: any) {
    const selected = target.value;
    console.log('Selected', selected);
    console.log('this.orderItemForm.partyName', this.orderItemForm.partyName);
    this.orderForm.partyId = selected;

    if (this.orderItemForm.partyName === 'NULL') {
      return false;
    }
    this.orderItemForm.partyName = this.getPartyName(this.orderForm.partyId);
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
  submitOrder(orderItems: Array<OrderItem>) {
    const partyOrder = new PartyOrder();
    partyOrder.setPartyId(this.orderForm.partyId);
    partyOrder.setPartyName(this.getPartyName(this.orderForm.partyId));
    partyOrder.addOrders(orderItems);
    partyOrder.setStatus('P');
    this.allOrders.addPartyOrder(partyOrder);
  }
}
