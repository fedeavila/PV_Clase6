/* Seleccionamos todos los elementos que poseen la clase 

*/

var inputs = document.getElementsByClassName("formulario__input");
console.log(inputs);
console.log(inputs[1]);


// Recorremos el array de inputs
for (var i = 0; i <= inputs.length; i++) {
	if (inputs[i]) {
		inputs[i].addEventListener('keyup', function () {

			if (this.value.length >= 1) {
				this.nextElementSibling.classList.add('fijar');
			} else {
				this.nextElementSibling.classList.remove('fijar');
			}
		})
	}
}