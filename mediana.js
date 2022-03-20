function calcularMediaAritmetica(lista) {

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista;
}

function calcularMediana (lista) {

    function compareNumbers(a, b) {
        return a - b;
      }
    
    let listaOk = lista.sort(compareNumbers);

    let mitadLista = parseInt(listaOk.length / 2);
    

    function esPar (numerito) {
            if (numerito % 2 === 0){
                return true;
            } else {
                return false;
            }
    }
    
    let mediana;
    
    if (esPar(listaOk.length)){
        const elemento1 = listaOk[mitadLista];
        const elemento2 = listaOk[mitadLista - 1];
        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);
        return mediana = promedioElemento1y2;
    
    } else {
        return mediana = listaOk[mitadLista];
    }
}
