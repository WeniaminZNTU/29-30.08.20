"use strict";

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  AddNode(value) {
    const node = new ListNode(value);

    if (this.length === 0) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }

  getNodeByIndex(index) {
    if (index < 0 || index > this.length) {
      throw new RangeError("Not in List");
    }

    let current = this.head;
    let count = 0;

    while (count < index) {
      current = current.next;
      count++;
    }

    return current;
  }

  [Symbol.iterator]() {
    return new LinkedListIterator(this);
  }
}

class LinkedListIterator {
  constructor(list) {
    this.iterable = list.head;
  }

  next() {
    if (this.iterable) {
      const value = this.iterable.value;
      this.iterable = this.iterable.next;

      return {
        value,
        done: true,
      };
    }
    return { done: true };
  }
}

const list = new LinkedList();

list.AddNode("test1");
list.AddNode("test2");
list.AddNode("test3");
list.AddNode("test4");
list.AddNode("test5");

class Stack{
    constructor(maxSize = 1000){
        if(typeof maxSize !== 'number'){
            throw new TypeError('size must be a number');
        }

        if(maxSize < 1){
            throw new TypeError('size must be a number');
        }

        this._maxSize = maxSize;
        this._size = 0;
    }

    get maxSize(){
        return this._maxSize;
    }

    get isEmpty(){
        return this.length === 0;
    }

    get size(){
        return this._size;
    }

    set size(value){
        if(typeof value !== 'number'){
            throw new TypeError('Uncorrect value');
        }
        this._size = value;
    }

    push(value){
        if(this.size >= this.maxSize){
            throw new TypeError('Stack owerflow');
        }

        this[this.size++] = value;
        return this.size;
    }

    isEmpty(){
        return this._size === 0;
    }


    pop(){
        // if(this.isEmpty){
        //     return;
        // }

        const lastItem = this[--this._size];
        delete this[this._size];
        return lastItem;
    }
    
    peek(){
        // if(this.isEmpty()){
        //     return;
        // }
        return this[this._size -1];
    }
}

/* function reverseString(string){
    
    const stack = new Stack(100);

    let reverseStr = '';

    for(let ch of string){
        stack.push(ch);
    }


    for(let i = stack.size; i >= 0; i--){
        reverseStr += stack.pop();
    }

    return reverseStr;
}
 */


function isBracketsCorrect(string){
    if(string.length % 2 !== 0){
        return false;
    }

    const stack = new Stack(string.length);

    for(let ch of string){
      if(ch === '('){
        stack.push(ch);
      }
      else if(ch === ')'){
        stack.pop();
      }
      else{
        return false
      }

    }
//есть стек запушенный скобками
//debugger

    return stack.isEmpty();
}

// console.log(isBracketsCorrect(''));




