function calculateForm() {
    var conversionInput = document.forms["form-input"]["temp-input"];
    var numberInput = parseInt(conversionInput.value);
    var finalInput = numberInput * 9/5 + 32;
    var unitC = document.getElementById("unit-label-C").textContent;
    var unitF = document.getElementById("unit-label-F").textContent;

    if ( conversionInput === "") {
        alert("Please input a number")
        return false;
    }

    setSenderUI(conversionInput, finalInput, unitC, unitF);
    return false;
}

function setSenderUI(conversionInput, finalInput, unitC, unitF) {
    document.getElementById("temp-output").innerHTML = finalInput;
    document.getElementById("calculate-detail").innerHTML = conversionInput.value + unitC + " * (9/5) + 32 = " + finalInput + unitF;
}


function resetForm() {
    document.getElementById("temp-input").value = "";
    document.getElementById("temp-output").innerHTML = "";
    document.getElementById("calculate-detail").innerHTML = "";
}


function reverseForm() {
    var conversionInput = document.forms["form-input"]["temp-input"];
    var numberInput = parseInt(conversionInput.value);
    var finalInput = numberInput * 9/5 + 32;
    var unitC = document.getElementById("unit-label-C").textContent;
    var unitF = document.getElementById("unit-label-F").textContent;

    if ( conversionInput === "") {
        alert("Please input a number")
        return false;
    }

    setSenderUI(conversionInput, finalInput, unitC, unitF);
    return false;
}

function setSenderUI(conversionInput, finalInput, unitC, unitF) {
    document.getElementById("temp-input").value = finalInput
    document.getElementById("temp-output").innerHTML = conversionInput.value;
    document.getElementById("calculate-detail").innerHTML = "(" + finalInput + unitF +  " - 32) * 5/9  = " + conversionInput.value + unitC ;
}

