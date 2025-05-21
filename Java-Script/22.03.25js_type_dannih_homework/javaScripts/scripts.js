//Мінимум ============//
// let gigabytes = document.querySelector('#gigabyteinp').value; //Ввод числа

// let informationMB = document.querySelector('#infoMB');
// let spaceofMB = document.querySelector('#spaceMB');

// let btnsubmit = document.querySelector('#btn');

// btnsubmit.onclick = () => {
//     let mb = (+gigabytes.value * 1000);

//     document.querySelector('#infoMB').innerHTML = Math.floor = (mb / 850); // Ділення
//     document.querySelector('#spaceMB').innerHTML = mb % 850;
// }
//Мінимум ============ end//
////-----------------------------------------------////
//Мінимум ============//
let btnsubmit = document.querySelector('#btn');

btnsubmit.onclick = () => {
    let gigabytes = document.querySelector('#gigabyteinp').value;
    let fileSizeMB = 820; // Розмір файла в МБ
    let mb = gigabytes * 1024; // Переводимо ГБ в МБ

    // Файли та їх останок
    let fileCount = Math.floor(mb / fileSizeMB);
    let remainingSpace = mb % fileSizeMB;

    // Виводим результати
    document.querySelector('#infoMB').innerHTML = `Файли(ів) 850 МБ: ${fileCount}шт`;
    document.querySelector('#spaceMB').innerHTML = `Вільного місця: ${remainingSpace} МБ`;
};
//Мінимум ============ end//
// medium =====================//
document.querySelector('#calculateBtn1').onclick = () => {
    const money = parseFloat(document.querySelector('#moneyInput').value);
    const price = parseFloat(document.querySelector('#chocoPrice').value);

    if (money > 0 && price > 0) {
        const chocoCount = Math.floor(money / price);
        const change = (money % price).toFixed(2);

        document.querySelector('#result').innerHTML =
            `Ви можете купити ${chocoCount} шоколадок у вас залишиться ${change} ₴ здачі.`;
    } else {
        document.querySelector('#result').innerHTML = 'Будь ласка, введіть коректні дані!';
    }
};
// medium ===================end//
////----------------------------------------------////
// Максимум =============//
document.querySelector('#calculateBtn').onclick = () => {
    const depositAmount = parseFloat(document.querySelector('#depositAmount').value);
    const annualRate = 5; // 5% річних
    const months = 2; // на 2 місяці
    const monthsInYear = 12;
    if (depositAmount && depositAmount > 0) {
        const interest = (depositAmount * (annualRate / 100)) * (months / monthsInYear).toFixed(2);

        document.querySelector('#interestResult').innerHTML = `Нараховані відсотки:${interest} ₴`;
    } else {
        document.querySelector('#interestResult').innerHTML = 'Будь ласка, введіть коректну суму!';
    }
};
// Максимум ============= end//
