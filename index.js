const displayCalc = document.getElementById("displayCalc");

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