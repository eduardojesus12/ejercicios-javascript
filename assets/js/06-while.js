let anio = 2021;

while( anio != 1990 ) {
    console.log(`Estamos en el año ${anio}`);
    anio--;

    if(anio == 2005) {
        break;
    }
}

while(anio == 2000) {
    document.write(`<h1>Pruebas del ciclo While </h1>`);
}

do {
    document.write(`<h1>Pruebas del ciclo Do While </h1>`);
}
while(anio == 2000);