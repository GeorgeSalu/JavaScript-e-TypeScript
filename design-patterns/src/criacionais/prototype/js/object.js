const personPrototype = {
  firstName: 'luiz',
  lastName: 'miranda',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const anotherPerson = Object.create(personPrototype);
console.log(anotherPerson.firstName);
