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
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const icon3 = document.querySelector(".icon3");
const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");
icon1.addEventListener('click',()=>{
    image1.style.setProperty("display","grid");
    image2.style.setProperty("display","none");
    image3.style.setProperty("display","none");
    icon1.classList.replace("fa-regular","fa-solid");
    icon2.classList.replace("fa-solid","fa-regular");
    icon3.classList.replace("fa-solid","fa-regular");
});
icon2.addEventListener('click',()=>{
    image1.style.setProperty("display","none");
    image2.style.setProperty("display","grid");
    image3.style.setProperty("display","none");
    icon1.classList.replace("fa-solid","fa-regular");
    icon2.classList.replace("fa-regular","fa-solid");
    icon3.classList.replace("fa-solid","fa-regular");
});
icon3.addEventListener('click',()=>{
    image1.style.setProperty("display","none");
    image2.style.setProperty("display","none");
    image3.style.setProperty("display","grid");
    icon1.classList.replace("fa-solid","fa-regular");
    icon2.classList.replace("fa-solid","fa-regular");
    icon3.classList.replace("fa-regular","fa-solid");
});