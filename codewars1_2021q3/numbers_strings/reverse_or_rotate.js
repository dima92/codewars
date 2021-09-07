const testCubes = s => Array.prototype.reduce.call(s, (acc, val) => acc + Number(val) ** 3, 0) % 2 === 0;
const strReverse = s => [...s].reverse().join("");
const rotateLeft = s => s.slice(1) + s.slice(0, 1);

function revrot(str, size) {
  let len = str.length;
  if (size < 1 || !str || size > len) return "";
  if (len === 1 && size === 1) return str;
  if (/\D/.test(str)) {
    throw Error("Invalid numeric string");
  }
  let pat = new RegExp(`.{${size}}`, 'g');
  return str.match(pat).map(x =>
    testCubes(x) ? strReverse(x) : rotateLeft(x)
  ).join("");
}

console.log(revrot("123456987654", 6));
console.log(revrot("123456987653", 6));
console.log(revrot("66443875", 8));
console.log(revrot("563000655734469485", 4));
console.log(revrot("1", 1));
console.log(revrot("6644-d3875", 8));