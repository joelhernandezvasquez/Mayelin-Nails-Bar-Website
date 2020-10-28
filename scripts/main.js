
const arrayCards = document.querySelectorAll(".card-product");



const init = () => {

   const cardWidth = arrayCards[0].getBoundingClientRect().width + 25;

    
    arrayCards.forEach((card,index)=>{
        card.style.left = (cardWidth * index) + "px";
    })
}


window.addEventListener("load",init);
