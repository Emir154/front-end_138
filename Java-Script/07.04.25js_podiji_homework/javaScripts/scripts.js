let selectCategory = []
const products = [
    {
        id: 1,
        img: 'https://content2.rozetka.com.ua/goods/images/big_tile/487792100.jpg',
        name: "Смартфон Samsung Galaxy A54",
        price: 12999,
        category: "Електроніка",
        inStock: true
    },
    {
        id: 2,
        img: 'https://content1.rozetka.com.ua/goods/images/big_tile/510148789.jpg',
        name: "Ноутбук Lenovo IdeaPad 3",
        price: 20999,
        category: "Електроніка",
        inStock: false
    },
    { id: 3, img: 'https://content2.rozetka.com.ua/goods/images/big_tile/487792100.jpg', name: "Навушники JBL Tune 510BT", price: 1499, category: "Аудіо", inStock: true },
    { id: 4, img: 'https://content2.rozetka.com.ua/goods/images/big_tile/487792100.jpg', name: "Пральна машина Bosch", price: 14999, category: "Побутова техніка", inStock: true },
    { id: 5, img: 'https://content2.rozetka.com.ua/goods/images/big_tile/487792100.jpg', name: "Книга 'Шантарам'", price: 399, category: "Книги", inStock: true },
    { id: 6, img: 'https://content2.rozetka.com.ua/goods/images/big_tile/487792100.jpg', name: "Електросамокат Xiaomi Mi Scooter", price: 17999, category: "Транспорт", inStock: false },
    { id: 7, img: 'https://content2.rozetka.com.ua/goods/images/big_tile/487792100.jpg', name: "Монітор LG 24MK430H", price: 3999, category: "Електроніка", inStock: true },
    { id: 8, img: 'https://content2.rozetka.com.ua/goods/images/big_tile/487792100.jpg', name: "Кавоварка DeLonghi Magnifica", price: 10499, category: "Побутова техніка", inStock: true },
    { id: 9, img: 'https://content2.rozetka.com.ua/goods/images/big_tile/487792100.jpg', name: "Спортивний годинник Garmin Forerunner 45", price: 6999, category: "Гаджети", inStock: false },
    { id: 10, img: 'https://content2.rozetka.com.ua/goods/images/big_tile/487792100.jpg', name: "Мишка Logitech MX Master 3", price: 2999, category: "Комп’ютерна периферія", inStock: true }
];

let out = document.querySelector('.out')
let cartOut = document.querySelector('.cart')
let cartArr = []


function createCard(data) {

    let div = document.createElement('div')
    div.classList.add('item', data.inStock ? "item--green" : 'item--red')

    let category = document.createElement('p')
    category.classList.add('item__category')
    category.innerHTML = `Категорія: ${data.category}`

    let img = document.createElement('img')
    img.classList.add('item__img')
    img.alt = 'img'
    img.src = data.img
    img.width = '180'

    let title = document.createElement('h2')
    title.classList.add('item__title')
    title.innerHTML = data.name

    let stock = document.createElement('p')
    stock.classList.add('item__text', data.inStock ? "green" : 'red')
    stock.innerHTML = data.inStock ? "в Наявності" : 'Немае'

    let price = document.createElement('b')
    price.classList.add('item__price')
    price.innerHTML = `${data.price} USD`


    let buttons = document.createElement('div')
    buttons.classList.add('item__buttons')


    let cart = document.createElement('button')
    cart.classList.add('item__cart')
    cart.innerHTML = 'В Корзину'
    cart.onclick = () => {
        cartArr.push(data)
        cartOut.innerHTML = cartArr.length
    }

    let buy = document.createElement('button')
    buy.classList.add('item__buy')
    buy.innerHTML = 'Придбати'

    buttons.append(buy, cart)
    div.append(category, img, title, stock, price, buttons)




    return div
}
console.log(products);
// item.category

products.map(item => out.append(createCard(item)))



// new 08.04.25

let select = document.querySelector('select');
let categories = [...new Set(products.map(p => p.category))]

categories.forEach(category => {
    let option = document.createElement('option');
    option.value = category
    option.textContent = category
    select.append(option)
})

let searchBtn = document.querySelectorAll('button')[1];
let searchInput = document.querySelector('input[type="text"]')

searchBtn.addEventListener('click', () => {
    let query = searchInput.value.trim().toLowerCase();
    out.innerHTML = ''
    products
        .filter(p => p.name.toLowerCase().includes(query))
        .forEach(p => out.append(createCard(p)))
})

let selectBtn = document.querySelectorAll('button')[0];

selectBtn.addEventListener('click', () => {
    let selected = select.value;
    out.innerHTML = '';
    products
        .filter(p => p.category === selected)
        .forEach(p => out.append(createCard(p)));
})


let inStock = document.getElementById('inStock')
let outOfStock = document.getElementById('outOfStock')

document.querySelectorAll('button')[3].addEventListener('click', () => {
    out.innerHTML = ''
    let filtered = products

    if (inStock.checked) {
        filtered = filtered.filter(p => p.inStock);
    }
    if (outOfStock.checked) {
        filtered = filtered.filter(p => !p.inStock);
    }
    filtered.forEach(p => out.append(createCard(p)))
});




