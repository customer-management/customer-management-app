import {OrderItem} from './add-order/order-item';

export class PartyOrder {
  constructor() {}
  private partyId: string;
  private partyName: string;
  private orders = new Array<OrderItem>();
  private status: string;

  getPartyId() {
    return this.partyId;
  }
  setPartyId(partyId: string) {
    this.partyId = partyId;
  }
  getPartyName() {
    return this.partyName;
  }
  setPartyName(partyName) {
    this.partyName = partyName;
  }

  getOrders() {
    return this.orders;
  }
  setOrders(orders: Array<OrderItem>) {
    this.orders = orders;
  }

  getStatus() {
    return this.status;
  }
  setStatus(status: string) {
    this.status = status;
  }

  addOrder(order: OrderItem) {
    this.orders.push(order);
  }
  addOrders(orders: Array<OrderItem>) {
    for (let i = 0; i < orders.length; i++) {
      this.orders.push(orders[i]);
    }
  }
  orderTotal(): number {
    let orderTotal = 0.00;
    for (let i = 0; i < this.orders.length; i++) {
      orderTotal += this.orders[i].itemTotal;
    }
    return orderTotal;
  }
}
