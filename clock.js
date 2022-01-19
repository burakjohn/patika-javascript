function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var d = date.getDay();
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    if ( d == 1) {
        d = "Pazartesi";
    } else if ( d == 2) {
        d = "Salı";
    } else if ( d == 3) {
        d = "Çarşamba";
    } else if ( d == 4) {
        d = "Perşembe";
    } else if ( d == 5) {
        d = "Cuma";
    } else if ( d == 6) {
        d = "Cumartesi";
    } else if ( d == 0) {
        d = "Pazar";
    }
    
    var time = h + ":" + m + ":" + s + " " + d ;
  // document.querySelector("#myClock").innerHTML = time;
  document.querySelector("#myClock").innerHTML =    `${h}:${m}:${s} ${d}`
    setTimeout(showTime, 1000);
    
}

showTime();


let name = prompt("isminiz nedir?")
nameReq = document.querySelector("#myName");
nameReq.innerHTML = `${name}`



