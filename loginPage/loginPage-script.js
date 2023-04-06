const showPassword = document.querySelector('.password-icon');


showPassword.addEventListener('click', handlerShow);

const inputPassword = document.querySelector('.password-input');

function handlerShow() {
	
	if (inputPassword.type === "password") {
		inputPassword.type = "text";
	} else {
		inputPassword.type = "password";
	}
}


const checkboxRef = document.querySelector(".remember-checkbox");
checkboxRef.addEventListener('click',rememberMeHandler);

const emailRef = document.querySelector(".email-input");

if(localStorage.checkbox && localStorage.checkbox !==""){
	checkboxRef.setAttribute("checked", "checked");
	emailRef.value = localStorage.username;
	inputPassword.value = localStorage.password;
}else{
	checkboxRef.removeAttribute("checked");
	emailRef.value = "";
	inputPassword.value = "";
}

function rememberMeHandler(){
	if(checkboxRef.checked && emailRef.value !== "" && inputPassword.value !== ""	){
		localStorage.username = emailRef.value;
		localStorage.password = inputPassword.value;
		localStorage.checkbox = checkboxRef.value;
	}else{
		localStorage.username = "";
		localStorage.checkbox = "";
		localStorage.password = "";
	}
}


const buttonRef = document.querySelector(".main-block__button");
buttonRef.addEventListener("click",buttonHandler);

function buttonHandler() {
if(emailRef.value === ""  && inputPassword.value === ""){
	alert("Заповніть поля вірними даними!!!");
	buttonRef.href = "";
}
	}



