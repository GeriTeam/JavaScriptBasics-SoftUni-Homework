function timerFunc(){
    var now = new Date();
    var date = now.getUTCDate();
    var month = now.getUTCMonth();
    var year = now.getUTCFullYear();
    var hour = now.getUTCHours();
    var min = now.getUTCMinutes();
    if (min < 10){
        min = "0"+ min;
    }
    var sec = now.getUTCSeconds();
    if (sec < 10){
        sec = "0"+ sec;
    }
    var dayname;
    switch (new Date().getUTCDay()) {
        case 0:
            dayname = "Sun";
            break;
        case 1:
            dayname = "Mon";
            break;
        case 2:
            dayname = "Tue";
            break;
        case 3:
            dayname = "Wed";
            break;
        case 4:
            dayname = "Thu";
            break;
        case 5:
            dayname = "Fry";
            break;
        case 6:
            dayname = "Sat";
            break;
    }
    document.getElementById("clock").innerHTML = dayname + ", " + date + "/" + month + "/" + year + " " + hour + ":" + min + ":" + sec + " GMT";
}

function StartTimer(){
    setInterval(timerFunc,1000);
}

function StopTimer (){
    clearInterval(timerFunc);
}
