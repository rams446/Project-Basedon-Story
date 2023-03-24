let about=document.getElementById("about")
  

//Hola a todas
if(localStorage.getItem("lang")==="English"){
    about.innerHTML="This story about buying a pet a cat or a dog and interactive with the pet. Hope you all enjoy it";
}else{
    about.innerHTML="Esta historia sobre comprar una mascota, un gato o un perro, e interactuar con la mascota. Espero que todos disfruten";
}