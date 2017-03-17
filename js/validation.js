

function formValidation() {
	
// Make quick references to our fields.
var firstName = document.form1.firstName;
var lastName = document.form1.lastName;
var alignerNumber = document.form1.alignerNumber;
var cardCode = document.form1.cardCode;
var parentEmail = document.form1.parentEmail;
var email = document.form1.email;



// Check each input in the order that it appears in the form.
if (inputAlphabet(firstName)) {
if (inputAlphabetP2(lastName)) {
if (emailValidation(email)) {
if (emailValidationP6(parentEmail)) {
if (textNumeric(cardCode)) {
if (textNumericP3(alignerNumber)) {
}
}
}
}
}
}
return false;
}




// Function that checks whether input text is numeric or not.
function textNumeric(inputtext) {
var numericExpression = /^[0-9]+$/;
if (inputtext.value.match(numericExpression)) {
return true;
} else {
inputtext.focus();
return false;
}
}

function textNumericP3(inputtext) {
var numericExpression = /^[0-9]+$/;
if (inputtext.value.match(numericExpression)) {
return true;
} else {
document.getElementById('p3').innerText = "email"; // This segment displays the validation rule for alignerNumber.
document.getElementById('email').style.borderColor="red";
inputtext.focus();
return false;
}
}
// Function that checks whether input text is an alphabetic character or not.
function inputAlphabet(inputtext) {
var alphaExp = /^[A-Za-z]+$/;
   if (inputtext.value.match(alphaExp)) {
		return true;
	}
	 else {
	document.getElementById('p1').innerText = "First name should only contain alphabets"; // This segment displays the validation rule for name.
	document.getElementById('firstName').style.borderColor="red";
	//alert(alertMsg);
	inputtext.focus();
	return false;
	}
}
function inputAlphabetP2(inputtext) {
var alphaExp =/^[A-Za-z]+$/;
   if (inputtext.value.match(alphaExp)) {
		return true;
	}
	 else {
	document.getElementById('p2').innerText = "Last name should only contain alphabets"; // This segment displays the validation rule for name.
	document.getElementById('lasttName').style.borderColor="red";
	//alert(alertMsg);
	inputtext.focus();
	return false;
	}
}


// Function that checks whether an user entered valid email lastNameess or not and displays alert message on wrong email lastNameess format.
function emailValidation(inputtext) {
var emailExp = '/^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/';
if (inputtext.value.match(emailExp)) {
return true;
} else {
//document.getElementById('p5').innerText = alertMsg; // This segment displays the validation rule for email.
inputtext.focus();
return false;
}
}
function emailValidationP6(inputtext) {
var emailExp = '/^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/';
if (inputtext.value.match(emailExp)) {
return true;
} else {
inputtext.focus();
return false;
}
}

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});
