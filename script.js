//your JS code here. If required.
let clock=document.getElementById("timer");
function showtime(){
	let date=new Date();
	let time=date.toLocaleString();
	clock.textContent=time;
}
showtime();

setInterval(showtime,1000);
