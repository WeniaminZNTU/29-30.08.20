'use strict';

class Queue{
  constructor(...items){
    this._oldIndex = 0;
    this._newIndex = 0;

    for(let countItem of items){
      this.push(countItem);
    }
  }


  get size(){
    return this._newIndex - this._oldIndex;
  }

  push(value){
    this[this._newIndex++] = value;
    return this.size;
  }

  pop(){
    if(this.size === 0){
      return;
    }

    const deletedElement = this[this._oldIndex];
    delete this[this._oldIndex++];
    return deletedElement;
  }

  peek(){
    if(this.size === 0){
      return;
    }

    return this[this._oldIndex];
  }
}


const q1 = new Queue();
q1.push('test1');
q1.push('test3');
q1.push('test5');
q1.push('test7');

const q2 = new Queue();
q2.push('test0');
q2.push('test2');
q2.push('test4');
q2.push('test6');
q2.push('test7');
q2.push('test8');
q2.push('test9');
q2.push('test10');

console.log(mergeQueue(q1,q2));

function mergeQueue(q2, q1){
  let retQ = new Queue();

  const queueSize = (q1.size + q2.size);

  for(let i = 0; i < queueSize; i++){
    // debugger
    if(i % 2 === 0){
      if(q1.peek()){
        retQ.push(q1.pop());
      }
      else{
        retQ.push(q2.pop());
      }

    }

    else{
      if(q2.peek()){
        retQ.push(q2.pop());
      }
      else{
        retQ.push(q1.pop());
      }
    }
    
  }

return retQ;
}


