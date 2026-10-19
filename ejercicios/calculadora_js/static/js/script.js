var pantalla = document.getElementById("pantalla");
var numero1 = "";
var operador = "";
var terminado = "";

function numero(n) {
  if (terminado == true) {
    pantalla.value = "";
    terminado = false;
  }
  pantalla.value = pantalla.value + n;
}

function operacion(op) {
  numero1 = pantalla.value;
  operador = "";
  pantalla.value = "";
  terminado = false;
}

function resulatdp
  var numero2 = pantalla.value;
  var res = 0;

  if (operador == "+") {
    res = Number(numero1) + Number(numero2);
  } else if (operador == "-") {
    res = Number(numero1) - Number(numero2);
  } else if (operador == "*") {
    res = Number(numero1) * Number(numero2);
  } else if (operador == "/") {
    if (Number(numero2) === 0) {
      pantalla.value = "Infinito";
      terminado = true;
      return;
    }
    res = Number(numero1) / Number(numero2);
  }

  pantalla.value = res;
  terminado = true;
}

function borrar() {
  pantalla.value = "";
  numero1 = "";
  operador = "";
  terminado = false;
}