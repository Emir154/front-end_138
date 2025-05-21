// palidrome
document.querySelector("#checkPalindrome").onclick = () => {

    let num = document.querySelector("#palindromeInput").value;
    let result = (num.length === 5 && num === num.split('').reverse().join('')) ? "Це паліндром!" : "Не паліндром!";
    document.querySelector("#palindromeResult").innerHTML = result;
};
////palidrome end
//ro3rahunok summy
document.querySelector("#calculateDiscount").onclick = () => {
    let amount = parseFloat(document.querySelector("#purchaseAmount").value);
    let discount = amount >= 500 ? 7 : amount >= 300 ? 5 : amount >= 200 ? 3 : 0;
    let finalAmount = amount - (amount * discount / 100);
    document.querySelector("#discountResult").innerHTML = `Сума до оплати: ${finalAmount.toFixed(2)} грн (Знижка ${discount}%)`;
}
//// end
// statistics
document.querySelector("#inputNumbers").onclick = () => {
    let positives = 0, negatives = 0, zeros = 0, evens = 0, odds = 0;

    for (let i = 0; i < 10; i++) {
        let num = parseInt(prompt(`Введіть число ${i + 1}:`));
        if (num > 0) positives++;
        else if (num < 0) negatives++;
        else zeros++;
        if (num % 2 === 0) evens++;
        else odds++;
    }
    document.querySelector("#numbersStats").innerHTML = `Додатні: ${positives}, Від'ємні: ${negatives}, Нулі: ${zeros}, Парні: ${evens}, Непарні: ${odds}`;
};
// //statistics end
// days
let days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота", "Неділя"];
let currentDay = 0;
document.querySelector("#showNextDay").onclick = () => {
    currentDay = (currentDay + 1) % 7;
    document.querySelector("#dayResult").innerHTML = `День тижня: ${days[currentDay]}`;
};
//// days end
