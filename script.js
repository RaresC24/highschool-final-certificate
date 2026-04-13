const open = document.getElementById('open')
const close = document.getElementById('close')
const contaier = document.querySelector('.container')

open.addEventListener('click', () =>{
    contaier.classList.add('show-nav')
})

close.addEventListener('click', () =>{
    contaier.classList.remove('show-nav')
})

