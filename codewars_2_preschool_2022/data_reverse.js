const dataReverse = data => {
  const bytes = []
  for (let i = 0; i < data.length; i += 8) {
    bytes.unshift(...data.slice(i, i + 8))
  }
  return bytes
}

const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1]
const data3 = [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]
const data4 = [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]

console.log(dataReverse(data1))
console.log(dataReverse(data3));
