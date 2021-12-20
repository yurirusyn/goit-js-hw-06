const refs = {
    input: document.querySelector('[id="validation-input"]'),
  };

// console.log(refs.input)
  


  

function onInputChange(event) {
    // console.log(event.currentTarget.value.length);
    // console.log(+refs.input.dataset.length);
    if (event.currentTarget.value.length === +refs.input.dataset.length) {
        changeClass("valid","invalid");
        return;
    }
    changeClass("invalid","valid");
};





function changeClass (add, remove) {
   refs.input.classList.add(add);
   refs.input.classList.remove(remove);

};



refs.input.addEventListener('blur', onInputChange);
changeClass();