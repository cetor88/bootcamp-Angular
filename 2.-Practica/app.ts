(function () {

    let saluda =  function(numero: number, cadena: string ) {
        console.log( cadena );
    }
    
    saluda(1, "Hola mundo de nuevo");

    let mensaje = "La Manzana es:";
    if (true){
        mensaje = mensaje  + " < jugosa que la Piña";
    }

    console.log(mensaje);

    })();