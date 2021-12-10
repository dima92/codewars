const addNewProperty = (array, property, value) =>
  array.map(object => ({...object, [property]: value}))

let questions = [
  {
    question: "What’s the currency of the USA?",
    choices: ['US dollar', 'Ruble', 'Horses', 'Gold'],
    corAnswer: 0,
  },
  {
    question: 'Where was the American Declaration of Independence signed?',
    choices: ['Philadelphia', 'At the bottom', "Frankie’s Pub", 'China'],
    corAnswer: 0,
  },
]

console.log(questions = addNewProperty(questions, 'userAnswer', null));
