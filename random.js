// Math.random() devuelve número aleatorio entre 0 y 1.
var numero = Math.random();

var str =' MAYOR que 0,5';

if (numero <= 0.5){
  console.log('\n'+numero+' Menor que 0,5 \n');
}
else {
	console.log('\n'+numero+' Mayor que 0,5 \n');
}

console.log('\n' + numero + str + '\n');
