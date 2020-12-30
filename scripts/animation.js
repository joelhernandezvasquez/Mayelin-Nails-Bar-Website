

const animateLinksBorder = (linkBorder) =>
{
    
    gsap.to(linkBorder,{
     width:'100%',
     duration:0.3,
     ease:"slow(0.7, 0.7, false)",

    });
}

const animateLinksBorderOut = (linkBorder) => {
    gsap.to(linkBorder,{
        width:'0%',
        duration:0.3,
        ease:"slow(0.7, 0.7, false)",
   
       }); 
}
