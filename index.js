const displayCalc = document.getElementById("displayCalc");
function updateDisplay(number){
    
    displayCalc.value+=number;
}
function addDot(){
    displayCalc.value+='.';
}

function clearDisplay(){
    displayCalc.value='';
}