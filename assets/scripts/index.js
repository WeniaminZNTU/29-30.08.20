'use strict';

const buttonElem = document.getElementById('btn');

// const div = document.getElementById('firstDiv');

// const body = document.getElementById('body');

// div.addEventListener('click', ClickHandler);

// body.addEventListener('click', ClickHandler);

// buttonElem.dispatchEvent(new MouseEvent('click'));

const firstInput = document.getElementById('firstInput');
const secondInput = document.getElementById('secondInput');

buttonElem.addEventListener('click', ClickHandler);




function ClickHandler(event){
  event.preventDefault();
  event.stopPropagation();

  let buffer = firstInput.value;
  firstInput.value = secondInput.value;
  secondInput.value = buffer;
}


