import { CustManagerService } from './../cust-manager.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  constructor(private service: CustManagerService) { }
  recentItems: Array<any> = [];

  ngOnInit() {
    this.loadChanges();
    console.log('this.recentItems', this.recentItems);
  }
  loadChanges() {
    this.recentItems.length = 0;
    this.service.get('/changelog')
    .subscribe(data => {
      console.log('changedItems', data);
      const max = data.length > 6 ? 6 : data.length;
      for(let i = 0; i < max; i++) {
        const changedItem = {
          date: data[i].changeTime,
          itemId: data[i].itemId,
          description: data[i].changeDescription,
          changeType: data[i].changeType
        };
        this.recentItems.push(changedItem);
      }
    });
  }
}
