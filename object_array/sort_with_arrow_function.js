let OrderPeople = function (people) {
  return people.sort((x, y) => x.age - y.age)
}

console.log(OrderPeople(
  [
    {age: 83, name: 'joel'},
    {age: 46, name: 'roger'},
    {age: 99, name: 'vinny'},
    {age: 26, name: 'don'},
    {age: 74, name: 'brendan'}
  ]));