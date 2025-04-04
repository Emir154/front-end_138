//Functions
document.getElementById("showFunctions").addEventListener("click", function () {
    document.getElementById("funcOutput").textContent = "Function Declaration, Function Expression, Arrow Function, IIFE";
});
//// end
//Argumentss
document.getElementById("countArgsBtn").addEventListener("click", function () {
    const args = document.getElementById("argsInput").value.split(",");
    document.getElementById("argsOutput").textContent = `Передано аргументів: ${args.length}`;
});
//// end
//Number
document.getElementById("compareBtn").addEventListener("click", function () {
    const a = Number(document.getElementById("num1").value);
    const b = Number(document.getElementById("num2").value);
    const result = a < b ? -1 : a > b ? 1 : 0;
    document.getElementById("compareOutput").textContent = `Результат: ${result}`;
});
//// end
// Factorial
document.getElementById("factorialBtn").addEventListener("click", function () {
    function factorial(n) { return n === 0 ? 1 : n * factorial(n - 1); }
    const num = Number(document.getElementById("factorialInput").value);
    document.getElementById("factorialOutput").textContent = `Факторіал: ${factorial(num)}`;
});
//// factorial end
//  Number
document.getElementById("combineBtn").addEventListener("click", function () {
    const a = document.getElementById("digit1").value;
    const b = document.getElementById("digit2").value;
    const c = document.getElementById("digit3").value;
    document.getElementById("combineOutput").textContent = `Об'єднане число: ${a}${b}${c}`;
});
//// Number end
// Figures
document.getElementById("areaBtn").addEventListener("click", function () {
    const width = Number(document.getElementById("width").value);
    const height = document.getElementById("height").value ? Number(document.getElementById("height").value) : width;
    document.getElementById("areaOutput").textContent = `Площа: ${width * height}`;
});
////Figures end