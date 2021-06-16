// Condicional if
// Si A es igual a B entonces haz algo

/*  Operadores relacionales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
*/


const edad = parseInt(prompt('Ingresa tu edad'));
const nombre = prompt('Ingresa tu nombre');

if( edad >= 18 && edad <=29 ) {
    /* console.log(`Hola felicidades ${nombre}, has sido aceptado en el programa`); */
    document.write(`<h1>Hola Felicidades ${nombre}, has sido aceptado en el programa.</h1`);
} else if(edad < 60) {
    document.write(`<h1>Hola ${nombre} Generation pronto abrirá cursos para adultos mayores.</h1`);
}
else {
    document.write(`<h1>Hola lo siento ${nombre}, no fuiste aceptado.</h1`);
}