const Cat = (function () {
  const cats = []
  return class Cat {
    constructor(name, weight) {
      if (!name || !weight) throw Error()
      Object.defineProperty(this, "weight", {
        get: () => this._weight,
        set: (v) => (this._weight = v)
      })

      this.name = name
      this.weight = weight
      cats.push(this)
    }

    static averageWeight() {
      return cats.map(v => v.weight).reduce((a, b) => a + b, 0) / cats.length
    }
  }
}());

garfield = new Cat('garfield', 25);
console.log(Cat.averageWeight()); // 25

felix = new Cat('felix', 15);
console.log(Cat.averageWeight());  // now 20
