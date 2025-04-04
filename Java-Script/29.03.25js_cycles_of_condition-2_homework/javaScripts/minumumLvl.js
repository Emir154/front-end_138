// age start
document.querySelector("#checkAge").onclick = () => {
    let age = parseInt(document.querySelector("#ageInput").value);
    let result = "";

    if (age >= 0 && age <= 11) result = "Ви дитина";
    else if (age >= 12 && age <= 17) result = "Ви підліток";
    else if (age >= 18 && age <= 59) result = "Ви дорослий";
    else if (age >= 60 && age <= 128) result = "Ви пенсіонер";
    else if (age >= 129) result = "Некоректні дані, введіть ваш вік від 0 до 128";
    else result = "Некоректні дані";

    document.querySelector("#ageResult").innerHTML = result;
};
//// age end
// special symbol
document.querySelector("#getSymbol").onclick = () => {

    let num = parseInt(document.querySelector("#numInput").value);
    let symbols = [")", "!", "@", "#", "$", "%", "^", "&", "*", "("];
    let result = (num >= 0 && num <= 9) ? `Спецсимвол: ${symbols[num]}` : "Некоректне число!";

    document.querySelector("#symbolResult").innerHTML = result;
};
//// special symbol end
// vuchiselnuk summy
document.querySelector("#sumNumbers").onclick = () => {
    let start = parseInt(document.querySelector("#startNum").value);
    let end = parseInt(document.querySelector("#endNum").value);
    let sum = 0;

    for (let i = start; i <= end; i++) sum += i;

    document.querySelector("#sumResult").innerHTML = `Сума чисел: ${sum}`;
};
//// vuchiselnuk summy end
// NSD 
document.querySelector("#findGCD").onclick = () => {
    let a = parseInt(document.querySelector("#numA").value);
    let b = parseInt(document.querySelector("#numB").value);

    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    document.querySelector("#gcdResult").innerHTML = `НСД: ${a}`;
};
//// NSD end
// dilnuku
document.querySelector("#findDivisors").onclick = () => {
    let num = parseInt(document.querySelector("#divNum").value);
    let divisors = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) divisors.push(i);
    }

    document.querySelector("#divisorsResult").innerHTML = `Дільники: ${divisors.join(", ")}`;
};
//// dilnuku end