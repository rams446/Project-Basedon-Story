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

let colors = ["black", "blue", "green"];
let colorIndex = 0;
function changeColor() {
    let col = document.getElementById("body1");
    if( colorIndex >= colors.length-1 ) {
        colorIndex = 0;
    }
    col.style.backgroundColor = colors[colorIndex];
    colorIndex++;
    localStorage.setItem("color", colors[colorIndex])
}


catbtn.addEventListener("click", e=> {
    if(localStorage.getItem("lang")==="English"){
catbtn.textContent="Thank you for selecting cat"
catbtn.style.fontSize="30px"
dogbtn.innerHTML="<i class='fas fa-dog fa-5x'></i>"+"DOG"
dogbtn.style.fontSize="15px"
catOrDog = "cat";
    }
    else{
        catbtn.textContent="gracias por seleccionar gato"
        dogbtn.innerHTML="<i class='fas fa-dog fa-5x'></i>"+"perra"
        catOrDog = "gato";
    }
});
  
dogbtn.addEventListener("mouseup",e=>{
    if(localStorage.getItem("lang")==="English"){
    dogbtn.textContent="Thank you for selecting Dog"
    dogbtn.style.fontSize="30px"
    catbtn.innerHTML="<i class='fas fa-cat fa-5x'></i>"+"CAT"
    catbtn.style.fontSize="15px"
    catOrDog = "dog";
    }
    else{
        dogbtn.textContent="gracias por seleccionar perra"
    catbtn.innerHTML="<i class='fas fa-cat fa-5x'></i>"+"gato"
    catOrDog = "perra";
    }
  });

  nextbtn.addEventListener("click",e=> {
   e.preventDefault();
if(catOrDog === ""){

}else
  if(catOrDog === "cat" || catOrDog === "gato"){
   window.location.href="Cat.html"
    }
  else
  window.location.href="Dog.html"

  console.log(e);
  });

  if(localStorage.getItem("lang")==="English"){
    eng.innerHTML= "Hi EveryOne...... <br> I AM Honey I am 5years old <br> I live with my Family in Miami <br> Today is very special day for me <br> Guess!!!!!??? <br> I am Gonna buy a pet <br>But I like both Puppy && Kitty <br>Can You Guys Help Me To Chosse ?????????";
    
      
    }

  else{
    eng.innerHTML= " Hola a todos...... <br> YO SOY Cariño tengo 5 años <br> Vivo con mi familia en Miami <br> Hoy es un día muy especial para mi <br>¿¿¿¡¡¡¡¡Adivinar!!!!!??? <br> Voy a comprar una mascota <br>Pero me gustan tanto Puppy como Kitty <br>¿Pueden ayudarme a elegir??????????"
    catbtn.innerHTML="<i class='fas fa-cat fa-5x'></i>"+"gato";
    dogbtn.innerHTML="<i class='fas fa-dog fa-5x'></i>"+"perra"

  }
