let items=1;
const firstC = document.getElementById('firstB');
firstC.addEventListener('click', function () {
    const firstItemsC = document.getElementById('see-first-cart');
    firstItemsC.style.display = 'none';
    items--;
    itemsF()
})
const secondC = document.getElementById('secondB');
secondC.addEventListener('click', function () {
    const secondItemsC = document.getElementById('see-second-cart');
    secondItemsC.style.display = 'none';
    items--;
    itemsF()
})

const cart = document.getElementById('cart-button');
cart.addEventListener('mouseover', function () {
    const cartDisplay= document.getElementById("see-cart");
    cartDisplay.style.display = 'block';
})
const cartHide = document.getElementById('hide-cart');
cartHide.addEventListener('click', function () {
    const cartDisplay= document.getElementById("see-cart");
    cartDisplay.style.display = 'none';
})
function itemsF() {
    if (items<0) {
        document.getElementById("nothing").style.display='block';
    }
    itemNumber();
}
function itemNumber(){
        document.getElementById("cart-size-number").innerText=items+1;
}