"use strict";
(function () {
    // Uso de Let y Const
    // const nombre = 'Ricardo Tapia';
    // const edad = 23;
    // Resolucion
    // const PERSONAJE = {
    //   nombre: nombre,
    //   edad: edad
    // };
    // console.info(PERSONAJE);
    // Cree una interfaz que sirva para validar el siguiente objeto
    // const batman = {
    //   nombre: 'Bruno Díaz',
    //   artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
    // }
    // Resolucion
    // interface Hero {
    //   nombre: string;
    //   artesMarciales: string[];
    // }
    // const batman: Hero = {
    //   nombre: 'Bruno Díaz',
    //   artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
    // }
    // console.info(batman);
    // Convertir esta funcion a una funcion de flecha
    // function resultadoDoble( a, b ){
    //   return (a + b) * 2
    // }
    // Resolucion
    // const resultadoDoble = ( a: number, b: number) => (a + b) * 2;
    // console.log(resultadoDoble(7, 6));
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    // function getAvenger( nombre, poder, arma ){
    //   var mensaje;
    //   if( poder ){
    //     mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
    //   }else{
    //     mensaje = nombre + ' tiene un ' + poder
    //   }
    // };
    // Resolucion
    // function getAvenger( nombre: string, poder?: string, arma:string = 'arco'){
    //   const mensaje = poder ? nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma : nombre + ' tiene un ' + poder;
    //   console.info(mensaje);
    // };
    // getAvenger('Spiderman', 'trepar paredes');
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
    // Resolucion
    var Rectangulo = /** @class */ (function () {
        function Rectangulo(base, altura) {
            var _this = this;
            if (base === void 0) { base = 0; }
            if (altura === void 0) { altura = 0; }
            this.base = base;
            this.altura = altura;
            this.getArea = function () { return _this.base * _this.altura; };
        }
        return Rectangulo;
    }());
    var rec1 = new Rectangulo(40, 10);
    var area = rec1.getArea();
    console.info(area);
})();
