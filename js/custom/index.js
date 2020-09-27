let items = 1;
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
document.body.addEventListener('click', function (event) {
    const firstC = document.getElementById('firstB');
    const secondC = document.getElementById('secondB');
    const cartDisplay = document.getElementById("see-cart");
    const cart = document.getElementById('cart-button');
    const secondItemsC = document.getElementById('see-second-cart');
    const firstItemsC = document.getElementById('see-first-cart');
    const secondInfo= document.getElementById('mini-info-2');
    const firstInfo = document.getElementById('mini-info-1');
    if(event.target===cart){
        cartDisplay.style.display = 'block';
    }
    if(event.target!==cart){
        
        if(event.target!==cartDisplay&&
            event.target!==firstC&&event.target!==secondC&&
            event.target.parentNode!==secondItemsC&&event.target.parentNode!==firstItemsC&&
            event.target.parentNode!==secondInfo&&event.target.parentNode!==firstInfo){
            cartDisplay.style.display = 'none';
        }
    }

})
function itemsF() {
    if (items < 0) {
        document.getElementById("nothing").style.display = 'block';
    }
    itemNumber();
}
function itemNumber() {
    document.getElementById("cart-size-number").innerText = items + 1;
}