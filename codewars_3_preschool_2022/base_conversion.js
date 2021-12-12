function convert(input, source, target) {
  if (source === target) {
    return input
  }

  let sourceValue = input
    .split('')
    .reverse()
    .reduce((acc, val, digitPos) => {
      return acc + Math.pow(source.length, digitPos) * source.indexOf(val)
    }, 0)

  if (sourceValue === 0) {
    return target[0]
  }

  let targetValue = ''
  while (sourceValue > 0) {
    targetValue += target[sourceValue % target.length]
    sourceValue = Math.floor(sourceValue / target.length)
  }

  return targetValue
    .split('')
    .reverse()
    .join('')
}

const Alphabet = {
  BINARY: '01',
  OCTAL: '01234567',
  DECIMAL: '0123456789',
  HEXA_DECIMAL: '0123456789abcdef',
  ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

const bin = Alphabet.BINARY, oct = Alphabet.OCTAL, dec = Alphabet.DECIMAL, hex = Alphabet.HEXA_DECIMAL,
  allow = Alphabet.ALPHA_LOWER, alup = Alphabet.ALPHA_UPPER, alpha = Alphabet.ALPHA, alnum = Alphabet.ALPHA_NUMERIC;

console.log(convert("15", dec, bin));
console.log(convert("15", dec, oct));
console.log(convert("15", bin, dec));
console.log(convert("15", bin, oct));

console.log(convert("0", dec, alpha));
console.log(convert("27", dec, allow));
console.log(convert("hello", allow, hex));
console.log(convert("SAME", alup, alup));
