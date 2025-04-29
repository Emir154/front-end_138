// fetch це api
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => console.log(data));


// продукти 
fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
        const out = document.querySelector('.out-products');
        out.style.display = 'grid'; // сетка
        out.style.gridTemplateColumns = 'repeat(3, 1fr)';
        out.style.gap = '10px';
        data.forEach(product => {
            out.innerHTML += `<div style="
                display: flex;
                             flex-direction: column;
            border: 1px solid #ccc";>
          <h2 style="
          font-family: sans-serif;">${product.title}</h2>
          <p>${product.price} $</p>
          <img src="${product.image}" width="100">
          <button style="
          width: 100px;
            cursor:pointer;">Add cart</button>
        </div>`;
        });
    });


/// на память (тест!)
// // логіни та паролі
// const credentials = { username: 'john_doe', password: 'pass123' };
// fetch('https://fakestoreapi.com/auth/login', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(credentials)
// })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Токен:', data.token);
//     })
//     .catch(error => console.error('Неправильний логін:'), error);