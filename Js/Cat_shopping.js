const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
const para1=document.getElementById("p1");
const para2=document.getElementById("p2");
para1.style.display='none';
para2.style.display="none";
musicbtn.addEventListener("click", e=>{
  if (audioFile.paused) {
      audioFile.play();
  }
  else {
      audioFile.pause();
  }  

});
btn1.addEventListener("click",e=>{
    if (para1.style.display === "none") {
        para1.style.display = "block";
      } else {
        para1.style.display = "none";
      }

});

btn2.addEventListener("click",e=>{
    para2.textContent = "Can we go for Shopping  "+localStorage.getItem("firstname")+ " BYE!!!!! EVERYONE... "
    if (para2.style.display === "none") {
        para2.style.display = "block";
      } else {
        para2.style.display = "none";
      }

});

let previousbtn=document.getElementById("previousbtn")

previousbtn.addEventListener("click", e=>{

    window.location.href="Cat.html"
});


