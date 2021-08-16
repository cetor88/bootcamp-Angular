var bootInit = (function () {
    var Alumno = /** @class */ (function () {
        /*nombre: string;
        appPaterno: string;
        appMaterno: string
        edad: number;*/
        function Alumno(nombre, appPaterno, appMaterno, edad, egresado) {
            if (edad === void 0) { edad = 18; }
            if (egresado === void 0) { egresado = true; }
            this.nombre = nombre;
            this.appPaterno = appPaterno;
            this.appMaterno = appMaterno;
            this.edad = edad;
            this.egresado = egresado;
        }
        return Alumno;
    }());
    var alumno = new Alumno("Juan", "Ramirez");
    console.log(alumno);
    document.getElementById('nombre').innerText = 'Nombre: ' + alumno.nombre;
    document.getElementById('appPat').innerText = 'Apellido Paterno: ' + alumno.appPaterno;
    document.getElementById('appMat').innerText = 'Apellido Materno: ' + alumno.appMaterno;
    document.getElementById('edad').innerText = 'Edad: ' + alumno.edad;
    document.getElementById('egresado').innerText = 'Egresado: ' + alumno.egresado;
});
bootInit();
