const refs = {
    input: document.querySelector('[id="name-input"]'),
    name: document.querySelector('[id="name-output"]')
  };


  refs.input.addEventListener('input', onInputChange);

  

function onInputChange(event) {
    if (event.currentTarget.value.length <= 0) {
        refs.name.textContent = "Anonymous"
    }
    else { 
        refs.name.textContent = event.currentTarget.value;

    }
}
  
console.log(refs.input)

