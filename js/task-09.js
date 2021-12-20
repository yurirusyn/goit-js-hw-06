function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;

};
console.log(getRandomHexColor());

 const refs = { 
   span: document.querySelector('.color'),
   button: document.querySelector('.change-color')
}

refs.button.addEventListener("click", (event) => {
  refs.span.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
});
 
 
 
 console.log(refs.button);