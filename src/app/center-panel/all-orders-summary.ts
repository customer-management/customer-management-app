import {PartyOrder} from './party-order';

export class AllOrdersSummary {
  constructor() {}
  private orders = new Array<PartyOrder>();
  private totalPendingOrderAmount = 0.00;

  get Orders() {
    return this.orders;
  }
  set Orders(orders: Array<PartyOrder>) {
    for (let i = 0; i < orders.length; i++) {
      this.orders.push(orders[i]);
    }
    this.updateTotalPendingAmount();
  }
  get TotalPendingOrderAmount() {
    return this.totalPendingOrderAmount;
  }
  addPartyOrder(partyOrder: PartyOrder) {
    this.orders.push(partyOrder);
    this.updateTotalPendingAmount();
  }
  updateTotalPendingAmount() {
    let totalPendingAmount = 0.00;
    for (let i = 0; i < this.orders.length; i++) {
      const partyOrder = this.orders[i];

      if (partyOrder.getStatus() === 'P') {
        totalPendingAmount += partyOrder.orderTotal();
      }
    }
    this.totalPendingOrderAmount = totalPendingAmount;
  }
}
