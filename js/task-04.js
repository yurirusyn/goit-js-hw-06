const addBtn = document.querySelector('[data-action="increment"]')
const removeBtn = document.querySelector('[data-action="decrement"]')
const value = document.querySelector('[id="value"]')


console.log(value)
addBtn.addEventListener('click',targetButtonAddClickHandler);
removeBtn.addEventListener('click',targetButtonRemoveClickHandler);
let counterValue = 0;

function targetButtonAddClickHandler () {
     counterValue++;
     value.textContent = counterValue;
};


function targetButtonRemoveClickHandler () {
    counterValue--;
    value.textContent = counterValue;
};