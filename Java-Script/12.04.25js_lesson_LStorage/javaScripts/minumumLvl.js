// local storage
localStorage.setItem('theme', 'test')
localStorage.getItem('theme')

let out = document.querySelector('.out');
let btn = document.querySelector('.btn')
let btnL = document.querySelector('.btnL')
let inp = document.querySelector('.inp')

console.log(localStorage.getItem('theme'));
// out.innerHTML = localStorage.getItem('theme')
btn.addEventListener('click', () => {
    localStorage.setItem('input', inp.value)
    out.innerHTML = inp.value
})

btnL.addEventListener('click', () => {
    localStorage.getItem('input')
})

//3adachka 
let inp1 = document.querySelector('.inp1')
let inp2 = document.querySelector('.inp2')
let btn3 = document.querySelector('.btn3')
let out2 = document.querySelector('.out2')

inp1.value = localStorage.getItem('input')
inp2.value = localStorage.getItem('input')

btn3.addEventListener('click', () => {
    console.log("test");
    localStorage.setItem('inp1', inp1.value)
    localStorage.setItem('inp2', inp2.value)
    localStorage.setItem('res', res.value)

    let res = +inp1.value + +inp2.value

    out2.innerHTML = res
    out2.innerHTML = +inp1.value + +inp2.value
})
