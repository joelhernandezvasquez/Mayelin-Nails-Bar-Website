
const arrayCards = document.querySelectorAll(".card-product");
const links = document.querySelector(".main-nav");


const init = () => {

   const cardWidth = arrayCards[0].getBoundingClientRect().width + 25;

    
    arrayCards.forEach((card,index)=>{
        card.style.left = (cardWidth * index) + "px";
    })
}

function hoverLinks(e)
{
     if(e.target.classList.contains("link"))
  {
    const borderLink = e.target.nextElementSibling;
    animateLinksBorder(borderLink);
    
  }
}

const hoverOutLinks = (e) => {
  if(e.target.classList.contains("link"))
  {
    const borderLink = e.target.nextElementSibling;
    animateLinksBorderOut(borderLink);
  }
}


window.addEventListener("load",init);
links.addEventListener("mouseover",hoverLinks);
links.addEventListener("mouseout",hoverOutLinks);