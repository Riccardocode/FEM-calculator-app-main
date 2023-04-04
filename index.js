const displayCalc = document.getElementById("displayCalc");
const selectedTheme = document.getElementById("selection");
const variables = document.querySelector(':root');
const choise1 = document.getElementById("choise1");
const choise2 = document.getElementById("choise2");
const choise3 = document.getElementById("choise3");

choise1.addEventListener("click", changeTheme1);
choise2.addEventListener("click", changeTheme2);
choise3.addEventListener("click", changeTheme3);


let accumulator=0;
let currentValue = 0;
let operand = '';
let convertedNumber=0;
let count =0;
function updateDisplay(number){
    
    displayCalc.value+=number;
}
function addDot(){
    displayCalc.value+='.';
}
function resetDisplay(){
    displayCalc.value='';
    accumulator = 0;
    count =0;
}

function clearDisplay(){
    displayCalc.value='';
    
}

function operation(symbol){
    operand = symbol;
    if(count === 0){
        accumulator = parseFloat(displayCalc.value);
    }
    else{
        switch(symbol){
            case "+":
            accumulator += parseFloat(displayCalc.value);
                break;
            case "-":
                accumulator = accumulator - parseFloat(displayCalc.value);
                break;
            case "*":
                accumulator = accumulator * parseFloat(displayCalc.value);
                break;
            case "/":
                accumulator = accumulator / parseFloat(displayCalc.value);
                break;
            default:
                console.log("nessuna operazione");
        }
    }    
    console.log(accumulator)
    displayCalc.value='';
    count +=1;
}


function equal(){
    if(displayCalc.value ==''){
        displayCalc.value = accumulator.toLocaleString('en-US');
    }
    else{
       
        operation(operand);
        displayCalc.value= accumulator.toLocaleString('en-US');
        console.log(accumulator);
    }
    count +=1;    
}

function changeColors(theme){
    let changeColor;
    let support;

    support = getComputedStyle(variables);
    
    changeColor = support.getPropertyValue(`--buttonsT${theme}`);
    variables.style.setProperty("--buttons", changeColor );
    
    changeColor = support.getPropertyValue(`--text-buttons${theme}`);
    variables.style.setProperty("--text-buttons", changeColor);

    changeColor = support.getPropertyValue(`--buttons-hover${theme}`);
    variables.style.setProperty("--buttons-hover", changeColor);
    
    changeColor = support.getPropertyValue(`--pressDelT${theme}`);
    variables.style.setProperty("--buttonDel", changeColor);
    
    changeColor = support.getPropertyValue(`--backgroundColorT${theme}`);
    variables.style.setProperty("--backgroundColor", changeColor);

    changeColor = support.getPropertyValue(`--topNumbers${theme}`);
    variables.style.setProperty("--topNumbers", changeColor);

    changeColor = support.getPropertyValue(`--selectorBar-background${theme}`);
    variables.style.setProperty("--selectorBar-background", changeColor);

    changeColor = support.getPropertyValue(`--selectorCircle${theme}`);
    variables.style.setProperty("--selectorCircle", changeColor);
    
    changeColor = support.getPropertyValue(`--shadowButton${theme}`);
    variables.style.setProperty("--shadowButton", changeColor);

    changeColor = support.getPropertyValue(`--displayCalc-background${theme}`);
    variables.style.setProperty("--displayCalc-background", changeColor);

    changeColor = support.getPropertyValue(`--button-background${theme}`);
    variables.style.setProperty("--button-background", changeColor);

    changeColor = support.getPropertyValue(`--button-DR-background-hover${theme}`);
    variables.style.setProperty("--button-DR-background-hover", changeColor);
   
    changeColor = support.getPropertyValue(`--button-equal-shadow-background-hover${theme}`);
    variables.style.setProperty("--button-equal-shadow-background-hover", changeColor);
    
    changeColor = support.getPropertyValue(`--button-equal-background-hover${theme}`);
    variables.style.setProperty("--button-equal-background-hover", changeColor);
    
    changeColor = support.getPropertyValue(`--text-hover${theme}`);
    variables.style.setProperty("--text-hover", changeColor);

}

function changeTheme1(){
    selectedTheme.style.left="0px";
    changeColors(1);
    console.log("changed to 1");
}

function changeTheme2(){
    selectedTheme.style.left="22px";
    changeColors(2);   
    console.log("changed to 2");
}

function changeTheme3(){
    selectedTheme.style.left="46px";
    changeColors(3); 
    console.log("changed to 3");
}

