var left1 = document.querySelector(".color1");
var right1 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var abra = document.getElementById("button1");

left1.addEventListener("input", function magic(){
	
});
right1.addEventListener("input", function magic(){
	
});
// var magic = function magic() {
// 	body.style.background = "linear-gradient(to right, " 
// 	+ left1.value 
// 	+ ", " 
// 	+ right1.value
// 	+ ")";
// }
abra.addEventListener("click", function magic(){
	body.style.background = 
	"linear-gradient(to right, "
	+left1.value
	+ ", "
	+ right1.value
	+ ")";
}
);