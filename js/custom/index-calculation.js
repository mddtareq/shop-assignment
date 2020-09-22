let items=1;
const firstC = document.getElementById('firstB');
firstC.addEventListener('click', function () {
    const firstItemsC = document.getElementById('see-first-cart');
    firstItemsC.style.display = 'none';
    const firstItems = document.getElementById('first-items');
    firstItems.style.display = 'none';
    const firstPrice=document.getElementById('cart-first-price').innerText;
    const price = parseFloat(firstPrice);
    subTotal(-1*price)
    items--;
    itemsF()
})
const secondC = document.getElementById('secondB');
secondC.addEventListener('click', function () {
    const secondItemsC = document.getElementById('see-second-cart');
    secondItemsC.style.display = 'none';
    const secondItems = document.getElementById('second-items');
    secondItems.style.display = 'none';
    const secondPrice=document.getElementById('cart-second-price').innerText;
    const price = parseFloat(secondPrice);
    subTotal(-1*price)
    items--;
    itemsF()
})
const first = document.getElementById('first');
first.addEventListener('click', function () {
    const firstItems = document.getElementById('first-items');
    firstItems.style.display = 'none';
    const firstItemsC = document.getElementById('see-first-cart');
    firstItemsC.style.display = 'none';
    const firstPrice=document.getElementById('first-price').innerText;
    const price = parseFloat(firstPrice);
    subTotal(-1*price)
    items--;
    itemsF()
})
const second = document.getElementById('second');
second.addEventListener('click', function () {
    const secondItems = document.getElementById('second-items');
    secondItems.style.display = 'none';
    const secondItemsC = document.getElementById('see-second-cart');
    secondItemsC.style.display = 'none';
    const secondPrice=document.getElementById('second-price').innerText;
    const price = parseFloat(secondPrice);
    subTotal(-1*price)
    items--;
    itemsF()
})
function subTotal(singlePrice) {
    const subTotal = document.getElementById('sub-total').innerText;
    const subTotalNumber = parseFloat(subTotal);
    document.getElementById('sub-total').innerText = (subTotalNumber + singlePrice).toFixed(2);
}
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