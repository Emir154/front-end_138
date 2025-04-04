// masive
let arr = [1, 'yourName'];
let user1 = "sasha";
let user2 = "sveta";
let users = ["sasha", "sveta1", "sveta", "sasha2"];
console.log(users[1]);
console.log(users[users.length - 1])
console.log('hello')

// push'
users.push('new.user')
console.log(users)

// v kinets
users.unshift('sveta.end') // users.shift vudalae pershogo
console.log(users)

// vudalutu ostanyi
users.pop('last user')
console.log(users)

// to do list example

let inp1 = document.querySelector('#inp1');
let btn = document.querySelector('#btn');
let out = document.querySelector('.out');

let toDolist = [];

btn.onclick = () => {
    toDolist.push(inp1.value)
    console.log(toDolist)
    addtolist
    toDolist.map(item => { out.innerHTML += `<li>${text}</li>` })
}

// metodi massiviv // dlya massiviv Js =>  .map() i     dlya massiviv HTML => .forEach()

// array 

let array2 = ['apple', 'iphone', 'sasha'];

array2.map(item => {
    console.log(item)
})

//index /// знайти всіх Саш
let massiv = ['apple', 'sasha', 'pear', 'iphone', 'androed', 'sasha', 'phone'];

massiv.map(item => {
    if (item === 'sasha') {
        console.log(item)
    }
})

// bagato useriv yak vubratu ih?
let arr1 = ['sasha', 'sasha', 'sasha', 'sasha', 'sasha',];

let obj = {
    name: 'sasha',
    age: 25,
    photo: ["imagetree", "imageriver",],
    isReg: true,
}
console.log("Name: " + obj.name);

let device = [
    {
        brand: 'apple ',
        price: '1200$',
    },
    {
        brand: 'samsung ',
        price: '1200$',
    },
    {
        brand: 'huyawei ',
        price: '10$',
    },
    {
        brand: 'xiaomi ',
        price: '300$',
    },
]
device.map((brand) => {
    console.log(brand.brand + brand.price)
});