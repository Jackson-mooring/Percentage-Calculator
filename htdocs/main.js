'use strict'

function percentage() {
	var numX = document.querySelector('#numX').value;
	var numY = document.querySelector('#numY').value;
	var result = "RESULT: " + (numX / numY) * (100) + "%";
	if (result === "RESULT: NaN%") {
		result = "Please Enter a Number!"
	}
    else if (result === "RESULT: Infinity%") {
		result = "Please Enter a Number!"
    }
    else{
        result = result
    }
	document.querySelector('#result').innerHTML = result;
}


document.addEventListener('keyup', function(event) {
	if (event.key === "Enter") { 
		percentage()
	}

})