
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstpageanim(){
  let tl = gsap.timeline();

  tl.from("#nav",{
    y:'-10',
    opacity:0,
    duration:1,
    ease:Expo.easeInOut
  })
  tl.from(".top",{
    y:'10',
    opacity:0,
    ease:Expo.easeInOut,
    duration:1.5
  })
  tl.from('.bottom',{
    y:'-10',
    opacity:0,
    duration:1.5,
    ease:Expo.easeInOut
  })

  tl.from('#smalltext',{
    y:'10',
    opacity:0,
    duration:1,
    ease:Expo.easeInOut
  })
}
let mm = document.querySelector("#mouse");//choose id mouse to do some work with it
// call 5 second after display block 
setTimeout(()=>{
  mm.style.display = "block";
},5000)
/* here is all about mouse movement ball */
function chaptacircle() {
  var xscale = 1;
  var yscale = 1;
  let xprev = 0;
  let yprev = 0;

  window.addEventListener("mousemove", function (event) {
    xscale = gsap.utils.clamp(0.8, 1.2, event.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, event.clientY - yprev);

    // Update previous mouse position
    xprev = event.clientX;
    yprev = event.clientY;

     (function mouseover() {
      let mm = document.querySelector("#mouse");
    mm.style.transform = `translate(${xprev}px, ${yprev}px) scale(${xscale},${yscale})`;
    })();
  });
}

chaptacircle();
firstpageanim();
  