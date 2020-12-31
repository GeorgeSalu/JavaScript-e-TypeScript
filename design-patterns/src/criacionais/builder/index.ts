import { MealBox } from './classes/meal-box';
import { Rice, Beans, Meat } from './classes/meals';

const rice = new Rice('arroz', 4);
const beans = new Beans('feijao', 10);
const meat = new Meat('carne', 20);
const mealBox = new MealBox();

mealBox.add(rice, beans, meat);
console.log(mealBox);
console.log(mealBox.getPrice());
