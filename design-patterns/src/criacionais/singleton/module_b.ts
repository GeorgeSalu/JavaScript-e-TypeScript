import { MyDatabaseClassic } from './db/my-database-classic';
import './module_a';

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ name: 'roberto', age: 30 });
myDatabaseClassic.add({ name: 'joana', age: 40 });
myDatabaseClassic.add({ name: 'luiza', age: 20 });
myDatabaseClassic.show();
