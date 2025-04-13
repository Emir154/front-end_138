let out = document.querySelector('.out')

let singleOut = document.querySelector('.singl-out')


let items = [
    {
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Zunge_raus.JPG/1200px-Zunge_raus.JPG",
        name: "Sasha",
        age: 22
    },
    {
        name: "Sveta",
        age: 21
    },
    {
        name: "Kolya",
        age: 16
    },
    {
        name: "ALex",
        age: 23
    },
    {
        name: "Jon",
        age: 34
    },
    {
        name: "Ala",
        age: 18
    },
]


items.map(item => {
    let user = document.createElement('div')
    user.classList.add('item')
    user.addEventListener('click', () => {

    })

    let name = document.createElement('h3')
    name.innerHTML = item.name
    let age = document.createElement('p')
    age.innerHTML = item.age

    user.append(name, age)
    out.append(user)

    // new 13.04.25

    user.addEventListener('click', () => {
        singleOut.innerHTML = `       
          <div class="item">
                    <img src="${item.photo}" alt="Lol"style="width: 100px; height: 100px; object-fit: cover;">
                    <h3>${item.name}</h3>
                    <h5>${item.age}</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, fuga?</p>
                    <button id="clear">Clear user info</button>
                </div>`
        let clear = document.querySelector('#clear').onclick = () => {
            singleOut.innerHTML = ''
        }
    })
    out.append(user)
})

