function otraFuncion() {
    seRompe();
}

function seRompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(function(){
        try {
            return 3 + z;
        } catch (error) {
            console.error('Error en mi funcion asíncrona');
            cb(error);
        }
    },1000);
}

try {
    //otraFuncion();
    seRompeAsincrona((err) => {
        console.log(err.message);
    });
} catch (error) {
    console.error('Vaya, algo se ha roto');
    console.error(error.message);
    console.log('Pero no pasa nada lo hemos capturado');
}

console.log('esto de aqui esta al final');