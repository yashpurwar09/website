const icon = document.querySelector(".icon");
icon.addEventListener('click',()=>{
    const nav = document.querySelector("nav");
    if (nav.style.display == "none"){
        nav.style.setProperty("display", "block");
        nav.style.setProperty("justify-self","start");
    }
    else{
        nav.style.setProperty("display", "none");
    }
});
window.addEventListener("resize",()=>{
    const nav = document.querySelector("nav");
    if(window.innerWidth>800){
        nav.style.setProperty("display", "block");
        nav.style.setProperty("justify-self","center");
    }
    else{
        nav.style.setProperty("display","none");
    }
});