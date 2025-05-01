function calculateForm() {
    var conversionInput = document.forms["form-input"]["temp-input"];
    var numberInput = parseInt(conversionInput.value);
    var finalInput = numberInput * 9/5 + 32;
    var unitC = document.getElementById("unit-label-C").textContent;
    var unitF = document.getElementById("unit-label-F").textContent;
    var oriInput = document.getElementById("input-label").textContent;
    var oriOutput = document.getElementById("output-label").textContent;


    if ( conversionInput === "") {
        alert("Please input a number")
        return false;
    }

    setSenderUICtoF(conversionInput, finalInput, unitC, unitF, oriInput, oriOutput);
    return false;
}

function setSenderUICtoF(conversionInput, finalInput, unitC, unitF, oriInput, oriOutput) {
    document.getElementById("input-label").innerHTML = oriInput;
    document.getElementById("output-label").innerHTML = oriOutput;
    document.getElementById("temp-output").value = finalInput;
    document.getElementById("calculate-detail").value = conversionInput.value + unitC + " * (9/5) + 32 = " + finalInput + unitF;
}


function resetForm() {
    document.getElementById("temp-input").value = "";
    document.getElementById("temp-output").value = "";
    document.getElementById("calculate-detail").value = "";
}

var counter = 0;

function reverseForm1() {
    counter++;
    var conversionInput = document.forms["form-input"]["temp-input"];
    var numberInput = parseInt(conversionInput.value);
    var finalInput = numberInput * 9/5 + 32;
    var unitC = document.getElementById("unit-label-C").textContent;
    var unitF = document.getElementById("unit-label-F").textContent;
    var oriInput = document.getElementById("input-label").textContent;
    var oriOutput = document.getElementById("output-label").textContent;

    if ( conversionInput === "") {
        alert("Please input a number")
        return false;
    }

    if (counter % 2 === 1) {
        console.log("Yes")
    }
    if (counter % 2 === 0) {
        console.log("No")
    }

    setSenderUIFtoC(conversionInput, finalInput, unitC, unitF, oriInput, oriOutput);
    return false;
}


function setSenderUIFtoC(conversionInput, finalInput, unitC, unitF, oriInput, oriOutput) {
        document.getElementById("input-label").innerHTML = oriOutput;
        document.getElementById("output-label").innerHTML = oriInput;
        document.getElementById("temp-input").value = finalInput;
        document.getElementById("temp-output").value = (conversionInput.value-32) * 5/9;
        document.getElementById("calculate-detail").value = "(" + finalInput + unitF +  
        " - 32) * 5/9  = " + (conversionInput.value-32) * 5/9 + unitC ;
    }

