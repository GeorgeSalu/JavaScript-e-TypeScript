import { Messaging } from '../service/messaging';
import { OrderStatus } from './interfaces/order-status';
import { ShoppingCart } from './shopping-cart';
import { Persistence } from '../service/persistence';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
    private readonly persistence: Persistence,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('seu carrinho esta vazio');
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `seu pedido com total de ${this.cart.totalWithDicount()} foi recebido`,
    );
    this.persistence.saveOrder();
    this.cart.clear();
  }
}
