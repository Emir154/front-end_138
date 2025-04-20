let out = document.querySelector('.out')
let back = document.querySelector('.btn-back')
let next = document.querySelector('.btn-next')
let pagesButton = document.querySelector('.pages')

let pages = localStorage.getItem('pageNum') ? localStorage.getItem('pageNum') : 1

// let startPages = 1
// let lastPages = 10

function setPage(num) {
    localStorage.setItem('pageNum', num)
}

useApi(pages)

next.addEventListener('click', () => {
    useApi(++pages)
    setPage(pages)
})

function useApi(num) {
    fetch(`https://rickandmortyapi.com/api/character/?page=${num}`)
        .then(data => data.json())
        .then(data => {

            // Кнопки
            createButton(data.info.pages)

            // Карточки
            listItem(data.results)
        })
        .catch(error => console.error(error))
}

function listItem(user) {
    console.log(user);

    out.innerHTML = ''
    user.map(item => out.append(createUser(item)))
}

// повинна бути кнопка назад
function singlItem() { }

function createUser(user) {
    let item = document.createElement('div')
    item.classList.add('item')
    item.addEventListener('click', () => {
        out.innerHTML = ""
    })

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

function createButton(num) {
    pagesButton.innerHTML = ''
    for (let i = 1; i <= num; i++) {
        let button = document.createElement('button')
        button.innerHTML = i
        button.addEventListener('click', () => {
            useApi(i)
            setPage(i)
        })
        pagesButton.append(button)
    }

}


// new 17 apr.

let select = document.querySelector('.select-species')
let selectStatus = document.querySelector('.select-status')

let currentSpecies = '';
let currentStatus = '';


//пошук по рассі
select.addEventListener('change', () => {
    currentSpecies = select.value
    useApi(pages, currentSpecies, currentStatus)
})

/// пошук по стану здоров'я
selectStatus.addEventListener('change', () => {
    currentStatus = selectStatus.value
    useApi(pages, currentSpecies, currentStatus)
})

// кнопка назад 'Back'
back.addEventListener('click', () => {
    useApi(--pages)
    setPage(pages)
})
//пошук по рассі
function useApi(num, speciesFilter = '', statusFilter = '') {
    fetch(`https://rickandmortyapi.com/api/character/?page=${num}`)
        .then(data => data.json())
        .then(data => {
            let filtered = data.results;
            if (speciesFilter) {
                filtered = filtered.filter(item => item.species === speciesFilter)
            }
            if (statusFilter) {
                filtered = filtered.filter(item => item.status === statusFilter)
            }

            createButton(data.info.pages)
            listItem(filtered)
        })
        .catch(error => console.error(error))
}
/// test comment
/// пошук по стану здоров'я
// function useApi(num, statusFilter = '') {
//     fetch(`https://rickandmortyapi.com/api/character/?page=${num}`)
//         .then(data => data.json())
//         .then(data => {
//             let filteredS = statusFilter
//                 ? data.results.filter(item => item.status === statusFilter)
//                 : data.results;

//             createButton(data.info.pages)
//             listItem(filteredS)

//         })
//         .catch(error => console.error(error))
// }

// фарбування статуса стана персонажів
function createUser(user) {
    let item = document.createElement('div')
    item.classList.add('item')
    item.style.width = '230px'

    if (user.status === 'Alive') {
        item.style.border = '3px solid green'
    } else if (user.status === 'Dead') {
        item.style.border = '3px solid black'
    }
    else if (user.status === 'unknown') {
        item.style.border = '3px solid cornflowerblue'
    }

    //////////////// 
    let img = document.createElement('img')
    img.src = user.image
    img.alt = user.name
    img.width = '200'

    let h3 = document.createElement('h3')
    h3.innerHTML = user.name

    let ul = document.createElement('ul')
    ul.style.listStyle = 'none'

    let species = document.createElement('li')
    species.innerHTML = `Раса: ${user.species}`

    let status = document.createElement('li')
    status.innerHTML = `Стан: ${user.status}`

    ul.append(species, status)
    item.append(img, h3, ul)
    return item

}

