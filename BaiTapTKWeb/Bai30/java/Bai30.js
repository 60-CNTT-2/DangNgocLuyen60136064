$(document).ready(function(){
    var c=true;
    $("#sm").click(function(){
        if(c){
            $("p").html("Hiển thị password");
            $('#sm').val("Click để ẩn password");
            $("#pass").attr('type','text');
            
        }
        else{
            $("p").html("Nhập password");
            $('#sm').val("Click để hiển thị password");
            $("#pass").attr('type','password');
        }
        c=!c;
    });
})