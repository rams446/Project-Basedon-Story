let dogName=document.getElementById("textbox")
let btn1=document.getElementById("btn1");
let dogFood=document.getElementById("textbox1")
let dogToy=document.getElementById("textbox2")
  
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