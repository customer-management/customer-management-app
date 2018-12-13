import {Component, Input, OnInit} from '@angular/core';
import {OrderItem} from '../order-item';

@Component({
  selector: 'app-add-order-item',
  templateUrl: './add-order-item.component.html',
  styleUrls: ['./add-order-item.component.css']
})
export class AddOrderItemComponent implements OnInit {
  @Input('partyName') partyName: string;
  stockItems = new Array<any>();
  orderItems = new Array<OrderItem>();
  orderItem = new OrderItem('');
  constructor() { }

  ngOnInit() {
    this.loadStockItems();
  }

  addItem() {
    const newItem = new OrderItem('NULL');
    console.log('Adding item', newItem);
    this.orderItems.push(newItem);
    // this.orderItems.push(currentItem);
  }
  updateItemTotal(orderItem: OrderItem) {
    let total = orderItem.unitPrice * orderItem.quantity;
    const totalDiscount = total * orderItem.discountPercentage / 100;
    total = total - totalDiscount;
    orderItem.itemTotal = total;
    orderItem.discount = totalDiscount;
  }
  getUnitPrice(orderItem: OrderItem) {
    // console.log('Getting unit price for ', orderItem);
    for (let i = 0; i < this.stockItems.length; i++) {
      const item = this.stockItems[i];
      if (orderItem.item === item.itemId) {
        // console.log('Found Item ', item);
        // console.log('Item unit price ', item.unitPrice);

        orderItem.unitPrice = item.unitPrice;
        return;
      }
    }
  }

  private loadStockItems() {
    const stock1 = {
      itemId : 'ITEM0001',
      itemName: 'Fortune Mustard Oil 1L Bottle',
      unitPrice: 135.40,
      stockAvailable: 150
    };
    const stock2 = {
      itemId : 'ITEM0002',
      itemName: 'Fortune Mustard Oil 1L Pouch',
      unitPrice: 132.95,
      stockAvailable: 140
    };
    const stock3 = {
      itemId : 'ITEM0003',
      itemName: 'Horlics Chocolate 1Kg Pet',
      unitPrice: 280.00,
      stockAvailable: 90
    };
    const stock4 = {
      itemId : 'ITEM0004',
      itemName: 'Safed Detergent Powder 500gm Pouch',
      unitPrice: 60.25,
      stockAvailable: 250
    };
    const stock5 = {
      itemId : 'ITEM0005',
      itemName: 'Safed Detergent Powder 1Kg Pouch',
      unitPrice: 115.40,
      stockAvailable: 200
    };
    const stock6 = {
      itemId : 'ITEM0006',
      itemName: 'Vim Dish Washing Bar 100gm',
      unitPrice: 15.10,
      stockAvailable: 150
    };
    const stock7 = {
      itemId : 'ITEM0007',
      itemName: 'Sparkle Dish Washer 100gm Bar',
      unitPrice: 12.50,
      stockAvailable: 150
    };
    this.stockItems.push(stock1);
    this.stockItems.push(stock2);
    this.stockItems.push(stock3);
    this.stockItems.push(stock4);
    this.stockItems.push(stock5);
    this.stockItems.push(stock6);
    this.stockItems.push(stock7);
  }

}
