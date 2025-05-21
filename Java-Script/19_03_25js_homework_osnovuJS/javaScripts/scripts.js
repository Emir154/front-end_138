
console.log('hello');

// let calc = prompt('what your name?');
// let age = prompt('how old are you?', 100);
// let isdev = confirm('are you dev?');
console.log('buuggg')
// ====================== //

//імена
let user1 = ('danil');
let user2 = ('losь');
let user3 = ('tolik');
let user4 = ('oleg');
//====================== //

// імена "broken"
// let user1dkk = ('danil');
// let user2dss = ('losь');
// let user3dff = ('tolik');
// let user4dgg = ('oleg');
// ====================== //

//стилі змінних => 
// let "змінна" = prompt + alert + log + console
// const "змінна" = prompt + alert + log + console
// ============================= //


// //числа
// // let num = 100 + 3;
// // ====================== //

// // alert(num)

// //строки 

// // let str = '<h1 style:>hello</h1>';
// // ====================== //

// //console log (сучасний)

// // document.querySelector('.out').innerHTML = "Test";
// console.log('2' + ' + ' + '2' + ' = ' + (2 + 2));

// console.log(2 + 2)

// console.log(2 + 2 - '2')
// // ====================== //

// // concatination 
let userName = 'emir';

console.log('hello ' + userName);

// // вивод

let a1 = 2;
let a2 = 2;
let res = a1 + a2;

console.log(res);

let p1 = +prompt('перше число')
let p2 = +prompt('друге число')

console.log(p1 + " + " + p2 + " = " + (p1 + p2));
// // ====================== //

// імя користувача
const name = prompt("як тебе звати?");
alert(`привіт, ${name}!`);
const username = prompt("твоя фамилія");

alert(`${username}!`);
// // ====================== //

// запит року народження
const birthYear = prompt("вкажи свій рік народження:");
const currentYear = 2025;
const age = currentYear - birthYear;

alert(`${name} ${username}, тобі ${age} років!`);
// // ====================== //

// розрахунок площі кола
let inpcolo = document.querySelector('.inpcolo');
let calc_colo = document.querySelector('#calc_colo');
let calcbtn = document.querySelector('#calcbtn');

calcbtn.onclick = () => {
    const radius = inpcolo.value;
    if (radius && !isNaN(radius) && radius > 0) {
        const circleArea = Math.PI * Math.pow(radius, 2);
        calc_colo.innerHTML = `Площа кола: ${circleArea.toFixed(2)} м²`;
    } else {
        calc_colo.innerHTML = "Будь ласка, введи коректний радіус!";
    }
};
// // ====================== //
// курс евро к usd

let inpdollars = document.querySelector('.inpcolo1');
let calceur = document.querySelector('#calc_eur');
let calcbtn1 = document.querySelector('#calcbtn1');

const exchangeRate = 0.92; // курс доллара к евро

calcbtn1.onclick = () => {
    const dollars = parseFloat(inpdollars.value.trim());
    if (!isNaN(dollars) && dollars > 0) {
        const euros = dollars * exchangeRate;
        calceur.innerHTML = `= ${euros.toFixed(2)} eur`;
    } else {
        calceur.innerHTML = "Будь ласка, введи коректну суму!";
    }
};
// // ====================== //

//швидкість в km/h

let inpDistance = document.querySelector('.inpcolo2');
let inpTime = document.querySelector('.inpcolo3');
let calcSpeed = document.querySelector('#calc_km');
let calcbtn2 = document.querySelector('#calcbtn2');

calcbtn2.onclick = () => {
    const distance = parseFloat(inpDistance.value.trim());
    const time = parseFloat(inpTime.value.trim());

    if (!isNaN(distance) && distance > 0 && !isNaN(time) && time > 0) {
        const speed = distance / time;
        calcSpeed.innerHTML = `= ${speed.toFixed(2)} км/год`;
    } else {
        calcSpeed.innerHTML = "Будь ласка, введи коректні дані!";
    }
};
// // ====================== //


