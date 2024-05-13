let name = document.getElementById("full_name").value;
let email = document.getElementById("email").value;
let pwd = document.getElementById("pass").value;
let cpwd = document.getElementById("re_pass").value;


function registration() {

	//email id expression code
	let pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
	let letters = /^[A-Za-z]+$/;
	let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	if (name == '') {
		alert('Please enter your name');
	}
	else if (!letters.test(name)) {
		alert('Name field required only alphabet characters');
	}
	else if (email == '') {
		alert('Please enter your user email id');
	}
	else if (!filter.test(email)) {
		alert('Invalid email');
	}
	else if (pwd == '') {
		alert('Please enter Password');
	}
	else if (cpwd == '') {
		alert('Enter Confirm Password');
	}
	else if (!pwd_expression.test(pwd)) {
		alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
	}
	else if (pwd != cpwd) {
		alert('Password not Matched');
	}
	else if (document.getElementById("re_pass").value.length < 6) {
		alert('Password minimum length is 6');
	}
	else if (document.getElementById("re_pass").value.length > 12) {
		alert('Password max length is 12');
	}
	else {
		alert('Thank You for Login & You are Redirecting to Campuslife Website');
		// Redirecting to other page or webste code. 
		window.location = "#";
	}
}

// document.querySelector(".reset").addEventListener("click", clearFunc);
// function clearFunc() {
// 	document.getElementById("t1").value = "";
// 	document.getElementById("t2").value = "";
// 	document.getElementById("t3").value = "";
// 	document.getElementById("t4").value = "";
// 	document.getElementById("t5").value = "";
// }
