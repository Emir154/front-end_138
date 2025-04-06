let users = [];

let inpName = document.getElementById('inpName');
let inpAge = document.getElementById('inpAge');
let inpMail = document.getElementById('inpMail');
let inpPhone = document.getElementById('inpPhone');
let inpPassword = document.getElementById('inpPassword');
let inpPasswordRep = document.getElementById('inpPasswordRep');

let gender = document.getElementById('gender');

let btn = document.getElementById('btn')
let registerBtn = document.getElementById('registerbBtn');
let resetBtn = document.getElementById('resetBtn');

let userOut = document.querySelector('.user-out');
let output = document.querySelector('.out');

registerBtn.addEventListener('click', () => {
    let name = inpName.value.trim();
    let age = inpAge.value.trim();
    let mail = inpMail.value.trim();
    let phone = inpPhone.value.trim();
    let password = inpPassword.value;
    let passwordRep = inpPasswordRep.value;
    let selectedGender = gender.value;

    if (password !== passwordRep) {
        alert('Помилка: Пароли не співпадають!');
        return;
    }

    let avatar = selectedGender === "m" ? "./img/man.jpg" :
        selectedGender === "w" ? "./img/woman.jpg" :
            "./img/null.jpg";

    let genderText = selectedGender === "m" ? "Чоловік" :
        selectedGender === "w" ? "Жінка" : "Невідомо";

    let user = {
        name,
        age,
        mail,
        phone,
        gender: genderText,
        avatar
    };

    users.push(user);

    userOut.textContent = users.length;

    inpName.value = "";
    inpAge.value = "";
    inpMail.value = "";
    inpPhone.value = "";
    inpPassword.value = "";
    inpPasswordRep.value = "";
    gender.value = "";
});

function displayUsers() {
    output.innerHTML = "";

    users.forEach(user => {
        output.innerHTML += `
            <div class="item">
                <img src="${user.avatar}" alt="Аватар" width="50">
                <h5>Імя: ${user.name}</h5>
                <ul>
                    <li>Років: ${user.age}</li>
                    <li>Email: ${user.mail}</li>
                    <li>Телефон: ${user.phone}</li>
                    <li>Стать: ${user.gender}</li>
                </ul>
            </div>
        `;
    });
}

resetBtn.addEventListener('click', () => {
    displayUsers();
});

