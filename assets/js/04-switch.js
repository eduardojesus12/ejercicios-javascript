const edad = 18;
let imprimir = '';
const texto = 'Hola';

switch(texto) {
    case 18:
        imprimir = 'Mensaje 18';
        console.log(18);
    break;
    case 20:
        imprimir = 'Mensaje 20';
    break;
    case 50:
        imprimir = 'Mensaje 50';
    break;
    case 'Hola':
        imprimir = 'Hola';
    break;
    default:
        imprimir = 'Este es un mensaje por defecto';
    break;
}

document.write(`<h1>${imprimir}</h1>`);