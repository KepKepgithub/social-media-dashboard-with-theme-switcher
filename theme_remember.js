const theme_switch = document.querySelector(".theme__checkbox");
theme_switch.checked = localStorage.getItem("switched_theme") === "true";


theme_switch.addEventListener("change", ()=>{
    if(theme_switch.checked === true){
        localStorage.setItem("switched_theme", "true");
    }
    else{
        localStorage.removeItem("switched_theme");
    }
})