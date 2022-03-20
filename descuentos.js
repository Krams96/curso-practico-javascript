const cupones = [
    {
        name: "Rey Palomo",
        discount: 15
    },
    {
        name: "Rey Misterio",
        discount: 20
    },
    {
        name: "Rey del Norte",
        discount: 50
    },
];
console.log(cupones[0].name);

function calcularPrecioConDescuento(precio, descuentoProducto){
    const porcentajePrecioConDescuento = 100 - descuentoProducto;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCupon");
    const couponValue = inputCoupon.value;

    let descuento;

    if(!cupones.includes(couponValue)){
        descuento = "El cupón " + couponValue + " no es válido";
        const resultC = document.getElementById("ResultC");
        resultC.innerText = descuento;
    }   
        else if (couponValue === cupones[0].name){
        descuento = cupones[0].discount;
        }
        else if (couponValue === cupones[1].name){
        descuento = cupones[1].discount;
        }
        else if (couponValue === cupones[2].name){
        descuento = cupones[2].discount;
        }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + precioConDescuento + " Gracias por usar el Cupón " + couponValue;

}



