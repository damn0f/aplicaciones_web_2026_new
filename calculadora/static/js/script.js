function sumar(){
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
    const resultado = document.getElementById("resultado");

    console.log("Número 1:", numero1);
    console.log("Número 2:", numero2);

    const sumar = parseFloat(numero1) + parseFloat(numero2);
    console.log("El resultado de la suma es: ", sumar);
    resultado.value = sumar;

}