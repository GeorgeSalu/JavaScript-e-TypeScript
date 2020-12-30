import { MyDatabaseClassic } from './db/my-database-classic';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseClassic.instance;
myDatabaseClassic.add({ name: 'roberto', age: 30 });
myDatabaseClassic.add({ name: 'joana', age: 40 });
myDatabaseClassic.add({ name: 'luiza', age: 20 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
