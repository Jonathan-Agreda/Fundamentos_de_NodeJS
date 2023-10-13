let i = 0;
let intervalo = setInterval(function(){
    console.log('Hola');
    if (i === 3) {
        clearInterval(intervalo);
    }
    i++;
}, 1000);


setImmediate(function(){
    console.log('Hola 2')
});


//console.log(process);


console.log(__dirname);


console.log(__filename);


global.miVariable = 'el valor';
console.log(global.miVariable);
console.log(miVariable);