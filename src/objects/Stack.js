/**
 * Implements the stack data structure.
 */
class Stack {
  constructor() {
    this.data = [] ;
    this.lastIndex = 0 ;
  }
  push(element) {
    this.data[this.lastIndex] = element ;
    this.lastIndex += 1 ;
  }
  peek() {
    return this.data[this.lastIndex - 1] ;
  }
  pop() {
    this.lastIndex -= 1 ;
    return this.data.pop();  
  }
}
