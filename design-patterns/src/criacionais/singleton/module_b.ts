//import { MyDatabaseClassic } from './db/my-database-classic';
import { MyDatabaseModule } from './db/my-database-module';

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: 'roberto', age: 30 });
myDatabaseClassic.add({ name: 'joana', age: 40 });
myDatabaseClassic.add({ name: 'luiza', age: 20 });
myDatabaseClassic.show();
