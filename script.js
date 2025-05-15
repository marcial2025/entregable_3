function realizarOperacion(num1, num2, operacion) {
        if (operacion === "suma") {
            return num1 + num2;
        } else if (operacion === "resta") {
            return num1 - num2;
        } else if (operacion === "multiplicacion") {
            return num1 * num2;
        } else if (operacion === "division") {
            if (num2 === 0) {
                return "Error, no se puede dividir por cero.";
            }
            return num1 / num2;
        } else {
            return "Error: Operación no válida.";
        }
    }

    function calcular() {
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        const operacion = document.getElementById("operacion").value;

        if (isNaN(num1) || isNaN(num2)) {
            document.getElementById("resultado").innerText = "Por favor, ingrese valores numéricos válidos.";
            return;
        }

        const resultado = realizarOperacion(num1, num2, operacion);
        document.getElementById("resultado").innerText = "Resultado: " + resultado;
    }

    function salir() {
        document.getElementById("resultado").innerText = "Gracias por usar la calculadora.";
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";
        document.getElementById("operacion").value = "suma";
    }