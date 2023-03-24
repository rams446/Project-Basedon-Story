let dogName=document.getElementById("textbox")
let btn1=document.getElementById("btn1");
let dogFood=document.getElementById("textbox1")
let dogToy=document.getElementById("textbox2")
let dogElement = document.getElementById("everyone")
let puppyNameEle = document.getElementById("puppyName");
let pupFood = document.getElementById("pupFood");
let pupToy = document.getElementById("pupToy");
  
let nextpage=document.getElementById("nextbtn")
nextpage.addEventListener("click", e=> {
    if(dogName.value==="" && dogFood.value==="" && dogToy.value===""){

    }
    else {
    
      localStorage.setItem("firstname",dogName.value );
      localStorage.setItem("Food",dogFood.value);
      localStorage.setItem("Toy",dogToy.value);
    window.location.href="DogShopping.html";
    }
});
//Hola a todas
if(localStorage.getItem("lang")==="English"){
    dogElement.innerHTML=" Hi EveryOne...... <br> Thank you for Choosing my Pet ";
    puppyName.innerHTML="Help Me In Choosing My Puppy Name";
    pupFood.innerHTML="Help Me In Choosing My Puppy food ";
    pupToy.innerHTML="Help Me In choosing My Puppy  Toys";
}else{
    dogElement.innerHTML="Hola a todas...... <br> Gracias por elegir a mi mascota";
    puppyName.innerHTML="Ayúdame a elegir el nombre de mi cachorro";
    pupFood.innerHTML="Ayúdame a elegir la comida de mi cachorro";
    pupToy.innerHTML="Ayúdame a elegir mis juguetes para cachorros";
}

let previousbtn=document.getElementById("previousbtn")

previousbtn.addEventListener("click", e=>{

    window.location.href="index1.html"
});

musicbtn.addEventListener("click", e=>{
    if (audioFile.paused) {
        audioFile.play();
    }
    else {
        audioFile.pause();
    }  

});