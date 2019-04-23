export class PartyBasic {
  constructor(
    public partyName?: string,
    public email?: string,
    public phone?: string,
    public address?: string,
    public partyId?: string
  ) {
      const random = Math.random().toString();
      this.partyId = 'PAR' +  random.substring(random.length - 5);
  }
  createCopy() {
    return new PartyBasic(this.partyName, this.email, this.phone, this.address);
  }
  reset() {
    this.partyName = '';
    this.email = '';
    this.phone = '';
    this.address = '';
  }
}
