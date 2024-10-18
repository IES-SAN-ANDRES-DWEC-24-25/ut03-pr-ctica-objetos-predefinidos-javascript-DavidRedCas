// Devuelve la fecha actual en formato dd/mm/yyyy
function obtenerFechaActual(){
  try{
  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const anio = fecha.getFullYear();
  return `${dia}/${mes}/${anio}`;
  }catch (error){
    return null;
  }
}

// Calcula el área de un círculo a partir de su radio con dos decimales
function calcularAreaCirculo(radio) {
  if (radio==0) {
    return 0;
  } else if (radio<0 || radio==NaN) {
    return null;
  } else {
    const area = 3.14*radio*radio;
    return area;
  }
}

// Cuenta el número de vocales en una cadena de texto
function contarVocales(cadena) {
  if (cadena===null) {
    return 0;
  } else if (typeof cadena==='string') {
    const vocales =cadena.match(/[aeiou]/gi).length;
    return vocales;
  } else {
    return -1;
  }
}
  

// Convierte una temperatura de grados Celsius a Fahrenheit
celsiusAFahrenheit = (celsius) => {
  return celsius*(9/5)+32;
}

// Crea una función que formatee un número agregando comas como separadores de miles.
function formatearNumero(numero) {
  numero=numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return numero;
}


// Función que recibe un string en formato dd/mm/yyyy y devuelve el número de días que faltan para el 6 de Enero del año siguiente
function reyesMagos(fecha) {
  let diaReyes=new Date(fecha.getFullYear(),0,6);
  if (fecha==diaReyes) {
    return 0;
  }else{
    if (fecha.getMonth()==0 && fecha.getDate()>6) {
    diaReyes.setFullYear(diaReyes.getFullYear()+1);
    }
    return Math.round((diaReyes.getTime()-fecha.getTime())/1000*60*60*24);
  }
  
}


// Ejercicio 10: Convertir a lowerCamelCase
function camelCase(cadena) {
  return cadena.replace(/\W+(.)/g, function(match, chr) {
    return chr.toUpperCase();
  });
}


// Función que genera un número aleatorio entre comienzo y fin
function calcularAleatorio(comienzo, fin){
  return Math.floor(Math.random()*(fin-comienzo)+comienzo);
}



//   función para verificar si una cadena es un palíndromo sin utilizar expresiones regulares ni programación funcional
function esPalindromo(cadena){
  cadena=cadena.replace(/ /g, '');
  if (cadena.reverse()==cadena) {
    return true;
  } else {
    return false;
  }
  
}

// Función que recibe un número y devuelve un string con el número escrito en palabras
function numberToWords(num) {
 

}
