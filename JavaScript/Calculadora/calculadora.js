var buttons = [
    "+",
    "-",
    "*",
    "/",
    7,
    8,
    9,
    4,
    5,
    6,
    1,
    2,
    3,
    0,
    ".",
    "C",
    "="
]

var calculatorKeys = document.getElementById("calculator-keys")
var calculatorScreen = document.getElementById("calculator-screen")
var operator

buttons.forEach((element, index) => {
    var button = document.createElement("button")

    calculatorKeys.appendChild(button)
    button.type = "button"
    button.value = element
    button.innerHTML = element

    if(index < 4){
        button.className = "operator"
        button.onclick = function(){
            if(!calculatorScreen.value.includes("+") && !calculatorScreen.value.includes("-") && !calculatorScreen.value.includes("*") && !calculatorScreen.value.includes("/")){
                calculatorScreen.value += element
                operator = calculatorScreen.value.substr(-1,1)
            }
        }
        
    }else if(index < 14){
        button.onclick = function(){
            if(calculatorScreen.value == 0){
                calculatorScreen.value = element
            }else{
                calculatorScreen.value += element
            }
        }
    }else if(index == 14){
        button.className = "decimal"
    }else if(index == 15){
        button.className = "all-clear"
        button.onclick = function(){
            calculatorScreen.value = 0
        }
    }else if(index == 16){
        button.className = "equal-sign"
        
        button.onclick = function(){
            var expression = calculatorScreen.value.split(/[+*/-]/)

            switch (operator) {
                case "+":
                    calculatorScreen.value = parseFloat(expression[0]) + parseFloat(expression[1])
                    break;
                case "-":
                    calculatorScreen.value = parseFloat(expression[0]) - parseFloat(expression[1])
                    break;
                case "*":
                    calculatorScreen.value = parseFloat(expression[0]) * parseFloat(expression[1])
                    break;
                case "/":
                    calculatorScreen.value = parseFloat(expression[0]) / parseFloat(expression[1])
                    break;
            
                default:
                    break;
            }
        }
    }

    
});