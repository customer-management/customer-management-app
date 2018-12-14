export class CustomerBasic {
  constructor(
    public name?: string,
    public email?: string,
    public phone?: string,
    public partyId?: string
  ) {
      const random = Math.random().toString();
      this.partyId = 'PAR' +  random.substring(random.length - 5);
  }
  createCopy() {
    return new CustomerBasic(this.name, this.email, this.phone);
  }
  reset() {
    this.name = '';
    this.email = '';
    this.phone = '';
  }
}
