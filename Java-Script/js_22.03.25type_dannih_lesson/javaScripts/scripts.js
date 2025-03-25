// // примітивні
// // number's
// const num = 22.88;
// console.log(Math.round(num));
// //string
// const str1 = ` privet `;
// const str2 = "hello";

// //boolean
// // false дає 0
// // null
// // undefined
// // NaN
// let bool = true;
// console.log("пуста строка " + Boolean(''));

// // undefined    коли щось є але пусте
// // null     не існує

// console.log(typeof hello);

// console.log(null);


// //
// console.dir(document);

// let arr = ['apple', 'androed']; //massive
// let obj = {
//     brand: 'apple',
//     price: 10
// }; //object

// console.log(arr);
// console.log(obj);

// // function()
// function log() {
//     console.log("привет" + num);
// }

// 
let name = "losь";
let age = 28;

if (age >= 18) {
    console.log("у вас є доступ")
} else {
    console.log('вам не виповнилось 18 років')
}

//  задача ====================== //

let login = ('admin')
let password = ('123')

let output = document.querySelector('#output')
let registration = document.querySelector('#registration')

registration.onclick = () => {

    let setlogin = document.querySelector('#login').value;
    let setpassword = document.querySelector('#password').value;
    console.log(setpassword)

    if (login === setlogin && password === setpassword) {
        output.textContent = `hello ${setlogin}`;
    }
    else if (setlogin === login) {
        output.textContent = `broken login`;
    }
    else if (setpassword === password) {
        output.textContent = `broken password`;
    } else {
        output.textContent = `broken password and login`
    }
}
//@yaroslav thanks!
// якщо логін вірний вивести "Привіт: ${setUser}"
// у всіх інших випадках "Не вірний ЛОгін і пароль"

// Єкстра 
// Вказувати що не вірно Login або Password



// switch  new!

switch ('item') {
    case 'iphone':
        console.log('Iphone: 1300$')
        break;
    case 'samsung':
        console.log('Samsung: 1000$')
        break;
    default:
        console.log('немає в наявності')
}

let a = 2;
let b = 4;

let resSimbol = '*'

let calcbtn = document.querySelector('#calcbtn');

calcbtn.onclick = () => {
    let a = Number(document.querySelector('#calcinp').value);
    let b = Number(document.querySelector('#calcinp1').value);
    let number = document.querySelector('#number');

    if (!isNaN(a) && !isNaN(b)) {
        let result = a * b;

        number.textContent = `Result: ${result}`;
    } else {
        number.textContent = "Please enter valid numbers!";
    }
};
