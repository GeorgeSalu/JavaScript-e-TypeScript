import { FiftyPercentDiscount } from './classes/discount';

/**
 *
 * principio de substituição de liskov.
 * se meu programa espera um animal, algo do tipo cachorro (que herda de animal)
 * deve servir como qualquer outro animal
 */

import { Messaging } from './service/messaging';
import { Order } from './classes/order';
import { Persistence } from './service/persistence';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';

const fifytPercentDiscount = new FiftyPercentDiscount();
const shoppingCart = new ShoppingCart(fifytPercentDiscount);
const messaging = new Messaging();
const persistence = new Persistence();
const order = new Order(shoppingCart, messaging, persistence);

shoppingCart.addItem(new Product('camisa', 49.91));
shoppingCart.addItem(new Product('caderno', 9.9123));
shoppingCart.addItem(new Product('lapis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
order.checkout();
console.log(order.orderStatus);
