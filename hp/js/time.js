var now = new Date();

var Year = now.getFullYear();
var Month = now.getMonth()+1;
var Date_ = now.getDate();
var Hour = now.getHours();
var Min = now.getMinutes();
var Sec = now.getSeconds();

const html_time = Year+"年"+Month+"月"+Date_+"日"+Hour+"時"+Min+"分"+Sec+"秒";

console.log(now);
console.log(html_time);

var at_h1 = document.getElementById("access_time_h1");
at_h1.innerHTML = html_time;