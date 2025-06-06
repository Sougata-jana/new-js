window.addEventListener("mousemove", function(details){
    let rect = document.querySelector("#rect")

    var xVal = gsap.utils.mapRange(
        0,
        window.innerWidth,
        100+rect.getBoundingClientRect().width/2,
        window.innerWidth-(100+rect.getBoundingClientRect().width/2),
        details.clientX
    )

    gsap.to("#rect",{
        left: xVal,
        ease: Power3,
    })
})