const { exec, spawn } = require('child_process');
//const exec = require('child_process').exec; //Significa lo mismo que la linea 1 

// EJECUTAR UN SCRIPT O COMANDO COMO TERMINAL
/* exec('node modulos/consola.js', (err, stdout, sterr) => {
   if (err) {
        console.error(err);
        return false;
   } 
   
   console.log(stdout);
}) */


//SIRVE PARA TENER MAS DETALLES DEL PROCESO QUE SE ESTA EJECUTANDO
let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (dato) => {
    console.log('¿Está muerto?');
    console.log(proceso.killed);
    console.log(dato.toString());
});

proceso.on('exit', () => {
    console.log('el proceso ha terminado');
    console.log('¿Está muerto?');
    console.log(proceso.killed);
});

proceso.on('close', () => {
    console.log('el proceso ha terminado');
    console.log('¿Está muerto?');
    console.log(proceso.killed);
});