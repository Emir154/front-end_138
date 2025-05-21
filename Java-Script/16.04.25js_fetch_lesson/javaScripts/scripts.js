// function useApi(num) {
//     fetch('https://rickandmortyapi.com/api/character/?page=2')
//         .then(data => data.json())
//         .then(data => listItem(data))
//         .catch(error => console.error(error))
// }
// useApi(3)

// let out = document.querySelector('.out')
// let btnNext = document.querySelector('.btn-next')
// let count = 0


// function listItem(user) {
//     console.log(user)
// }

// function createUser(user) {

//     let item = document.createElement('div')

//     let img = document.createElement('img')
//     img.src = user.image

//     let h3 = document.createElement('h3')

//     let ul = document.createElement('ul')

//     let li = document.createElement('li')

//     let species = document.createElement('li')
//     species.innerHTML = `Rasa: ${item.species}`

//     item.classList.add('item')

//     item.append(img, h3, ul)

//     ul.append()

// }

// btnNext.addEventListener('click', () => {
//     useApi(count++)
// })





// COPIED


let out = document.querySelector('.out')
let next = document.querySelector('.btn-next')

let pages = 0

function useApi(num) {
    fetch(`https://rickandmortyapi.com/api/character/?page=${num}`)
        .then(data => data.json())
        .then(data => {
            console.log(data);

            listItem(data.results)
        })
        .catch(error => console.error(error))
}




useApi(pages)

next.addEventListener('click', () => {
    useApi(pages++)
})

function listItem(user) {
    console.log(user);

    out.innerHTML = ''
    user.map(item => out.append(createUser(item)))
}


function createUser(user) {
    let item = document.createElement('div')
    item.classList.add('item')

    let img = document.createElement('img')
    img.src = user.image
    img.alt = user.name
    img.width = '200'

    let h3 = document.createElement('h3')
    h3.innerHTML = user.name

    let ul = document.createElement('ul')

    let species = document.createElement('li')
    species.innerHTML = `Раса: ${user.species}`

    let status = document.createElement('li')
    status.innerHTML = `Стан: ${user.status}`

    ul.append(species, status)
    item.append(img, h3, ul)
    return item
}
