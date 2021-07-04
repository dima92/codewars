function whoseBicycle(diary1, diary2, diary3) {
  let arr = [Object.values(diary1), Object.values(diary2), Object.values(diary3)].map(v => v.reduce((a, b) => a + b, 0))
  let index = arr.lastIndexOf(Math.max(...arr))
  return `I need to buy a bicycle for my ${index === 0 ? 'first' : index === 1 ? 'second' : 'third'} son.`
}

whoseBicycle(
  {
    'algebra': 6,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
  },
  {
    'algebra': 8,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
  },
  {
    'algebra': 6,
    'history': 5,
    'physics': 5,
    'geography': 9,
    'chemistry': 10
  }
), 'I need to buy a bicycle for my second son.'
whoseBicycle(
  {
    'algebra': 6,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
  },
  {
    'algebra': 6,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
  },
  {
    'algebra': 6,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
  }
), 'I need to buy a bicycle for my third son.'
whoseBicycle(
  {
    'algebra': 6,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 5
  },
  {
    'algebra': 6,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
  },
  {
    'algebra': 6,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 10
  }
), 'I need to buy a bicycle for my third son.'
whoseBicycle(
  {
    'algebra': 3,
    'history': 7,
    'physics': 8,
    'geography': 4,
    'chemistry': 10
  },
  {
    'algebra': 6,
    'history': 7,
    'physics': 8,
    'geography': 9,
    'chemistry': 4
  },
  {
    'algebra': 9,
    'history': 7,
    'physics': 9,
    'geography': 9,
    'chemistry': 10
  }
), 'I need to buy a bicycle for my third son.'