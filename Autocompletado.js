const devolverPalabras = (texto, iniciales) => {
	// Primero separa las palabras por espacios, y despues filtra esas palabras seleccionando solo las que empiecen con las iniciales
	const arregloPalabras = texto.split(' ').filter((palabra) => palabra.startsWith(iniciales));
	// Aca convierto el array a un set para que descarte las palabras que se dupliquen
	const sinDuplicados = Array.from(new Set(arregloPalabras));
	return sinDuplicados;
};

//Imprimo el resultado de la funcion anterior, mandandole como parametro el texto y las iniciales de la palabra a autocompletar
let texto = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquip ex ea commodo';
let iniciales = 'ip';
console.log(devolverPalabras(texto, iniciales));
