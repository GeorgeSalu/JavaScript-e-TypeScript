import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.getInstance();
myDatabaseClassic.add({ name: 'luiz', age: 30 });
myDatabaseClassic.add({ name: 'mario', age: 40 });
myDatabaseClassic.add({ name: 'eduardo', age: 20 });
myDatabaseClassic.show();
