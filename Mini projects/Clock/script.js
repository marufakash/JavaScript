const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(()=>{
    let date = new Date();
    let hour = date.getHours() * 30;
    let min = date.getMinutes() * deg;
    let sec = date.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hour)+(min/12)}deg)`;
    mn.style.transform = `rotateZ(${min}deg)`;
    sc.style.transform = `rotateZ(${sec}deg)`;
})