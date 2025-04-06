let btn = document.querySelector('#Btn')

// classes 
btn.classList.add('active')

//data attribute
btn.setAttribute('data', 'four',)
btn.getAttribute('data',)
console.log(btn.style)

// stili 
btn.style.border = '1px solid red'

//3naitu content
btn.innerHTML
console.log(btn.innerHTML)

//stvorutu element
let out = document.querySelector('.out')

out.innerHTML += `
<li>test</li>`

let button = document.createElement('button')

button.innerHTML = "submit"
button.classList.add('button')
out.append = button

let buttonSpan = document.createElement('BtnSpan')
buttonSpan.innerHTML = 'androed'

button.append('buttonSpan')
out.append('buttonSpan')



//3adachya 

let userbtn = document.createElement('button')

userbtn.onclick = () => {

}

let btnadd = document.querySelector('.add')

btnadd.onclick = () => {
    let h2 = document.createElement('h2')
    h2.classList.add('title')
    h2.innerHTML = heello

    out.append(h2)
}

//3adachka 2 12:09

let out2 = document.querySelector('.out2')
let btn2 = document.querySelector('.btn2')

let user = true

btn2.onclick = () => {
    if (user) {
        out2.append(createTitle('Hello Sasha', 'green'))
    } else {
        out2.append(createTitle('NOt Regisrt', 'red'))
    }

}

function createTtitle(text, className) {
    let h2 = document.createElement('h2')
    h2.classList.add('title', className)
    h2.innerHTML = text

    return h2
}

out2.append(createTitle('Sasha', true))
out2.append(createTitle('Sasha 2', true))
out2.append(createTitle('Sasha 3', true))


let users2 = ['Sveta', 'Sasha', 'Olha', 'Kolya'];


let users3 = [
    {
        name: 'Sveta',
        isLogin: true
    },
    {
        name: 'Sasha',
        isLogin: false
    },
    {
        name: 'Olha',
        isLogin: false
    },
    {
        name: 'Kolya',
        isLogin: true
    },
    {
        name: 'Alex',
        isLogin: false
    }
]