// VARIABLES
// una variable es un contenedor de información

var variable1 = 'Soy la variable 1';
console.log(variable1);
variable1 = 1212;
console.log(variable1);

const variable2 = 'Variable 2';
console.log(variable2);
/* variable2 = 10;
console.log(variable2); */

let nueva_variable2 = 'Mi nueva variable';
console.log(nueva_variable2);


function varTest() {
    var x = 31;
    if ( true ) {
      var x = 71;  //
      console.log(x);  // 71 Uriel
    }
    console.log(x);  // 31 Gabi
}

/* varTest(); */

function letTest() {
    let x = 31;
    if (true) {
      let x = 71;  // 
      console.log(x);  // 71 Gustavo
    }
    console.log(x);  // 31 Miguel
}