let randomnumber = parseInt(Math.random()*100 +1)
const resultparas = document.querySelector('.resultParas');
const lastresult = document.querySelector('.lastResult');
const guesses = document.querySelector('.guesses');
const lowOrHi = document.querySelector('.lowOrHi');
const userInput = document.querySelector('.guessField')
let playgame=true
const submit = document.querySelector('#subt');
const p = document.createElement('p');
let totalguess=0
if(playgame)
{
  submit.addEventListener('click', function(e){
    e.preventDefault();
    const guess=parseInt(userInput.value);
    isvalid(guess)
  });
}
prevguess= []

function isvalid(guess)
{
  if(isNaN(guess)){
    alert('PLease enter a valid number');
  }
  else if(guess>100){
    alert('PLease enter number below 100');
  }
  else if(guess<1){
    alert('PLease enter number above 0');
  }
  else{
    userInput.value = '';
    prevguess.push(guess)
    totalguess++;
    lastresult.innerHTML = `${10 - totalguess} `;
    guesses.innerHTML = `${prevguess}` 
    checkguess(guess);   
  }
}
function checkguess(guess)
{
  if(guess === randomnumber)
  {
    lowOrHi.innerHTML=  `<h2>YOU GOT IT RIGHT!</h2>`;
    endgame();
  }
  else if(guess<randomnumber)
  {
    lowOrHi.innerHTML = `<h2>'go high'</h2>`;
  }
  else if(guess>randomnumber)
  {
    lowOrHi.innerHTML = `<h2>go low</h2>`;
  }
  if(totalguess === 10)
  {
    lowOrHi.innerHTML=`<h2>GAME OVER. Number was ${randomnumber}</h2>`;
    endgame();
  }
}

function endgame()
{
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  resultparas.appendChild(p);
  playGame = false;
  newgame();
}

function newgame()
{
  
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    prevguess=[]
    totalguess=0
    lastresult.innerHTML = `${10 - totalguess} `;
    guesses.innerHTML=''
    lowOrHi.innerHTML='';
    randomnumber = parseInt(Math.random() * 100 + 1);
    userInput.removeAttribute('disabled');
    resultparas.removeChild(p);

    playGame = true;
  });
}