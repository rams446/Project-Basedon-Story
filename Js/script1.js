const musicbtn=document.getElementById("musicbtn")
const nextbtn=document.getElementById("nextbtn");
const catbtn=document.getElementById("catbtn");
const dogbtn=document.getElementById("dogbtn");
const audiobtn=document.getElementById("audioFile")
let eng=document.getElementById("eng")


let catOrDog="";
musicbtn.addEventListener("click", e=>{
    if (audioFile.paused) {
        audioFile.play();
    }
    else {
        audioFile.pause();
    }  

});

catbtn.addEventListener("click", e=> {
    if(localStorage.getItem("lang")==="English"){
catbtn.textContent="Thank you for selecting cat"
dogbtn.innerText="DOG"
catOrDog = "cat";
    }
    else{
        catbtn.textContent="gracias por seleccionar gato"
        dogbtn.innerText="perra"
        catOrDog = "gato";
    }
});
  
dogbtn.addEventListener("mouseup",e=>{
    if(localStorage.getItem("lang")==="English"){
    dogbtn.textContent="Thank you for selecting Dog"
    catbtn.innerText="CAT"
    catOrDog = "dog";
    }
    else{
        dogbtn.textContent="gracias por seleccionar perra"
    catbtn.innerText="gato"
    catOrDog = "perra";
    }
  });

  nextbtn.addEventListener("click",e=> {
   e.preventDefault();
if(catOrDog === ""){

}else
  if(catOrDog === "cat"){
   window.location.href="Cat.html"
    }
  else
  window.location.href="Dog.html"

  console.log(e);
  });

  if(localStorage.getItem("lang")==="English"){
    eng.innerHTML= "Hi EveryOne...... <br> I AM Honey I am 5years old <br> I live with my Family in Miami <br> Today is very special day for me <br> Guess!!!!!??? <br> I am Gonna buy a pet <br>But I like both Puppy && Kitty <br>Can You Guys Help Me To Chosse ?????????";
    

  }else{
    eng.innerHTML= " Hola a todos...... <br> YO SOY Cariño tengo 5 años <br> Vivo con mi familia en Miami <br> Hoy es un día muy especial para mi <br>¿¿¿¡¡¡¡¡Adivinar!!!!!??? <br> Voy a comprar una mascota <br>Pero me gustan tanto Puppy como Kitty <br>¿Pueden ayudarme a elegir??????????"
    catbtn.textContent="gato"
    dogbtn.textContent="perra"

  }