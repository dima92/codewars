function runYourString(arg, obj) {
  let fn = Function(obj.param, obj.func)
  return fn(arg)
}

console.log(runYourString(true, {param: 'val', func: 'return val'}));