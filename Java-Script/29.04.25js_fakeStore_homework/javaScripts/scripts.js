const loginBtn = document.querySelector('#btn')

loginBtn.addEventListener('click', function (e) {
    const username = document.querySelector('#username').value.trim()
    const password = document.querySelector('#password').value.trim()
    const error = document.querySelector('.error-msg')

    if (username === '', password === '') {
        error.textContent = 'Заповніть оба поля!';
        e.preventDefault()
        return;
    }

    fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application-json' },
        body: JSON.stringify({ username, password })
    })
        .then(res => res.json())
        .then(data => {

            if (data.token) {
                console.log('Успішний вхід в аккаунт')
            }
            else {
                console.log('У вході в аккаунт відхилено')
            }

        })
        .catch(error => console.error(error))
})
