

const generate= function(){
  let hex='0123456789ABCDEF';
  let colour = '#';
  for(let i=0;i<6;i++)
  {
    const random=Math.floor(Math.random()*16);
    colour += hex[random];
  }
  document.body.style.backgroundColor = colour;
}
//const intervalId;
let intervalId=null;
document.querySelector('#start').addEventListener('click',function(e){
  if(!intervalId)
  intervalId = setInterval(generate, 1000);
})
document.querySelector('#stop').addEventListener('click', function(){
  clearInterval(intervalId);
  intervalId=null;
})