import { CarFactory } from './factories/car-fectory';

const carFactory = new CarFactory();
const fusca = carFactory.getVehicle('fusca');
fusca.pickUp('joana');
fusca.stop();
