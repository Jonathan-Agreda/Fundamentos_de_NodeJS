//const process = require('process');

process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});

process.on('exit', () => {
    console.log('El proceso acabó');
    setTimeout(() => {
        console.log('Esto no se va a ver nunca');
    },10);
});

setTimeout(() => {
    console.log('Esto si se va a ver');
},10);

//process.on('uncaughtRejection'); //Para promesas que se han rechazado y no hay catch en el codigo
process.on('uncaughtException', (err, origen) => {
    console.error('Vaya se nos ha olvidado capturar el error');
    //console.error(err);
    setTimeout(() => {
        console.log('Esto viene desde las excepciones');
    },10);
});

functionQueNoExiste();

console.log('Esto si el error no se recoje, no sale');