function calcular() {
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    const perimetro  = 2 * (numero1 + numero2);

    console.log("El perímetro es: ", perimetro)
    const resultado = document.getElementById("resultado");

    resultado.value = perimetro;


}