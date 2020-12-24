import { Messaging } from './service/messaging';
import { Order } from './entities/order';
import { Persistence } from './service/persistence';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistence = new Persistence();
const order = new Order(shoppingCart, messaging, persistence);
shoppingCart.addItem(new Product('camisa', 49.99));
shoppingCart.addItem(new Product('caderno', 1.99));
shoppingCart.addItem(new Product('lapis', 9.99));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
