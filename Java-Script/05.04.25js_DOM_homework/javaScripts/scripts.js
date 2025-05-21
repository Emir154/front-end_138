let li = document.getElementById('li')

let playList = [{
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN"
},
{
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY"
},
{
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD"
},
{
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER"
},
{
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER"
},
{
    author: "AC/DC",
    song: "BACK IN BLACK"
},
{
    author: "QUEEN",
    song: "WE WILL ROCK YOU"
},
{
    author: "METALLICA",
    song: "ENTER SANDMAN"
}
];

playList.forEach(function (item) {
    li.innerHTML += `<li>${item.author} - ${item.song}</li>`
})


//modal window

let btn = document.getElementById('Btn')

btn.onclick = () => {
    if (document.getElementById('modal')) return;

    let box = document.createElement("div")

    box.style.display = 'grid'
    box.style.textAlign = 'center'
    box.style.justifyContent = 'center'

    box.innerHTML = `<div><h1>Good day!</h1>
    <button id="btnoff">Close</button><h4>=========================================</h4>
    </div>`
    box.id = "modal";
    document.body.appendChild(box);

    document.body.appendChild(box);

    document.getElementById("btnoff").onclick = () => {
        box.remove();
    };
}

