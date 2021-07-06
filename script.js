 let timeLine = gsap.timeline({defaults:{ duration:1}})

 let playIt = new Audio('C:/Users/31020/OneDrive/Desktop/HTML CSS/project-tracking-intro-component-master/audio.mp3')
 const button = document.querySelector('.btn')
 timeLine
 .from('.left-side',{opacity:0,ease:'power1.in'})
 .from('.background',{y:-600, ease:'bounce'},0.3)
 .from('.image',{x:1000, ease:'elastic', duration:1.5}, 1.5)
 .from('.logo-image',{y:-400,rotate:-360, ease:'bounce', onEnd:function(){
     playIt.play();
 } }, 2.5)

 $('.icon').click(function(){
     $('.navbar').toggleClass('hide')
 })