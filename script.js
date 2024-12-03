const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
 function videoconAnimation(){
    var videocon = document.querySelector("#video-container")
    var playbtn=document.querySelector("#play")
    videocon.addEventListener("mouseenter",function(){
       gsap.to(playbtn,{
   scale:1,
   opacity:1
       })
    })
    videocon.addEventListener("mouseleave",function(){
       gsap.to(playbtn,{
           scale:0,
           opacity:0
               })
    })
    videocon.addEventListener("mousemove",function(dets){
       gsap.to(playbtn,{
           left:dets.x-20,
           top:dets.y-80
       })
    })
 }
 videoconAnimation()

 function loadingAnimation(){
    gsap.from("#txt",{
        y:100,
        opacity:0,
        delay:.5,
        duration:.8,
     })
     gsap.from("#video-container",{
        scale:0.9,
        opacity:0,
        delay:1.5,
        duration:.8,
     })
 }
 loadingAnimation()
 document.addEventListener("mousemove",function(dets){
gsap.to("#cursor",{
    left:dets.x,
    top:dets.y
})
 })

 document.querySelectorAll("#page3").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform: "translate(-50%,-50%)scale(1)"
               })
    })
    

 })
 document.querySelectorAll("#page3").forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform: "translate(-50%,-50%)scale(0)"
               })
    })
    

 })