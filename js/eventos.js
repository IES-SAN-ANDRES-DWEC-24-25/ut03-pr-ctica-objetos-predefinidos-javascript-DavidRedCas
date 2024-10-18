document.addEventListener('DOMContentLoaded', () => {
    // Ejercicio 1
    document.getElementById('btnFecha').addEventListener('click', () => {
        const fecha = obtenerFechaActual();
        const resultadoElement = document.getElementById('resultado');
        alert(`Fecha actual: ${fecha}`);
    });

    // Ejercicio 2
    document.getElementById('btnAreaCirculo').addEventListener('click', () => {
        const radio = parseFloat(document.getElementById('radioCirculo').value);
        if (isNaN(radio) || radio < 0) {
            alert('Por favor, ingrese un radio válido.');
            return;
        }
        const area = calcularAreaCirculo(radio);
        alert(`Área del Círculo: ${area}`);
    });

    // Ejercicio 3
    document.getElementById('btnContarVocales').addEventListener('click', () => {
        const cadena = document.getElementById('cadenaVocales').value;
        const total = contarVocales(cadena);
        alert(`Número de Vocales: ${total}`);
    });

    // Ejercicio 4
    document.getElementById('btnCelsiusFahrenheit').addEventListener('click', () => {
        const celsius = parseFloat(document.getElementById('celsius').value);
        if (isNaN(celsius)) {
            alert('Por favor, ingrese un valor válido para Celsius.');
            return;
        }
        const fahrenheit = celsiusAFahrenheit(celsius);
        alert(`${celsius}°C = ${fahrenheit}°F`);
    });

    // Ejercicio 5
    document.getElementById('btnFormatearNumero').addEventListener('click', () => {
        const numero = parseFloat(document.getElementById('numeroFormatear').value);
        if (isNaN(numero)) {
            alert('Por favor, ingrese un número válido.');
            return;
        }
        const numeroFormateado = formatearNumero(numero);
        alert(`Número Formateado: ${numeroFormateado}`);
    });

    // Ejercicio 6
    document.getElementById('btnReyesMagos').addEventListener('click', () => {
        const fechaInput = document.getElementById('fechaReyes').value;
        if (!fechaInput) {
            alert('Por favor, seleccione una fecha.');
            return;
        }
        const dias = reyesMagos(fechaInput);
        alert(`Días para Reyes Magos: ${dias}`);
    });

    // Ejercicio 7
    document.getElementById('btnAleatorio').addEventListener('click', () => {
        const minimo = parseInt(document.getElementById('minimo').value);
        const maximo = parseInt(document.getElementById('maximo').value);

        if (isNaN(minimo) || minimo < 1) {
            alert('Por favor, ingrese un número válido de minimo.');
            return;
        }

        if (isNaN(maximo) || maximo < 1) {
            alert('Por favor, ingrese un número válido de maximo.');
            return;
        }
        const resultado = calcularAleatorio(minimo, maximo);
        alert(`${resultado}`);
    });

    // Ejercicio 8
    document.getElementById('btnNumberToWords').addEventListener('click', () => {
        const cadena = document.getElementById('cadenaNumberToWords').value;
        const numero = numberToWords(+cadena);
        console.log(numero);
        document.getElementById('resultadoNumberToWords').innerText = `${numero}`;
    });

    // Ejercicio 9
    document.getElementById('btnVerificarPalindromo').addEventListener('click', () => {
        const cadena = document.getElementById('cadenaPalindromo').value;
        const esPal = esPalindromo(cadena);
        const mensaje = esPal ? 'Es un palíndromo.' : 'No es un palíndromo.';
        alert(`${mensaje}`);
    });

    // Ejercicio 10
    document.getElementById('btnCamelCase').addEventListener('click', () => {
        const cadena = document.getElementById('cadenaCamelCase').value;
        const camel = camelCase(cadena);
        alert(`lowerCamelCase: ${camel}`);
    });
});
