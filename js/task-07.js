const refs = {
    range: document.querySelector('[id="font-size-control"]'),
    span: document.querySelector('[id="text"]'),
  };

    console.log(refs.span)
     

refs.range.addEventListener("input", (event) => {
  refs.span.style.fontSize = event.currentTarget.value + "px";
  console.log( event.currentTarget.value)
});

