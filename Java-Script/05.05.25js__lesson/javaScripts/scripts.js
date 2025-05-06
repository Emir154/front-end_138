let users = [99, 2, 3, 4, 5, 16];

console.log(users[0])
console.log(users[1])

users.push(17)
console.log(users)

users.map(item => {
    console.log(item)
})


let apple = {
    name: "Sasha",
    age: 22
};

apple.email = "Test@Sasha.com"

console.log(apple.email)

let arr = []

arr.push({
    name: "Sasha",
    age: 22
})

// 2 inрut'а бере з них інфу та виводить їх в out
let inp = document.querySelector('.inp')
let inp2 = document.querySelector('.inp2')
let out = document.querySelector('.out')
const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    arr.push({
        name: inp.value,
        age: +inp2.value
    })
    arr.map(item => out.innerHTML += `Імя:${item.name} Вік:${item.age}<br>`)
})

//    bug
// function createUser() {
//     arr.push({
//         name: inp.value,
//         age: +inp2.value
//     })
//     arr.map(item => out.innerHTML += `Імя:${item.name} Вік:${item.age}<br>`)
//     console.log(arr)
// }



function listUser() {
    data.map(item => {
        out.append(createItem(item))
    })

}

listUser(arr)

// створення елементів
function createItem(item) {
    let div = document.createElement('div')

    let name = document.createElement('h5')
    let age = document.createElement('h5')

    let inp3 = document.createElement('input')
    inp3.type = "Checkbox"

    let btn1 = document.createElement('button')
    btn1.innerHTML = "Add"
    // add SaveARR і зберегти в локал stora

    name.innerHTML = item.name
    age.innerHTML = item.age

    div.append(name, age, btn1, inp3)
    return div
}

btn1.addEventListener('click', () => {
    out.innerHTML = ''
    arr.push({
        name: inp.value,
        age: +inp2.value
    })
    listUser(arr)
})





