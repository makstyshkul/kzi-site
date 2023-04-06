const downRef = document.querySelector(".main-block__block-text");
downRef.addEventListener('click',handlerScroll);

function handlerScroll(){
	window.scrollBy(0,900);

}

const upRef = document.querySelector(".up");
upRef.addEventListener("click",handlerUp);


function handlerUp(){
	window.scrollTo(0,0);
}
