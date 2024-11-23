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
// const icon1 = document.querySelector(".icon1");
// const icon2 = document.querySelector(".icon2");
// const icon3 = document.querySelector(".icon3");
// const image1 = document.querySelector(".image1");
// const image2 = document.querySelector(".image2");
// const image3 = document.querySelector(".image3");
// icon1.addEventListener('click',()=>{
//     image1.style.setProperty("display","grid");
//     image2.style.setProperty("display","none");
//     image3.style.setProperty("display","none");
//     icon1.classList.replace("fa-regular","fa-solid");
//     icon2.classList.replace("fa-solid","fa-regular");
//     icon3.classList.replace("fa-solid","fa-regular");
// });
// icon2.addEventListener('click',()=>{
//     image1.style.setProperty("display","none");
//     image2.style.setProperty("display","grid");
//     image3.style.setProperty("display","none");
//     icon1.classList.replace("fa-solid","fa-regular");
//     icon2.classList.replace("fa-regular","fa-solid");
//     icon3.classList.replace("fa-solid","fa-regular");
// });
// icon3.addEventListener('click',()=>{
//     image1.style.setProperty("display","none");
//     image2.style.setProperty("display","none");
//     image3.style.setProperty("display","grid");
//     icon1.classList.replace("fa-solid","fa-regular");
//     icon2.classList.replace("fa-solid","fa-regular");
//     icon3.classList.replace("fa-regular","fa-solid");
// });
const arrow_icon_right = document.querySelector(".right-arrow-icon");
arrow_icon_right.addEventListener("click",()=>{
    const image=document.querySelector(".image-toggle");
    const image_array = Array.from(image.children);
    const icon = document.querySelector(".image-toggle-icon");
    const icon_array = Array.from(icon.children);
    for(let i=1; i<=image_array.length-2;i++){
        if(i==(image_array.length-2)){
            image_array[1].classList.toggle("display");
            image_array[i].classList.toggle("display");
            icon_array[0].classList.replace("fa-regular","fa-solid");
            icon_array[i-1].classList.replace("fa-solid","fa-regular");
            break;
        };
        if(!image_array[i].classList.contains("display")){
            image_array[i].classList.toggle("display");
            image_array[i+1].classList.toggle("display");
            icon_array[i-1].classList.replace("fa-solid","fa-regular");
            icon_array[i].classList.replace("fa-regular","fa-solid");
            break;
        };
    };
});

const arrow_icon_left = document.querySelector(".left-arrow-icon");
arrow_icon_left.addEventListener("click",()=>{
    const image=document.querySelector(".image-toggle");
    const image_array = Array.from(image.children);
    const icon = document.querySelector(".image-toggle-icon");
    const icon_array = Array.from(icon.children);
    for(let i=image_array.length-2; i>=1;i--){
        if(i==1){
            image_array[1].classList.toggle("display");
            image_array[image_array.length-2].classList.toggle("display");
            icon_array[0].classList.replace("fa-solid","fa-regular");
            icon_array[icon_array.length-1].classList.replace("fa-regular","fa-solid");
            break;
        };
        if(!image_array[i].classList.contains("display")){
            image_array[i].classList.toggle("display");
            image_array[i-1].classList.toggle("display");
            icon_array[i-1].classList.replace("fa-solid","fa-regular");
            icon_array[i-2].classList.replace("fa-regular","fa-solid");
            break;
        };
    };
});