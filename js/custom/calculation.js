const product1Plus=document.getElementById('product1plus');
product1Plus.addEventListener('click',function(){
    const quantity=document.getElementById('product1quantity').value;
    const quantityNumber=parseInt(quantity);
    const product1Quantity=addQuantity('product1quantity',1,quantityNumber);
    const onePrice=singlePrice('product1totalPrice',product1Quantity-1);
    addPrice('product1totalPrice',product1Quantity,onePrice);
    subTotal('productsSubTotalPrice',onePrice);
    total('productsTotalPrice',onePrice);
})
const product1Minus=document.getElementById('product1minus');
product1Minus.addEventListener('click',function(){
    const quantity=document.getElementById('product1quantity').value;
    const quantityNumber=parseInt(quantity);
    if(quantityNumber>1){
    const product1Quantity=addQuantity('product1quantity',-1,quantityNumber);
    const onePrice=singlePrice('product1totalPrice',product1Quantity+1);
    addPrice('product1totalPrice',product1Quantity,onePrice);
    subTotal('productsSubTotalPrice',(-1*onePrice));
    total('productsTotalPrice',(-1*onePrice));}
})

const product2Plus=document.getElementById('product2plus');
product2Plus.addEventListener('click',function(){
    const quantity=document.getElementById('product2quantity').value;
    const quantityNumber=parseInt(quantity);
    const product2Quantity=addQuantity('product2quantity',1,quantityNumber);
    const onePrice=singlePrice('product2totalPrice',product2Quantity-1);
    addPrice('product2totalPrice',product2Quantity,onePrice);
    subTotal('productsSubTotalPrice',onePrice);
    total('productsTotalPrice',onePrice);
})
const product2Minus=document.getElementById('product2minus');
product2Minus.addEventListener('click',function(){
    const quantity=document.getElementById('product2quantity').value;
    const quantityNumber=parseInt(quantity);
    if(quantityNumber>1){
    const product2Quantity=addQuantity('product2quantity',-1,quantityNumber);
    const onePrice=singlePrice('product2totalPrice',product2Quantity+1);
    addPrice('product2totalPrice',product2Quantity,onePrice);
    subTotal('productsSubTotalPrice',(-1*onePrice));
    total('productsTotalPrice',(-1*onePrice));}
})


function addQuantity(id,number,quantityNumber){
    const updatedQuantity=quantityNumber+number;
    document.getElementById(id).value=updatedQuantity;
    return updatedQuantity;
}
function singlePrice(id,quantity){
    const price=document.getElementById(id).innerText;
    const priceNumber=parseFloat(price);
    const singlePrice=priceNumber/quantity;
    return singlePrice;
}
function addPrice(id,quantity,onePrice){
    const price=document.getElementById(id).innerText;
    const priceNumber=parseFloat(price);
    const updatedPrice=quantity*onePrice;
    document.getElementById(id).innerText=(updatedPrice).toFixed(2);
    return updatedPrice;
}
function subTotal(id,singlePrice){
    const subTotal=document.getElementById(id).innerText;
    const subTotalNumber=parseFloat(subTotal);
    document.getElementById(id).innerText=(subTotalNumber+singlePrice).toFixed(2);
}
function total(id,singlePrice){
    const total=document.getElementById(id).innerText;
    const totalNumber=parseFloat(total);
    document.getElementById(id).innerText=(totalNumber+singlePrice).toFixed(2);
}