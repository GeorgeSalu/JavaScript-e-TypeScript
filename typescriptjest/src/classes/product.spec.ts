import { Product } from './product';

const createSut = (name: string, price: number) => {
  return new Product(name, price);
};

describe('product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    const sut = createSut('camiseta', 49.9);
    expect(sut).toHaveProperty('name', 'camiseta');
  });
});
