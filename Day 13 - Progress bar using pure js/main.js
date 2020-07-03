const text = document.querySelector("#container > p");
const progressBar = document.querySelector("#progress-bar");
text.innerHTML = text.innerHTML.repeat(100); 
let scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
) - window.innerHeight; //Why? dont ask, just read it => https://javascript.info/size-and-scroll-window


window.addEventListener("scroll", () => {
  let currentHeight = window.pageYOffset ;
  let percentage = ( currentHeight / scrollHeight) * 100;
  
  progressBar.style.width = `${percentage}%`; 
});



