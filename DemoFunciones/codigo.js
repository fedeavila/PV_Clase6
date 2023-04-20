function producto(n1, n2) {
	return n1 * n2;
}


// Sintaxis de una funcion anonima(no posee nombre!)

// function name(params) {

// }

// Si la guardamos en una const no se podra cambiar.

const SALUDA = function () {
	console.log("Hola! Soy una func anonima!");
}

// Ejecutamos la func anonima
SALUDA();

// Algunas func reciben como param otras func anon
// Por ejemplo setTimeOut() que espera si o si una func.

setTimeout(function () {
	console.log('Hola Mundo! Pasaron 5 segundos desde que se cargo la pagina.');
	//alert("Paga!");
}, 5000);

// Asignamos una func anon a una variable
var suma = function (a, b) {
	return a + b;
}

var resultado = suma(3, 5);
console.log("Resultado: " + resultado);


// El Constructor Funcion
var miFuncionMagica = new Function("a", "b", "return a+b");
var resultado2 = miFuncionMagica(5, 2);
console.log("Constructor function resultado: " + resultado2);

// Func Anon Autoinvocadas
/*
1) Las func se podrian invocar por la generacion de un evento. 
2) Las func se podrian invocar desde el mismo cod.
3) Y tb se podrian invocar automaticamente.*/


// Para que se invoque: al fina debemos utilizar los "()" y para que funcione como una expression la debemos de envolver entre parentesis. 
(function () {
	console.log("Hola! Soy una func autoinvocada!");
}());

