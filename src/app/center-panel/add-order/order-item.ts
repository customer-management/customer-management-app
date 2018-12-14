export class OrderItem {
  constructor (
    public item: string,
    public quantity = 0,
    public unitPrice = 0.00,
    public discountPercentage = 0.00,
    public discount = 0.00,
    private readonly orderItemId?: string,
    public itemTotal = quantity * unitPrice
  ) {
    const random = Math.random().toString();
    this.orderItemId = 'ITM' + random.substring(random.length - 5);
  }

  public createCopy(): OrderItem {
    const newItem = new OrderItem(this.item);
    newItem.quantity = this.quantity;
    newItem.unitPrice = this.unitPrice;
    newItem.discountPercentage = this.discountPercentage;
    newItem.discount = this.discount;
    newItem.itemTotal = this.itemTotal;
    return newItem;
  }
  public reset() {
    this.item = 'NULL';
    this.quantity = 0;
    this.unitPrice = 0.00;
    this.discountPercentage = 0.00;
    this.discount = 0.00;
    this.itemTotal = 0.00;
  }
  public makeReplica(orderItem: OrderItem) {
    this.item = orderItem.item;
    this.quantity = orderItem.quantity;
    this.unitPrice = orderItem.unitPrice;
    this.discountPercentage = orderItem.discountPercentage;
    this.discount = orderItem.discount;
    this.itemTotal = orderItem.itemTotal;
  }
  public updateWith(orderItem: OrderItem) {
    this.item = orderItem.item;
    this.quantity += orderItem.quantity;
    this.unitPrice = orderItem.unitPrice;
    this.discountPercentage = this.discountPercentage < orderItem.discountPercentage ? this.discountPercentage : orderItem.discountPercentage; // whichever is lower
    this.discount = (this.unitPrice * this.quantity) * (this.discountPercentage / 100);
    this.itemTotal = (this.unitPrice * this.quantity) - this.discount;
  }
  get OrderItemId() {
    return this.orderItemId;
  }
}
