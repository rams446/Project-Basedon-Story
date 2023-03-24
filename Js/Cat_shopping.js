const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
const para1=document.getElementById("p1");
const para2=document.getElementById("p2");
const textarea1=document.getElementById("textarea");
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
  if(localStorage.getItem("lang")==="English"){
    para2.textContent = "Can we go for Shopping  "+localStorage.getItem("firstname")+ " BYE!!!!! EVERYONE... "
    if (para2.style.display === "none") {
        para2.style.display = "block";
      } else {
        para2.style.display = "none";
      }
    }else{
      para2.textContent = "Nosotras podemos ir de compras "+localStorage.getItem("firstname")+ " Adios!!!!! Todas... "
    if (para2.style.display === "none") {
        para2.style.display = "block";
      } else {
        para2.style.display = "none";
      }
    }
});

let previousbtn=document.getElementById("previousbtn")

previousbtn.addEventListener("click", e=>{

    window.location.href="Cat.html"
});

if(localStorage.getItem("lang")==="English"){
  para1.innerHTML=" HELLO, Honey...!!!! ";
  para2.innerHTML="Can we go for Shopping   ";
  textarea1.innerHTML="Please Write Comment about the Story";
}else{
  para1.innerHTML="Hola, cariño...!!!!  ";
  para2.innerHTML="Nosotras podemos ir de compras ";
  textarea1.innerHTML="Por favor escriba un comentario sobre la historia  ";
}
