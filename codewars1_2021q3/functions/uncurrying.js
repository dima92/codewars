const uncurry = f => (...args) => {
  while (typeof f === 'function' && args.length >= f.length) {
    f = f(...args.splice(0, f.length));
  }
  return f;
};