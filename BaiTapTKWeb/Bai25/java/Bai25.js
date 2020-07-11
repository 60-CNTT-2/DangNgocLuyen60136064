$(document).ready(function(){
	var a=new Date();
	for(i=1950;i<=a.getFullYear();i++)
	{
		$('select').append('<option>'+i+'</option>');
	}
});