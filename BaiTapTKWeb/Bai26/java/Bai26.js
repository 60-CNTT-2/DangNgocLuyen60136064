$(document).ready(function(){
	var lap = setInterval(time,1000);
	function time() {		
	var today = new Date();
	var tg = today.getHours()+":"+today.getMinutes()+":"+today.getSeconds();
	var time = document.getElementById("time");
	time.innerHTML = tg;
	};
});