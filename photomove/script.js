function throttle(fn, delay) {
    let isThr = false;

    return function (...args) {
        if (!isThr) {
            fn.apply(this, args);
            isThr = true;

            setTimeout(() => {
                isThr = false;
            }, delay);
        }
    };
}

document.querySelector("#center").addEventListener('mousemove', throttle((detalis) => {

    let div  = document.createElement('div')
    div.classList.add("imagediv")
    div.style.left = detalis.clientX + "px"
    div.style.top = detalis.clientY + "px"

    let img = document.createElement('img')
    img.setAttribute("src", "https://images.unsplash.com/photo-1742201835840-1325b7546403?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

    div.appendChild(img)
    document.body.appendChild(div)

    gsap.to(img,{
        y: '0',
        ease: Power1,
        duration:.4
    })

    gsap.to(img,{
        y: '100%',
        delay: .3,
        ease: Power2,
    })

    setTimeout(()=>{
        div.remove()
    },2000)

}, 500));