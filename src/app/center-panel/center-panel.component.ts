import { Component, OnInit } from '@angular/core';
import {PartyOrder} from './party-order';
import {AllOrdersSummary} from './all-orders-summary';

@Component({
  selector: 'center-panel',
  templateUrl: './center-panel.component.html',
  styleUrls: ['./center-panel.component.css']
})
export class CenterPanelComponent implements OnInit {

  constructor() { }
  parties = new Array<any>();
  allOrders = new AllOrdersSummary();
  ngOnInit() {
    this.loadParties();
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
