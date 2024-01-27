// import LocomotiveScroll from './locomotive-scroll';
const elems = document.querySelectorAll(".elem");
const cursor = document.querySelector(".cursor");
const fixedImage = document.querySelector(".fixed-image");
const imageParent = document.querySelector(".elemParent");

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

window.addEventListener("mousemove", function(event){
    cursor.style.left = event.x+"px";
    cursor.style.top = event.y+"px";
});

imageParent.addEventListener("mouseenter",function(){
    fixedImage.style.display = "block";
})
imageParent.addEventListener("mouseleave",function(){
    fixedImage.style.display = "none";
})
elems.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        let image = e.getAttribute("data-image");
        fixedImage.style.backgroundImage = `url(${image})`;
    })
})
function loaderAnimation(){
    let loader = document.querySelector("#loader");
    setTimeout(function(){
        loader.style.top = "-100%"
    },4200)
}
function menuAnimation(){
    let menu = document.querySelector(".navBar h3")
    let full = document.querySelector("#full-scr")
    let navimg = document.querySelector(".navBar img")
    let flag = 0;
    menu.addEventListener("click",function(){
        if(flag == 0){
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        }
        else{
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}
loaderAnimation()
menuAnimation()

