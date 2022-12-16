add = (x, y) => x+y;
sub = (x, y) => x-y;
mul = (x, y) => x*y;
div = (x, y) => x/y;

const display = document.querySelector(".display");

let operator = "mul";
let operands = [];
operands.push(1);
operands.push(8);
operands.shift;

//div by 0
//if there is a third operand, remove the first one
// operator = function name
validate = function (operator, x, y) { 
    if (operands.length === 3) operands.shift;
    if (operator === "div" && y === 0) return true;
}
//if validations passed, calls back the operator function
operate = function (operator, validate, x, y) {
    if (typeof operator !== "function") return;
    return validate(operator.name, x, y) ? "no u" : operator(x, y);
}

updateDisplay = function (e) {
    console.log(typeof(Number(e.target.value)));
    console.log(Number(e.target.value));
    if (typeof(Number(e.target.value)) === "number" && e.target.value !== NaN) {
        //if the value is a number, concat, store, etc.
        display.textContent += e.target.value;
    }
    switch (e.target.value) {
        case "add":
            operator = e.target.value
            break;
    }
}


// console.log(operate(window[operator], validate, ...operands));

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("click", e => updateDisplay(e)));
