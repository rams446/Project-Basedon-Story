let catName=document.getElementById("textbox")
let btn1=document.getElementById("btn1");
let output=document.getElementById("nameoutput")
let p1=document.getElementById("p1");
let p2=document.getElementById("p2");
let p3=document.getElementById("p3");


musicbtn.addEventListener("click", e=>{
    if (audioFile.paused) {
        audioFile.play();
    }
    else {
        audioFile.pause();
    }  

});
  
let nextpage=document.getElementById("nextbtn")
nextpage.addEventListener("click", e=> {
    if(catName.value===""){

    }
    else {
      localStorage.setItem("firstname",catName.value );
    window.location.href="CatShopping.html";
    }
});


const previousbtn=document.getElementById("previousbtn")

previousbtn.addEventListener("click", e=>{
    e.preventDefault();
    window.location.href="index1.html";
});

if(localStorage.getItem("lang")==="English"){
    p1.innerHTML="Hi EveryOne...... <br> Thank you for Choosing my Pet <br> Hello Kitty ";
    p2.innerHTML="Hi What is my name???????? ";
    p3.innerHTML="Help me in chooing MY pet name";
}else{
    p1.innerHTML="Hola a todos...... <br> Gracias por elegir a mi mascota <br> Hola Kitty";
    p2.innerHTML="hola como me llamo????????? ";
    p3.innerHTML="Ayúdame a elegir el nombre de MI mascota ";

}
 let b1 =document.getElementById("b1");
 b1.style.backgroundColor=localStorage.getItem("color");