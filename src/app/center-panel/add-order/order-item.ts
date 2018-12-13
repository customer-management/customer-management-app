export class OrderItem {
  constructor (
    public item: string,
    public quantity = 0,
    public unitPrice = 0.00,
    public discountPercentage = 0.00,
    public discount = 0.00,
    private readonly itemId?: string,
    public itemTotal = quantity * unitPrice
  ) {
    const random = Math.random().toString();
    this.itemId = 'ITM' + random.substring(random.length - 5);
  }
  get ItemId() {
    return this.itemId;
  }
}
