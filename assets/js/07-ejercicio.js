/*
Programa que pida dos numeros y nos diga cual es el mayor, el menor y si son iguales
PLUS: Si los numeros no son un número o son menores o iguales a cero, nos vuelva a pedir
*/

const numero1 = parseInt(prompt("Introduce el primer número"));
const numero2 = parseInt(prompt("Introduce el segundo número"));

while( numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Introduce el primer número"));
    numero2 = parseInt(prompt("Introduce el segundo número"));
}

if (numero1 == numero2) {
    document.write("<h1>Los números son iguales</h1>");
} else if(numero1 > numero2) {
    document.write("<h2>El número mayor es " + numero1 + "</h2");
    document.write("<h2>El número menor es " +numero2 + "</h2>");
} else if (numero2 > numero1) {
    document.write("<h2>El número mayor es " + numero2 +"</h2>");
    document.write("<h2>El número menor es " +numero1 +"</h2>");
} else {
    document.write("<h2>Introduce números correctos</h2>");
}