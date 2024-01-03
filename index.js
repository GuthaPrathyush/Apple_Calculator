let display = document.getElementById("display_input");
function clearDisplay() {
    display.style.fontSize = "3rem";
    display.value = "0";
}

function operatorKey(key) {
    return (key === "+" || key === "-" || key === "/" || key === "*" || key === "%");
}
function appendDisplay(key) {
    if((display.value==="0" && !operatorKey(key)) || display.value==="Syntax Error" || display.value==="Undefined" || display.value==="∞") {
        display.value = "";
        display.style.fontSize = "3rem";
    }
    display.value = display.value+key;
    handleInput();
}

function calculatePercent() {
    try {
        display.value = eval(display.value)/100;
    }
    catch (e){
        display.value = "Syntax Error";
    }
}

function calculate() {
    try {
        x = eval(display.value);
        if(isNaN(x)) {
            display.value = "Undefined";
        }
        else if(!isFinite(x)) {
            display.
            display.value = "∞";
        }
        else {
            display.value = x;
        }
    }
    catch (e) {
        display.style.fontSize = "2rem";
        display.value = "Syntax Error";
    }
}

function handleInput() {
    display.scrollLeft =  display.scrollWidth;
}
