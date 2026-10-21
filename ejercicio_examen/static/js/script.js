function sumar() {
    const numero1 = document.getElementById("numero1").value;

    const multiplicar = Number(numero1) + Number(numero1);
    console.log(multiplicar);
    resultado.value = multiplicar;

}

function sumar (){
    const numero2 = document.getElementById("numero2").value;

    const suma = Number(numero2) + Number(numero2);
    console.log(suma);
    resultado.value = suma;
}

function sumar_resultados() {
    const sumar_numeros = Number(numero1) + Number (numero2);
    console.log("El perimetro es: ", sumar_numeros);
    resultado.value = sumar_numeros;
}