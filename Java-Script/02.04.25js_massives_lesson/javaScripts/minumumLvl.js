// let a = [1, "sasha", { name: "sasha" }];
// a.map(item => { console.log(item) }); // massive vuvid 3 massuvy


// naitu usera 
let arr = ["user1", "user2", "user3", "user330", "user3303", "user404", "user1000",]
let btn = document.getElementById('btn')
let sel = document.getElementById('sel')
// //console.log(btn)

// prubirae dublikatu
let arrTest = new Set(arr)
console.log(arrTest)

arr.map(item => {
    sel.innerHTML += `<option value="${item}">${item}</option>`
})

btn.onclick = () => {
    arr.map(item => {
        //// console.log(item)
        if (item === sel.value) {
            console.log(item)
        }
    })
}


// registration fiend !!!!! ///// 
let sasha = {
    name: 'Sasha',
    age: 25,
    isMaried: false,
    actualAge: function () {
        return 2025 - this.age;
    },
}
console.log(sasha.age)

let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let btn1 = document.getElementById('btn1');
let error = document.getElementById('error');

let users = []

btn1.onclick = () => {
    users.push({
        name: 'Sasha',
        password: 'admin',
    })

    usersOut.innerHTML = users.length
    console.log(users)
}
///////////////////////////////////

// 3adacha 20:30
let btn2 = document.getElementById('btn2')

let usersCluster = []