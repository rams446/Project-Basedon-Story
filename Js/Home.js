let btn1=document.getElementById("btnRead")
let btn2=document.getElementById("btnabout")
console.log(btn1);
localStorage.clear();
localStorage.setItem("lang", "English")
btn1.addEventListener("click",(evnt)=>{
//for(let i=0; i<styled.length; i++){
    
});

function changeLang(){

    let e = document.getElementsByName("optionValue")[0];
    let selectedLang = e.options[e.selectedIndex].value;
    console.log(selectedLang)
    localStorage.setItem("lang",selectedLang)
    if(selectedLang === "English"){
        console.log(selectedLang);
        btn1.value="Read";
        btn2.value="About";
    }else{
        btn1.value="leer"
        btn2.value="acerca de"
        console.log(selectedLang);
    }
}
