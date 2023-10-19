function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a);
        } catch (e) {
            callback(e);
        }
    }, 1000);
}

asincrona((err, dato) => {
    if (err) {
        console.log('Tenemos un error');
        console.log(err.message);
        return false;
        //throw err; // no sirve en funciones asincronas
    }
    console.log('Todo ha ido bien. mi data es', dato);
});