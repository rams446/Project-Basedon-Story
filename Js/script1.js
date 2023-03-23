const musicbtn=document.getElementById("musicbtn")
const nextbtn=document.getElementById("nextbtn");
const catbtn=document.getElementById("catbtn");
const dogbtn=document.getElementById("dogbtn");
const audiobtn=document.getElementById("audioFile")
let catOrDog;
musicbtn.addEventListener("click", e=>{
    if (audioFile.paused) {
        audioFile.play();
    }
    else {
        audioFile.pause();
    }  

});

catbtn.addEventListener("click", e=> {
catbtn.textContent="Thank you"
dogbtn.innerText="DOG"
catOrDog = "cat";
});
  
dogbtn.addEventListener("mouseup",e=>{

    dogbtn.textContent="Thank you"
    catbtn.innerText="CAT"
    catOrDog = "dog";
  });

  nextbtn.addEventListener("click",e=> {
   

  if(catOrDog === "cat"){
   window.location.href="Cat.html"
    }
  else
  window.location.href="Dog.html"

  console.log(e);
  });