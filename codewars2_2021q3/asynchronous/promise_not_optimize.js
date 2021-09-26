function antiOptimizeAsync(task) {
  const time = Date.now() + 11000;
  return new Promise(resolve => {
    const result = task();
    setTimeout(resolve, time - Date.now(), result);
  })
}
