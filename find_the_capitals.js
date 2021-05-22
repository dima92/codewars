function capital(capitals) {
  return capitals.map(c => `The capital of ${c.state || c.country} is ${c.capital}`)
}

state_capitals = [{state: 'Maine', capital: 'Augusta'}];
country_capitals = [{'country': 'Spain', 'capital': 'Madrid'}];
mixed_capitals = [{"state": 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital": "Madrid"}];

console.log(capital(state_capitals)[0]);
console.log(capital(country_capitals)[0]);
console.log(capital(mixed_capitals)[1]);