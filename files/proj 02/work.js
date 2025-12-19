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
    if(val<18.6){
      results.innerHTML=`<span>${val} : under weight</span>`
      //results.innerHTML='under weight'
    }
    if(val>=18.6 && val<24.9){
      results.innerHTML=`<span>${val} : normal weight</span>`
    }
    if(val>24.9){
      results.innerHTML=`<span>${val} : overweight</span>`
    }
  }
  
  

})