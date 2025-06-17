const readline = require("readline");
const colrs = require('colors');
const { Universidad } = require("./clases/universidad");
/*const estudiantes = require('./bd/estdiantes');
const {cursos} = requiere("./bd/cursos")*/

console.log("Hola Mundo")
var nombre="rosa";//string
let apellido= "hernandez";//string
let edad =20;//entero
const pi=3.14;//constante
let estudiantes=[]; //arreglo
if (edad>18){
let nombre="arenas"
console.log ("La persona: ",nombre, "es mayor de edad")
}else if (edad>=0 && edad,19){
    console.log("La persona es menor de edad")
}else{
    console.log("La persona no tiene edad logica")
}
let persona={
nombre:"angela",
apellido:"nieves",
}//objeto
/*console.log(persona)
console.log(persona.nombre)
//arreglos

persona={
    nombre:"alfredo",
    apellido:"mendoza"
}
estudiantes.push(persona)
console.log(estudiantes)*/
let universidad = new Universidad();
console.log("Estdiantes en la universidad:", universidad.total_estudiantes());
//agregar estudiante
universidad.actualizar_estudiante({
    id:1,
    nombre:"Samuel",
    apellido:"mosquera",
    
})