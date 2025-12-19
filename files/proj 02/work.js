const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault();

  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const results=document.querySelector('#results');

  if(height<0 || isNaN(height)){
    results.innerHTML='enter correct value'
  }
  if(weight<0 || isNaN(weight)){
    results.innerHTML='enter correct value'
  }
  else{
    const val=(weight / ((height*height) / 1000)).toFixed(2);
    results.innerHTML=`<span>${val}</span>`
  }
})