
const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
const para1=document.getElementById("p1");
const para2=document.getElementById("p2");
const texarea = document.getElementById("texarea");
para1.style.display='none';
para2.style.display="none";
btn1.addEventListener("click",e=>{
    if (para1.style.display === "none") {
        para1.style.display = "block";
      } else {
        para1.style.display = "none";
      }

});

btn2.addEventListener("click",e=>{
  if(localStorage.getItem("lang")==="English"){
    para2.textContent = "Hey I have done Shopping for you  "+localStorage.getItem("firstname")
    + " I bought a "+ localStorage.getItem("Food")+ " for you and " +localStorage.getItem("Toy")+ " BYE!!!!! EVERYONE... "
    if (para2.style.display === "none") {
        para2.style.display = "block";
      } else {
        para2.style.display = "none";
      }
    }else{
      para2.textContent = "Oye, he hecho las compras para ti.  "+localStorage.getItem("firstname")
    + " Compré un  "+ localStorage.getItem("Food")+ "para ti y " +localStorage.getItem("Toy")+ " ADIÓS!!!!! Todas... "
    if (para2.style.display === "none") {
        para2.style.display = "block";
      } else {
        para2.style.display = "none";
      }
    }
});

let previousbtn=document.getElementById("previousbtn")

previousbtn.addEventListener("click", e=>{

    window.location.href="Dog.html"
});



if(localStorage.getItem("lang")==="English"){
  para1.innerHTML = "HELLO, Honey...!!!! ";
  para2.innerHTML= "Can we go for Shopping   ";
  texarea.innerHTML = "Please Write Comment about the Story";
}else{
  para1.innerHTML = "Hola, cariño...!!!! ";
  para2.innerHTML= "Nosotras podemos ir de compras";
  texarea.innerHTML = "Por favor escriba un comentario sobre la historia";
}