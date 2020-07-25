$(document).ready(function(){
	$("button").click(function(){
		operate=$(this).text();
		
		a = Number($('#num_1').val());
		b = Number($('#num_2').val());
		
		switch (operate)
		{
			case '+': $('#result').val(a+b); break;
			case '-': $('#result').val(a-b); break;
			case 'x': $('#result').val(a*b); break;
			case '/': $('#result').val(a/b); break;
			case '^': $('#result').val(Math.pow(a,b)); break;
		}
	})
})