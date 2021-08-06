let ham=document.querySelector(".fa-bars");
let circle=document.querySelector(".circle");
let container=document.querySelector(".box");
let times=document.querySelector(".fa-times");
let nav=document.getElementsByTagName('nav')[0];
let body=document.getElementsByTagName('body')[0];
ham.addEventListener("click", ()=> {
circle.classList.add("active");
container.classList.add("active");
nav.classList.add("active");
body.style.height= 100 + "vh";
body.style.overflowY= 'hidden';
window.addEventListener('touchmove', (e)=> {
e.preventDefault();

})
})

times.addEventListener('click', ()=> {

circle.classList.remove("active");
container.classList.remove("active");
nav.classList.remove("active");
body.style.overflowY= 'auto';
})