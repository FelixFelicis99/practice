const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function (i){
    i.addEventListener('click', function(j){
        body.style.backgroundColor = j.target.id
    })
})
