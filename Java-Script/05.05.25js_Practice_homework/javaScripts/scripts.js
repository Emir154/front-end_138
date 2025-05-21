let inp = document.querySelector('.inp')
let inp2 = document.querySelector('.inp2')

let out = document.querySelector('.out')
let outCount = document.querySelector('.outCount')
let UserCount = document.querySelector('.UserCount')

const btn = document.querySelector('.btn')
const showSave = document.querySelector('.btn2')

// массив
let arr = []

btn.addEventListener('click', () => {
    out.innerHTML = ''
    arr.push({
        name: inp.value,
        age: +inp2.value
    })

    listUser(arr)
})


function listUser(data) {
    data.map(item => {
        out.append(createItem(item))
    })

}

listUser(arr)

// створення елементів
function createItem(item) {
    let div = document.createElement('div')
    div.classList.add('row')

    let name = document.createElement('h5')
    let age = document.createElement('h5')

    let inp3 = document.createElement('input')
    inp3.type = "checkbox"

    let btn1 = document.createElement('button')
    btn1.innerHTML = "Save"

    // додає імя та вік в локальне сховище
    btn1.addEventListener('click', () => {
        let save = JSON.parse(localStorage.getItem('arr')) || [];

        save.push({
            name: `Імя: ${item.name}`,
            age: `Вік: ${item.age}`
        });
        localStorage.setItem('arr', JSON.stringify(save))

        outCount.innerHTML = `Save (${JSON.parse(localStorage.getItem('arr'))?.length || 0})`
    })

    // вивід при натисканні на кнопку
    showSave.addEventListener('click', () => {
        const save = JSON.parse(localStorage.getItem('arr')) || [];
        UserCount.innerHTML = `Users: (${save.length})`

        // перебирає з локал сторедж та виводить їх з массиву
        save.forEach(user => {
            const div = document.createElement('div');
            div.classList.add('user');

            const name = document.createElement('h4');
            name.textContent = `Ім'я: ${user.name}`;

            const age = document.createElement('p');
            age.textContent = `Вік: ${user.age}`;

            div.append(name, age);
            out.append(div); // добавляем в контейнер
        });

    })

    // add SaveARR і зберегти в локал stora

    name.innerHTML = `Імя: ${item.name}`
    age.innerHTML = `Вік: ${item.age}`

    div.append(name, age, btn1, inp3)
    return div
}





