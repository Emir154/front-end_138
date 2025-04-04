//Perfect number 
function isPerfectNumber(num) {
    if (num < 2) return false;
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num;
}
function findPerfectNumbersInRange(min, max) {
    let perfectNumbers = [];
    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) {
            perfectNumbers.push(i);
        }
    }
    return perfectNumbers;
}
//// Perf. num end
//Perfect num InRange
document.getElementById("checkButton").addEventListener("click", function () {
    let num = parseInt(document.getElementById("numberInput").value);
    let resultText = isPerfectNumber(num) ? `${num} є досконалим числом` : `${num} не є досконалим числом`;
    document.getElementById("result").textContent = resultText;
});

document.getElementById("findButton").addEventListener("click", function () {
    let min = parseInt(document.getElementById("minRange").value);
    let max = parseInt(document.getElementById("maxRange").value);
    let perfectNumbers = findPerfectNumbersInRange(min, max);
    document.getElementById("rangeResult").textContent = perfectNumbers.length > 0 ? `Досконалі числа: ${perfectNumbers.join(", ")}` : "У цьому діапазоні немає досконалих чисел";
});
////Perfect num InRange end
