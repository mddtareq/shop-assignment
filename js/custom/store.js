let items = 1;
const firstC = document.getElementById('firstB');
firstC.addEventListener('click', function () {
    const firstItemsC = document.getElementById('see-first-cart');
    firstItemsC.style.display = 'none';
    const firstItems = document.getElementById('first-items');
    firstItems.style.display = 'none';
    const firstPrice = document.getElementById('cart-first-price').innerText;
    const price = parseFloat(firstPrice);
    subTotal(-1 * price)
    items--;
    itemsF()
})
const secondC = document.getElementById('secondB');
secondC.addEventListener('click', function () {
    const secondItemsC = document.getElementById('see-second-cart');
    secondItemsC.style.display = 'none';
    const secondItems = document.getElementById('second-items');
    secondItems.style.display = 'none';
    const secondPrice = document.getElementById('cart-second-price').innerText;
    const price = parseFloat(secondPrice);
    subTotal(-1 * price)
    items--;
    itemsF()
})
const first = document.getElementById('first');
first.addEventListener('click', function () {
    const firstItems = document.getElementById('first-items');
    firstItems.style.display = 'none';
    const firstItemsC = document.getElementById('see-first-cart');
    firstItemsC.style.display = 'none';
    const firstPrice = document.getElementById('first-price').innerText;
    const price = parseFloat(firstPrice);
    subTotal(-1 * price)
    items--;
    itemsF()
})
const second = document.getElementById('second');
second.addEventListener('click', function () {
    const secondItems = document.getElementById('second-items');
    secondItems.style.display = 'none';
    const secondItemsC = document.getElementById('see-second-cart');
    secondItemsC.style.display = 'none';
    const secondPrice = document.getElementById('second-price').innerText;
    const price = parseFloat(secondPrice);
    subTotal(-1 * price)
    items--;
    itemsF()
})
function subTotal(singlePrice) {
    const subTotal = document.getElementById('sub-total').innerText;
    const subTotalNumber = parseFloat(subTotal);
    document.getElementById('sub-total').innerText = (subTotalNumber + singlePrice).toFixed(2);
}
document.body.addEventListener('click', function (event) {
    const firstC = document.getElementById('firstB');
    const secondC = document.getElementById('secondB');
    const cartDisplay = document.getElementById("see-cart");
    const cart = document.getElementById('cart-button');
    const secondItemsC = document.getElementById('see-second-cart');
    const firstItemsC = document.getElementById('see-first-cart');
    const secondInfo = document.getElementById('mini-info-2');
    const firstInfo = document.getElementById('mini-info-1');
    if (event.target === cart) {
        if (cartDisplay.style.display === 'none') {
            cartDisplay.style.display = 'block';
        }
        else {
            cartDisplay.style.display = 'none';
        }
    }
    if (event.target !== cart) {

        if (event.target !== cartDisplay && event.target.parentNode !== cartDisplay &&
            event.target !== firstC && event.target !== secondC &&
            event.target.parentNode !== secondItemsC && event.target.parentNode !== firstItemsC &&
            event.target.parentNode !== secondInfo && event.target.parentNode !== firstInfo) {
            cartDisplay.style.display = 'none';
        }
    }

})
function itemsF() {
    if (items < 0) {
        document.getElementById("nothing").style.display = 'block';
        document.getElementById("show-cart-btn").style.display = 'none';
    }
    itemNumber();
}
function itemNumber() {
    document.getElementById("cart-size-number").innerText = items + 1;
}
// const ascending=document.getElementById("asc");
// ascending.addEventListener("click",function(){
//     console.log("25")
// })
// const descending=document.getElementById("desc");
// descending.addEventListener("click",function(){
//     console.log("52")
// })
const btn1 = document.getElementById("asc");
const btn2 = document.getElementById("desc");
btn1.addEventListener("click", function () {
    btn2.style.display = 'block';
    btn1.style.display = 'none';

})
btn2.addEventListener("click", function () {
    btn1.style.display = 'block';
    btn2.style.display = 'none';
})

$('#asc').click(function () {
    $('.card-sort .items').sort(function (a, b) {
        return $(a).find(".card-text").text() > $(b).find(".card-text").text() ? 1 : -1;
    }).appendTo(".card-sort");
})
$('#desc').click(function () {
    $('.card-sort .items').sort(function (a, b) {
        return $(a).find(".card-text").text() < $(b).find(".card-text").text() ? 1 : -1;
    }).appendTo(".card-sort");
})