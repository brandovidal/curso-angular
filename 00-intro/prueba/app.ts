(()=>{

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
  class Rectangulo {
    constructor(public base: number = 0, public altura: number = 0) {}

    getArea = (): number => this.base * this.altura;
  }

  const rec1 = new Rectangulo(40, 10);
  const area = rec1.getArea();
  console.info(area);

})();