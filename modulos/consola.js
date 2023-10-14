console.log('Algo');
console.info('Algo');
console.error('Algo');
console.warn('Algo');


var tabla = [{
    a:1,
    b:'Z',
},
{
    a:2,
    b: 'otra',
}];
console.log(tabla);
console.table(tabla);


console.group('Conversacion');
console.log('Hola');
console.group('Bla');
console.log('Blablabla');
console.log('Blablabla');
console.log('Blablabla');
console.groupEnd('Bla');
console.log('Adios');
console.groupEnd('Conversacion');

console.log('otra cosa de otra funcion');


//Ejemplo con Funciones
function funcion1() {
    console.group('funcion 1')
    console.log('Esto es de la funcion 1')
    console.log('Esto es de la funcion 1 tambien')
    funcion2();
    console.log('Hemos vuelto a la funcion 1')
    console.groupEnd('funcion 1')
}

function funcion2() {
    console.group('funcion 2')
    console.log('Esto es de la funcion 2')
    console.log('Esto es de la funcion 2 tambien')
    console.groupEnd('funcion 2')
}

console.log('Empezamos')
funcion1();


//contadores
console.count('Veces');
console.count('Veces');
console.count('Veces');
console.count('Veces');
console.countReset('Veces');
console.count('Veces');