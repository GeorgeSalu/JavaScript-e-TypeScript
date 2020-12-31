function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

const personPrototype = {
  firstName: 'luiz',
  lastName: 'miranda',
  age: 30,

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
Person.prototype = Object.create(personPrototype);

const person1 = new Person('luiz', 'miranda', 30);
console.log(person1.fullName());
