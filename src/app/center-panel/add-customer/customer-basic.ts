export class CustomerBasic {
  constructor(
    public partyName?: string,
    public email?: string,
    public phone?: string,
    public partyId?: string
  ) {
      const random = Math.random().toString();
      this.partyId = 'PAR' +  random.substring(random.length - 5);
  }
  createCopy() {
    return new CustomerBasic(this.partyName, this.email, this.phone);
  }
  reset() {
    this.partyName = '';
    this.email = '';
    this.phone = '';
  }
}
