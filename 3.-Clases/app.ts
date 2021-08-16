var bootInit =(function () {

    class Alumno{
        /*nombre: string;
        appPaterno: string;
        appMaterno: string
        edad: number;*/

        constructor( public nombre: string, 
            public appPaterno: string, 
            public appMaterno?: string, 
            public edad: number= 18,
            public egresado:boolean= true) {}
        
    }
   
    const alumno = new Alumno("Juan", "Ramirez");

    console.log(alumno);
    document.getElementById('nombre').innerText = 'Nombre: ' + alumno.nombre;
    document.getElementById('appPat').innerText = 'Apellido Paterno: ' + alumno.appPaterno;
    document.getElementById('appMat').innerText = 'Apellido Materno: ' + alumno.appMaterno;
    document.getElementById('edad').innerText = 'Edad: ' + alumno.edad;
    document.getElementById('egresado').innerText = 'Egresado: ' + alumno.egresado;
    
  

});

    bootInit();