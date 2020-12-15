export class Database {
  constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`conectado: ${this.host}, ${this.user}, ${this.password}`);
  }
}

const database = new Database('localhost', 'root', '123456');
database.connect();
