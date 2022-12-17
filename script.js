add = (x, y) => x+y;
sub = (x, y) => x-y;
mul = (x, y) => x*y;
div = (x, y) => x/y;

const display = document.querySelector(".display");

let operator;
let operands = [];

let shouldClear;

//div by 0
// operator = function name
validate = function (operator, x, y) { 
    if (operator === "div" && y === 0) return true;
}
//if validations passed, calls back the operator function
operate = function (operator, validate, x, y) {
    if (typeof operator !== "function") return;
    return validate(operator.name, x, y) ? "no u" : operator(x, y);
}

inputNumbers = function (value) {
    if (!isNaN(Number(value))) {
        if((display.textContent === "0" && value !== ".") || shouldClear)
            display.textContent = "";
        shouldClear = false;
        return display.textContent += value;
    } else if (value === "." && !display.textContent.includes(".")) {
        return display.textContent += value;
    }
}

getOperators = function (ope) {
    switch (ope) {
        case "clear":
            reload();
            break;
        case "operate":
            switch (operands.length) {
                case 0:
                    if (display.textContent !== "0") operands.push(Number(display.textContent));
                    break;
                case 1:
                    operands.push(Number(display.textContent));
            }
            if(operands.length === 2) {
                    operands[0] = operate(window[operator], validate, ...operands);
                    operands.pop();
                    display.textContent = operands[0];
                    shouldClear = true;
            }
            break;           
        default:
            operator = ope;
            operands.push(Number(display.textContent));
            shouldClear = true;
    }

}

reload = function () {
    operator = "";
    operands = [];
    display.textContent = "0";
}


// console.log(operate(window[operator], validate, ...operands));

const keys = document.querySelectorAll(".key-num");
keys.forEach(key => key.addEventListener("click", e => inputNumbers(e.target.value)));
const keysOperator = document.querySelectorAll(".key-operator");
keysOperator.forEach(key => key.addEventListener("click", e => getOperators(e.target.value)));
