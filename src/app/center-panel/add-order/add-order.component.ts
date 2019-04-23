import { CustManagerService } from './../../cust-manager.service';
import { RestEndpoints } from './../../rest-endpoints';
import { Observable } from 'rxjs';
import { AppComponent } from './../../app.component';
import { CenterPanelComponent } from './../center-panel.component';
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
  parties: Array<any> = [];
  allOrders: AllOrdersSummary;

  constructor(private service: CustManagerService) { }

  orderForm = new OrderForm();
  orderItemForm: any = {};
  viewAction = '';

  ngOnInit() {
    this.orderForm.partyName = 'NULL';
    this.loadParties();
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

  refreshPartyList() {
    this.loadParties();
  }

  loadParties() {
    this.parties.length = 0;
    const response: Observable<any> = this.service.get(RestEndpoints.PARTY);
    response
      .subscribe(data => {
          console.log('Data received after GET call - ', data);
          for (let i = 0; i < data.length; i++) {
            const party = {
              id: data[i].partyId,
              name: data[i].partyName,
              address: data[i].address
            };
            this.parties.push(party);
          }
        },
        error => {
          console.log('Error occurred on GET call - ', error);
        });

  }
}
