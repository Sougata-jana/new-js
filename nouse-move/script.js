var rect= document.querySelector("#center");

rect.addEventListener("mousemove", function(details){
var rectangelocation = rect.getBoundingClientRect();
var rectangeval = (details.clientX-rectangelocation.left);
 if(rectangeval<rectangelocation.width/2){
  var redcolor = gsap.utils.mapRange(
    0, 
    rectangelocation.width/2, 
    255, 
    0, 
    rectangeval
     )
  gsap.to(rect,{
    backgroundColor: `rgb(${redcolor}, 0, 0)`,
    ease: Power4

  })

 }   else{
    var greencolor = gsap.utils.mapRange(
        rectangelocation.width/2, 
        rectangelocation.width, 
        0, 
        255, 
        rectangeval
         )
      gsap.to(rect,{
        backgroundColor: `rgb( 0, ${greencolor}, 0)`,
        ease: Power4
    
      })
    
 }
})

rect.addEventListener("mouseleave", function(){
    gsap.to(rect,{
        backgroundColor: "white",
    })
})
