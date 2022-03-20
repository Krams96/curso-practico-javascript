
// Aquí interactuamos con el HTML
function calcularAlturaTriangulo(){

    const inputA = document.getElementById("ladoA");
    const inputB = document.getElementById("ladoB");
    const inputBase = document.getElementById("ladoBase");
    
  

    const valorA = inputA.value;
    const valorB = inputB.value;
    const valorBase = inputBase.value;
    let valorAltura = "";

    if(valorA == valorB && valorBase != valorA && valorBase != valorB){
        let alerta = "Es un triangulo isosceles";
        alert(alerta);
        const resolucion = ((valorA*valorA)-((valorB*valorB)/4));
        valorAltura = Math.sqrt(resolucion);
        console.log(valorAltura);
        return document.getElementById("altura").value = valorAltura;

    }
    else{
        alert("No es un triangulo Isosceles");
    }

}
