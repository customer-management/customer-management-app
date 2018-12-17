import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OrderItem} from '../order-item';
import {AllOrdersSummary} from '../../all-orders-summary';
import {PartyOrder} from '../../party-order';
declare var $;
@Component({
  selector: 'app-add-order-item',
  templateUrl: './add-order-item.component.html',
  styleUrls: ['./add-order-item.component.css']
})
export class AddOrderItemComponent implements OnInit {
  @Input('partyName') partyName: string;
  @Input('viewAction') viewAction: string;
  @Input('changeSelect') changeSelect: boolean;
  @Input('allOrders') allOrders: AllOrdersSummary;

  @Output() resetOrderItems = new EventEmitter<any>();

  stockItems = new Array<any>();
  displayStockItems = new Array<any>();
  orderItems = new Array<OrderItem>();
  orderItem = new OrderItem('NULL');
  isUpdating = false;
  isEditing = false;
  totalItemCount = 0;
  totalOrderValue = 0;

  constructor() { }
  ngOnInit() {
    if (this.changeSelect) {
      this.resetItems();
    }
    this.loadStockItems();
    for (let i = 0; i < this.stockItems.length; i++) {
      this.displayStockItems.push(this.stockItems[i]);
    }
  }

  addItem() {
    this.isUpdating = true;
    const newItem = this.orderItem.createCopy();
    this.orderItem.reset();
    console.log('Adding item', newItem);
    const orderItemIndex = this.getOrderIndexByItem(newItem.item);
    if (orderItemIndex === -1) {
      this.orderItems.push(newItem);
    } else {
      this.orderItems[orderItemIndex].updateWith(newItem);
    }
    this.isUpdating = false;
    this.isEditing = false;
    this.createOrUpdateOrder();
  }
  updateItemTotal() {
    let total = this.orderItem.unitPrice * this.orderItem.quantity;
    const totalDiscount = total * this.orderItem.discountPercentage / 100;
    total = total - totalDiscount;
    this.orderItem.itemTotal = total;
    this.orderItem.discount = totalDiscount;
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
  resetItems() {
    this.orderItem.reset();
    this.createOrUpdateOrder();
  }
  closeModal() {
    $('#new-order-form').modal('hide');
  }
  createOrUpdateOrder() {
    let items = 0;
    let totalPrice = 0.00;
    for (let i = 0; i < this.orderItems.length; i++) {
      const orderItem = this.orderItems[i];
      if (orderItem.quantity > 0) {
        items++;
        totalPrice += orderItem.itemTotal;
      }
    }
    this.totalItemCount = items;
    this.totalOrderValue = totalPrice;
  }

  editOrderItem(orderItemId: string) {
    let index = -1;
    let orderItem;
    for (let i = 0; i < this.orderItems.length; i++) {
      if (this.orderItems[i].OrderItemId === orderItemId) {
        orderItem = this.orderItems[i];
        index = i;
      }
    }
    this.orderItem.makeReplica(orderItem);
    this.orderItems.splice(index, 1);
    this.isEditing = true;
    this.createOrUpdateOrder();
  }
  deleteOrderItem(orderItemId: string) {
    this.orderItems.splice(this.getOrderIndex(orderItemId));
    this.createOrUpdateOrder();
  }

  getIndex(items: any[], itemId: string) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].itemId === itemId) {
        return i;
      }
    }
    return -1;
  }
  getOrderIndex(orderItemId: string) {
    for (let i = 0; i < this.orderItems.length; i++) {
      if (this.orderItems[i].OrderItemId === orderItemId) {
        return i;
      }
    }
    return -1;
  }
  getOrderIndexByItem(itemId: string) {
    for (let i = 0; i < this.orderItems.length; i++) {
      if (this.orderItems[i].item === itemId) {
        return i;
      }
    }
    return -1;
  }
  getItemName(itemId: string): string {
    const item = this.getItem(itemId);

    return item ? item.itemName : undefined;
  }
  getStockAvailable(itemId: string) {
    const item = this.getItem(itemId);
    return item ? item.stockAvailable : 0;
  }
  getItem(itemId: string): any {
    for (let i = 0; i < this.stockItems.length; i++) {
      const item = this.stockItems[i];
      if (item.itemId === itemId) {
        return item;
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
      itemName: 'Horlicks Chocolate 1Kg Pet',
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
