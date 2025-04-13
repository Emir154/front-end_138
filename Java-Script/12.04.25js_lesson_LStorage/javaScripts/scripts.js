let boxBtn = document.querySelector('.box')
let itemBtn = document.querySelector('.box__item')



let body = document.querySelector('body')

// dodaem classu
// body.classList.add('dark')
// body.classList.remove('dark')
// boxBtn.classList.toggle('box--active')

// drygui variant class

boxBtn.addEventListener('click', () => {
    body.classList.toggle('dark')
    boxBtn.classList.toggle('box--active')
    localStorage.setItem('theme', 'dark')
    if (localStorage.getItem('dark')) { }
    else { localStorage.setItem('theme', 'dark') }
})

let Btn = document.querySelector('.Btn');
let title = document.querySelectorAll('h2')

Btn.addEventListener('click', () => {
})

// title.forEach(item, index => {
//     item.innerHTML += index;

// })
console.log(title);

let users = ['sasha', 'kolya', 'vasya']

users.map(item => {
    console.log(item)
})



