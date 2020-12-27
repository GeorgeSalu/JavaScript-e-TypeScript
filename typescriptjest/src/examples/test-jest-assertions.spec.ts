describe('primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);

    expect(number).toBeTruthy();
  });
});

describe('objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'luiz', age: 30 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
  });
});
