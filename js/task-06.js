const refs = {
    input: document.querySelector('[id="validation-input"]'),
  };

console.log(refs.input)
  refs.input.addEventListener('blur', onInputChange);

  

function onInputChange(event) {
    console.log(refs.input.dataset.length)
    if (event.currentTarget.value.length == refs.input.dataset.length) {
        
        refs.input.classList.add("valid");
    }
    else if (event.currentTarget.value.length !== refs.input.dataset.length){ 
      refs.input.classList.add("invalid");
    }
}
