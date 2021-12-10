function sentence(List) {
  return List
    .sort((curr, next) => Object.keys(curr)[0] - Object.keys(next)[0])
    .map(item => item[Object.keys(item)[0]])
    .join(' ')
}

List = [
  {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
  {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
]

console.log(sentence(List))
