const arr = [1, 2, 3, 4, 5];

function assertNotEmpytList(fnName, list) {
  if (list.length === undefined || list.length <= 0) throw new Error(`${fnName}: empty list`);
}

function id(x) {
  return x;
}

function head(list) {
  assertNotEmpytList('head', list);
  if (list.length === undefined || list.length <= 0) throw new Error(`head: empty list`);
  return list[0];
}

function last(list) {
  assertNotEmpytList('last', list);
  return list[list.length - 1];
}

function reduce(fn, initial, collection) {
  const [head, ...tail] = collection;
  return (head !== undefined) ? reduce(fn, fn(initial, head), tail) : initial;
}

function init(list) {
  assertNotEmpytList('init', list);
  if (list.length === 1) {
    return [];
  } else {
    function helper(initial, collection) {
      return collection.length > 1 ? helper(initial.concat(head(collection)), collection.slice(1)) : initial;
    }

    return helper([], list);
  }
}

function tail(list) {
  assertNotEmpytList('tail', list);
  return (list.length === 1) ? [] : list.slice(1);
}

function filter(fn, collection) {
  return reduce((acc, value) => fn(value) ? acc.concat(value) : acc, [], collection);
}

function map(fn, collection) {
  return reduce((acc, value) => acc.concat(fn(value)), [], collection);
}

function forEach(fn, collection) {
  reduce((_, value) => fn(value), undefined, collection);
}

function reduceRight(fn, initial, collection) {
  if (collection.length > 0) {
    const lastItem = last(collection);
    return reduceRight(fn, fn(lastItem, initial), init(collection));
  } else {
    return initial
  }
}

function mapWithReduceRight(fn, collection) {
  function step(x, ys) {
    return [fn(x), ...ys];
  }

  return reduceRight(step, [], collection);
}

function filterWithReduceRight(fn, collection) {
  function step(x, ys) {
    return fn(x) ? [x, ...ys] : ys;
  }

  return reduceRight(step, [], collection);
}

function lengthWithReduceLeft(collection) {
  return reduce((acc, _) => acc + 1, 0, collection);
}

function lengthWithReduceRight(collection) {
  return reduceRight((_, acc) => acc + 1, 0, collection);
}