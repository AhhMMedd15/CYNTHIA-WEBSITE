// function hoveringeffect2(){
//     var hover = document.querySelectorAll(".hoverimgs");
// hover.forEach(function(e){
//     var img = e.querySelector("img")
//     e.addEventListener("mousemove",function(dets){ 
//          var diff = dets.clientY - e.getBoundingClientRect().top;
//     gsap.to(e.querySelector("img"),{
//         opacity:1,
//         ease:Power3,
//         top:diff,
//         left:dets.clientX,
//     })
  
    
// })
//     e.addEventListener("mouseleave",function(dets){ 
       
//     gsap.to(e.querySelector("img"),{
//         opacity:0,
//         ease:Power1,
      
//     })
// })
   
// });
// }

// hoveringeffect2();


gsap.from(".nav-bar>h1 , .hvr",{
    y:100,
    opacity:0,
    ease:Power2,
})
gsap.from(".page1-content-1>h4",{
    y:-20,
    opacity:0,
    ease:Power2,
    delay:2,
})
gsap.from(".menu-bar>a",{
    y:-20,
    opacity:0,
    ease:Power3,
    delay:2,
})

gsap.to(".page1-content-1>h1",{
    y:0,
    ease:Power2,
    duration:1,
    delay:1,
})
gsap.to(".page1-content1>h1",{
    y:0,
    ease:Power2,
    duration:1,
    delay:1,
})


var crsr = document.querySelector(".gola")
var hover = document.querySelector(".main")

hover.addEventListener("mousemove",function(dets){
    crsr.style.top = dets.y + "px";
    crsr.style.left = dets.x + "px";

})



function hoveringeffect(){
    var hover = document.querySelectorAll(".hoverimgs")
hover.forEach(function(e){
    e.addEventListener("mouseenter",function(){
        var img = e.getAttribute("data-image");
        crsr.style.width = "35%";
        crsr.style.height = "50%";
        crsr.style.borderRadius = "20px";
        crsr.style.backgroundImage = `url(${img})`;
        crsr.style.transform = "translate(-50%,-50%)";
        crsr.style.backgroundColor = "transparent";

    })
    e.addEventListener("mouseleave",function(){
        crsr.style.width = "20px";
        crsr.style.height = "20px";
        crsr.style.borderRadius = "50%";
        crsr.style.backgroundColor = "white";
        crsr.style.backgroundImage = `none`;
        crsr.style.transform = "translate(0%,0%)";

    })
})

}

hoveringeffect();




function menubar(){
    var menu = document.querySelector(".menu-bar .hvr")
var a = document.querySelectorAll(".block")
var check=0;
a.forEach(function(e){

    menu.addEventListener("click",function(){

        e.style.display = "block";
        setTimeout(function(){
            e.style.display = "none";
        },10000)
        
    })
  
})
}

menubar();














