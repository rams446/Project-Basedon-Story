let catName=document.getElementById("textbox")
let btn1=document.getElementById("btn1");
let output=document.getElementById("nameoutput")


musicbtn.addEventListener("click", e=>{
    if (audioFile.paused) {
        audioFile.play();
    }
    else {
        audioFile.pause();
    }  

});

btn1.addEventListener("click", e=> {
      output.innerHTML=catName.value;
      localStorage.setItem("firstname",catName.value );
        
});
  
let nextpage=document.getElementById("nextbtn")
nextpage.addEventListener("click", e=> {
    if(catName.value===""){

    }
    else {
        output.innerHTML=catName.value;
      localStorage.setItem("firstname",catName.value );
    window.location.href="CatShopping.html";
    }
});


const previousbtn=document.getElementById("previousbtn")

previousbtn.addEventListener("click", e=>{
e.defaultPrevented();
    window.history.go(-1)
});
