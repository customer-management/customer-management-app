export class OrderForm {
  constructor (
    public partyName?: string,
    public partyId?: string,
    public deliveryDate?: string
  ) {}

  reset() {
    this.partyName = '';
    this.partyId = '';
    this.deliveryDate = '';
  }
}
