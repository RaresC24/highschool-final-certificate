const boxes = document.querySelectorAll('.box')
const boxes2 = document.querySelectorAll('.box2')
const filme = document.getElementById('filme_buton')
const seriale = document.getElementById('seriale_buton')
const linie = document.getElementById('linie')
const tops = document.querySelectorAll('.top')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 7 * 6
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom)
            box.classList.add('show')
        else
            box.classList.remove('show')
    })
    boxes2.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        if(boxTop < triggerBottom)
            box.classList.add('show')
        else
            box.classList.remove('show')
    })

    
}


filme.addEventListener('click',() => {
    filme.classList.add('active')
    seriale.classList.remove('active')

    linie.classList.remove('seriale')


    boxes.forEach(box =>{
        box.classList.add('activat')
    })
    boxes2.forEach(box =>{
        box.classList.remove('activat')
    })
})

seriale.addEventListener('click',() => {
    filme.classList.remove('active')
    seriale.classList.add('active')

    linie.classList.add('seriale')


    boxes.forEach(box =>{
        box.classList.remove('activat')
    })
    boxes2.forEach(box =>{
        box.classList.add('activat')
    })
})