// Ciclo FOR
// Ciclo es una estructura de control que se repite varias veces

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log(meses[0]);
console.log(meses[1]);
console.log(meses[2]);

for(let i = 0; i < 12; i++ ) {
    console.log(meses[i]);
}

/* function multiplicar(numero) {

} */
const multiplicar = (numero) => {
    for(let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${i*numero}`);
    }
}

multiplicar(5);
multiplicar(8);
multiplicar(12);

