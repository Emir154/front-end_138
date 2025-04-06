

// i++ -інкремент
// і-- -дикримент
// ++i пост-інкремент
// --і пост-дикримент

// цикли від 1 до 10 
// старт // стоп // крок
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i == 5) {
        document.querySelector('ul').innerHTML += `<li>hello world ${i}</li>`
    }
    if (i == 3) {
        console.log("vasya" + i); break
    }
}
// let start = +prompt("start")
// let stop = +prompt("stop")
for (let i = start; i < stop; i++) {
    console.log(i)
}

let i = 0;
while (i < 10) {
    console.log(i); i++
}


