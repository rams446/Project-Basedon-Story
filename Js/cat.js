let catName=document.getElementById("textbox")
let btn1=document.getElementById("btn1");
let output=document.getElementById("nameoutput")

btn1.addEventListener("click", e=> {
      output.innerHTML=catName.value;
      localStorage.setItem("firstname",catName.value );
        
});
  
let nextpage=document.getElementById("nextbtn")
nextpage.addEventListener("click", e=> {
    if(catName.value===""){

    }
    else 
    window.location.href="CatShopping.html";

});



