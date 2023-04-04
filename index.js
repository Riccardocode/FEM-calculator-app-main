const displayCalc = document.getElementById("displayCalc");
const selectedTheme = document.getElementById("selection");
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

function changeTheme1(){
    selectedTheme.style.left="0px";
    console.log("changed to 1");
}

function changeTheme2(){
    selectedTheme.style.left="22px";
    console.log("changed to 2");
}

function changeTheme3(){
    selectedTheme.style.left="46px";
    console.log("changed to 3");
}