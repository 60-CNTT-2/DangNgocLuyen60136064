$(document).ready(function(){
    $('button').click(function(){
        if($('.username').val()==""||$('.pass').val()==""||$('.re_pass').val()=="")
        {
            alert("Lỗi! Bạn nhập chưa đủ thông tin");
        }
        else{
             if($('.username').val().length<6){
                $('.username').css('background','yellow');
                alert("Lỗi! Tên đăng nhập ít hơn 6 kí tự");
            }
            else {
                $('.username').css('background','white');
                if($('.pass').val()!=$('.re_pass').val())
                {
                    $('.re_pass').css('background','yellow');
                    alert("Lỗi! Nhập lại mật khẩu không khớp"); 
                }  
            else{
                $('input').css('background','white');
                alert("Bạn đã đăng nhập thành công");}
            }
        }
	});
})