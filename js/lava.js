window.addEventListener("load",()=>{
    var icon = document.getElementById("menu-icon");
    var menu = document.getElementById("mobile-menu");
    var close = document.querySelector(".close");
    var overlay = document.querySelector(".overlay");

    icon.addEventListener('click', () =>{
        menu.classList.add("active");
    });
    icon.addEventListener('click', () =>{
        close.classList.add("active");
    });
    icon.addEventListener('click', () =>{
        overlay.classList.add("active");
    });

    close.addEventListener('click', () =>{
        menu.classList.remove("active");
    });
    close.addEventListener('click', () =>{
        close.classList.remove("active");
    });
    close.addEventListener('click', () =>{
        overlay.classList.remove("active");
    });

    overlay.addEventListener('click', () =>{
        menu.classList.remove("active");
    });
    overlay.addEventListener('click', () =>{
        close.classList.remove("active");
    });
    overlay.addEventListener('click', () =>{
        overlay.classList.remove("active");
    });
})

$(document).ready(function(){
    $(".slider").slick({
        slidesToShow: 1,
        loop:true
      });
    $("#top-button").click(function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
});