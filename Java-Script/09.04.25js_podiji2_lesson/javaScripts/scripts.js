// counter 
let btnM = document.querySelector('.btnM')
let btnP = document.querySelector('.btnP')
let out = document.querySelector('.out')

let num = 0

btnP.onclick = () => {
    out.innerHTML = ++num
}

btnM.onclick = () => {
    if (num > 0) { out.innerHTML = --num }
}

//to do list
let out2 = document.querySelector('.out2')
let input = document.querySelector('.inp2')
let btn2 = document.querySelector('.btn2')
let count = document.querySelector('.count')

let count2 = 0

btn2.addEventListener('click', () => {
    out2.innerHTML += `<li>${input.value}</li>`
    count.innerHTML = ++count2
})
//@sasha thanks!

// to do list n2
const inp3 = document.querySelector('.inp3')