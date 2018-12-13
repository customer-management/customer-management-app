import {OrderItem} from './order-item';

export class OrderItemForm {
  constructor (
    public items = new Array<OrderItem>()
  ) {}
}
