import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { Messaging } from '../service/messaging';
import { OrderStatus } from './interfaces/order-status';
import { ShoppingCart } from './shopping-cart';
import { Persistence } from '../service/persistence';
import { CustomerOrder } from './interfaces/customer-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: Messaging,
    private readonly persistence: Persistence,
    private readonly customer: CustomerOrder,
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
      `seu pedido com total de ${this.cart.totalWithDiscount()} foi recebido`,
    );
    this.persistence.saveOrder();
    this.cart.clear();
    console.log('o cliente é', this.customer.getName(), this.customer.getIDN());
  }
}
