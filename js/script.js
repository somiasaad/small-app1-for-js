var button = document.getElementById("btn")
var msgEle = document.getElementById("msg")
var inputEle = document.getElementById("input")



button.onclick = function() {
    // get value from input 
    var inputvalue = inputEle.value
        // put input value into p
    if (inputvalue != "") {
        msgEle.innerHTML = inputEle.value
        inputEle.value = ""
    }
}