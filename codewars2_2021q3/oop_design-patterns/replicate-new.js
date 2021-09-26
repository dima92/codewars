function nouveau(Constructor, ...args) {
  const obj = Object.create(Constructor.prototype)
  const alt = Constructor.apply(obj, args)
  return alt && (typeof alt === 'object' || typeof alt === 'function') ? alt : obj
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.introduce = function () {
  return 'My name is ' + this.name + ' and I am ' + this.age;
};
const john = new Person('John', 30);
const jack = new Person('Jack', 40);
console.log(john.introduce()); // My name is John and I am 30
console.log(jack.introduce()); // My name is Jack and I am 40
