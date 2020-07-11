$(document).ready(function(){
	var today = new Date();
	var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
	var p = document.getElementById("p");
	p.innerHTML = date;
	p.setAttribute('style','border:1px solid black; font-size:30px;padding:10px;');
});