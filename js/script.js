var switchMode = false; 

function FtoC() {
    switchMode = !switchMode;
    document.getElementById("temp-input").value = "";
    document.getElementById("temp-output").value = "";
    document.getElementById("calculate-detail").value = "";
    var oriInput = document.getElementById("original-input").textContent;
    var oriOutput = document.getElementById("original-output").textContent;
    var oriHeader = document.getElementById("original-h").textContent;
    var altHeader = document.getElementById("alternate-h").textContent;
    var oriExp = document.getElementById("original-exp").innerHTML;
    var altExp = document.getElementById("alternate-exp").innerHTML;
    var oriFormula1 = document.getElementById("original-f1").innerHTML;
    var altFormula1 = document.getElementById("alternate-f1").innerHTML;
    var oriFormula2 = document.getElementById("original-f2").innerHTML;
    var altFormula2 = document.getElementById("alternate-f2").innerHTML;
    if (switchMode) {
        document.getElementById("input-label").innerHTML = oriOutput;
        document.getElementById("output-label").innerHTML = oriInput;
        document.getElementById("original-header").innerHTML = altHeader;
        document.getElementById("original-explanation").innerHTML = altExp;
        document.getElementById("original-formula1").innerHTML = altFormula1;
        document.getElementById("original-formula2").innerHTML = altFormula2;
    } else {
        document.getElementById("input-label").innerHTML = oriInput;
        document.getElementById("output-label").innerHTML = oriOutput;
        document.getElementById("original-header").innerHTML = oriHeader;
        document.getElementById("original-explanation").innerHTML = oriExp;
        document.getElementById("original-formula1").innerHTML = oriFormula1;
        document.getElementById("original-formula1").innerHTML = oriFormula2;
    }

}

function calculateForm() {
    if (switchMode) {
        var conversionInput = document.forms["form-input"]["temp-input"];
        var numberInput = parseInt(conversionInput.value);
        var finalInput = (numberInput-32) * 5/9;
        var unitC = document.getElementById("unit-label-C").textContent;
        var unitF = document.getElementById("unit-label-F").textContent;
        var oriInput = document.getElementById("original-input").textContent;
        var oriOutput = document.getElementById("original-output").textContent;
        console.log("Yes")
    } else {
        var conversionInput = document.forms["form-input"]["temp-input"];
        var numberInput = parseInt(conversionInput.value);
        var finalInput = numberInput * 9/5 + 32;
        var unitC = document.getElementById("unit-label-C").textContent;
        var unitF = document.getElementById("unit-label-F").textContent;
        var oriInput = document.getElementById("original-input").textContent;
        var oriOutput = document.getElementById("original-output").textContent;
    }
    
    document.getElementById("reverse-button").disabled = false;

    if ( conversionInput === "") {
        alert("Please input a number")
        return false;
    }

    setSenderUICtoF(conversionInput, finalInput, unitC, unitF, oriInput, oriOutput);
    return false;
}

function setSenderUICtoF(conversionInput, finalInput, unitC, unitF, oriInput, oriOutput) {
    document.getElementById("temp-output").value = finalInput;
    if (switchMode) {
        document.getElementById("input-label").innerHTML = oriOutput;
        document.getElementById("output-label").innerHTML = oriInput;
        document.getElementById("calculate-detail").value = "(" + conversionInput.value + unitF +  
        " - 32) * 5/9  = " + finalInput + unitC 
    } else {
        document.getElementById("input-label").innerHTML = oriInput;
        document.getElementById("output-label").innerHTML = oriOutput;
        document.getElementById("calculate-detail").value = conversionInput.value + unitC + " * (9/5) + 32 = " 
        + finalInput + unitF;
    }
}

function reverseForm() {
    document.getElementById("reverse-button").disabled = true;
    if (switchMode) {
        var conversionInput = document.forms["form-input"]["temp-input"];
        var numberInput = parseInt(conversionInput.value);
        var finalInput = (numberInput-32) * 5/9;
        var unitC = document.getElementById("unit-label-C").textContent;
        var unitF = document.getElementById("unit-label-F").textContent;
        var oriInput = document.getElementById("original-input").textContent;
        var oriOutput = document.getElementById("original-output").textContent;
    } else {
        var conversionInput = document.forms["form-input"]["temp-input"];
        var numberInput = parseInt(conversionInput.value);
        var finalInput = numberInput * 9/5 + 32;
        var unitC = document.getElementById("unit-label-C").textContent;
        var unitF = document.getElementById("unit-label-F").textContent;
        var oriInput = document.getElementById("original-input").textContent;
        var oriOutput = document.getElementById("original-output").textContent;
    }

    setSenderUIFtoC(conversionInput, finalInput, unitC, unitF, oriInput, oriOutput);
    return false;
}

function setSenderUIFtoC(conversionInput, finalInput, unitC, unitF, oriInput, oriOutput) {
    if (switchMode) {
        document.getElementById("input-label").innerHTML = oriInput;
        document.getElementById("output-label").innerHTML = oriOutput;
        document.getElementById("temp-input").value = finalInput;
        document.getElementById("temp-output").value = conversionInput.value * 9/5 + 32;
        document.getElementById("calculate-detail").value = finalInput + unitC + " * (9/5) + 32 = " 
        + (conversionInput.value * 9/5 + 32) + unitF;
    } else {
        document.getElementById("input-label").innerHTML = oriOutput;
        document.getElementById("output-label").innerHTML = oriInput;
        document.getElementById("temp-input").value = finalInput;
        document.getElementById("temp-output").value = (conversionInput.value-32) * 5/9;
        document.getElementById("calculate-detail").value = "(" + finalInput + unitF +  
        " - 32) * 5/9  = " + (conversionInput.value-32) * 5/9 + unitC ;
    }

} 

function resetForm() {
    document.getElementById("temp-input").value = "";
    document.getElementById("temp-output").value = "";
    document.getElementById("calculate-detail").value = "";
    document.getElementById("reverse-button").disabled = false;
    var oriInput = document.getElementById("original-input").textContent;
    var oriOutput = document.getElementById("original-output").textContent;
    if (switchMode) {
        document.getElementById("input-label").innerHTML = oriOutput;
        document.getElementById("output-label").innerHTML = oriInput;
    } else {
        document.getElementById("input-label").innerHTML = oriInput;
        document.getElementById("output-label").innerHTML = oriOutput;
    }


}