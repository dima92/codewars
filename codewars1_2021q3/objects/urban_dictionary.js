class WordDictionary {
  constructor() {
    this.words = []
  }

  addWord(word) {
    this.words.push(word)
  }

  search(pattern) {
    const re = new RegExp(`^${pattern}$`)
    return this.words.some(w => re.test(w))
  }
}