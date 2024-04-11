start = document.getElementById("start");
stop = document.getElementById("stop");


function bgColor(){
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

};

let interval ;
start.addEventListener("click", function() {

    if(!interval)
    {
        interval = setInterval(bgColor,100);
    }
});

stop.addEventListener("click", function() {
    clearInterval(interval);
    interval = null;
});