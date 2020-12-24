import { Order } from './order';
import { ShoppingCart } from './shopping-cart';

const shoppingCart = new ShoppingCart();
const order = new Order(shoppingCart);
shoppingCart.addItem({ name: 'camisete', price: 49.9 });
shoppingCart.addItem({ name: 'caderno', price: 9.9 });
shoppingCart.addItem({ name: 'lapis', price: 1.9 });

console.log(shoppingCart.items);
console.log(shoppingCart.total());
order.checkout();
console.log(order.orderStatus);
