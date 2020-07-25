$(document).ready(function(){
    function getTime(){
        var d=new Date();
        hour=d.getHours();
        min=d.getMinutes();
        hour=((hour<10)?'0':'')+hour;
        min=((min<10)?'0':'')+min;

        day=d.getDate();
        month=d.getMonth()+1;
        day=((day<10)?'0':'')+day;
        month=((month<10)?'0':'')+month;
        year=d.getFullYear();
        return " - "+hour+":"+min+" " +day+"/"+month+"/"+year;
    }
    $('#sm').click(function(){       
        $('#cnt').prepend('<p>'+ $('#txt').val()+ '<i>'+ getTime()+'</i></p>');
    })
})