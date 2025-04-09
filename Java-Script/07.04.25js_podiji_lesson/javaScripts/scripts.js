// massive cats
// let cats = [
//     {
//         name: "cotVasya",
//         title: "порода1"
//     },
//     {
//         name: "cotJonny",
//         title: "порода2"
//     },
//     {
//         name: "cotBarsik",
//         title: "порода3"
//     },
//     {
//         name: "cotCheck",
//         title: "порода4"
//     },
// ]
// document.querySelector('select')

// let arr = []

// cats.map(item => {
//     arr.push(item.title)
//     document.querySelector('select').innerHTML += `<option>${item.title}</option>`
// })
// function sort() { }
// console.log(arr)
// //// end
// let arr2 = ["item1", "item2", "item3", "item4", "item5",];
// let arr3 = ["item1", "item2", "item3", "item4", "item5",];
// let newarr = [...arr2, ...arr3];


// // btn

// let btn = document.querySelector('.btn')
// btn.onclick = () => {
//     console.log("test 1")
// }
// btn.onclick = () => {
//     console.log("test 2")
// }
// poganyi pruklad


// horoshiy pruklad

// btn.addEventListener('click', () => {
//     console.log("test 2")
// })
// btn.addEventListener('click', () => {
//     console.log("test 1")
// })

// addEventListener pruklad !!!

// let inp = document.querySelector('.inp')

// inp.addEventListener('change', () => {
//     console.log(inp.value)
// })

// let select = document.getElementById('select');

// let users = [];

let out = document.querySelector('.out')
let sel = document.querySelector('.sel')

out.innerHTML = '--'
sel.addEventListener('change', () => {
    if (sel.value === 'v1') {
        out.innerHTML = '--'
    }
    else if (sel.value === 'v2') {
        out.innerHTML = 'Man'
    }
    else if (sel.value === 'v3') {
        out.innerHTML = 'Woman'
    }
})

window.addEventListener('keyup', function (event) {
    console.log(event)
    if (event.code == 'ArrowRight') {
        console.log('Right');
        console.log(ball.style);
        move = move + 10
        ball.style.transform = `translateX(${move}px)`
    }
})
