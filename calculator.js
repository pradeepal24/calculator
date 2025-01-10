const display = document.getElementById("display");
function appendToDisplay(input){
    display.value += input;
}
function clearDisplay(){
    display.value="";
}
function clearOneElement() {
    var display = document.getElementById('display');
    // Remove the last character from the display
    display.value = display.value.slice(0, -1);
}

function calculate(){
    try{ display.value=eval(display.value);}
    catch(error){
       display.value = "invalid";
    }
    
    
}
