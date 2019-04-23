import { Component, OnInit } from '@angular/core';
import {PartyOrder} from './party-order';
import {AllOrdersSummary} from './all-orders-summary';
import {CustManagerService} from '../cust-manager.service';
import {RestEndpoints} from '../rest-endpoints';
import {Observable} from 'rxjs';

@Component({
  selector: 'center-panel',
  templateUrl: './center-panel.component.html',
  styleUrls: ['./center-panel.component.css']
})
export class CenterPanelComponent implements OnInit {

  constructor(private service: CustManagerService) { }
  parties = new Array<any>();
  allOrders = new AllOrdersSummary();
  ngOnInit() {
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
