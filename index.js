let num1 = 8;
let num2 = 2;
let result = 0


document.getElementById("first-operand").textContent = num1;
document.getElementById("second-operand").textContent = num2;



let sumEl = document.getElementById("sum-el");

function add() {
    result = num1 + num2;
    sumEl.textContent =   "Sum: " +result
}

function subtract() {
    result = num1 - num2;
    sumEl.textContent =  "Sum: " +result

}

function divide() {
     result  = num1 / num2;
    sumEl.textContent =   "Sum: " +result

}
 
function multiply() {
    result  = num1 * num2;
    sumEl.textContent =   "Sum: " +result

}
