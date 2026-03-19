let input = document.querySelector("#inputText");
document.querySelector("#option3").checked = true;

function logTextInput(){
    console.log(parseFloat(input.value));
}

input.addEventListener("input", logTextInput);

function logRadio(){
console.log(document.querySelector('input[name="tip"]:checked').value)
}

let body = document.querySelector("body")
body.addEventListener("click", logRadio)


function calculateTip(){
    tipAmount = 0
    tipAmount = (parseFloat(input.value) * document.querySelector('input[name="tip"]:checked').value)
    console.log(tipAmount)
    let tip = document.querySelector("#tipAmount")
    let roundedTip = tipAmount.toFixed(2);
    tip.textContent = `$${roundedTip}`
    let total = document.querySelector("#totalAmount")
    let roundedTotal = (tipAmount + parseFloat(input.value)).toFixed(2);
    total.textContent = `$${roundedTotal}`
}

body.addEventListener("click", calculateTip);
input.addEventListener("input", calculateTip);

