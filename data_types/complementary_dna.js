function DNAStrand(dna) {
  let str = ""
  for (let i = 0; i < dna.length; i++) {
    switch (dna.charAt(i)) {
      case "A":
        str += "T"
        break
      case "T":
        str += "A"
        break
      case "C":
        str += "G"
        break
      case "G":
        str += "C"
        break
    }
  }
  return str
}

console.log(DNAStrand("AAAA"));  //TTTT
console.log(DNAStrand("ATTGC")); //TAACG
console.log(DNAStrand("GTAT")); //CATA