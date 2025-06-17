const { Calculadora } = require("./Calculadora");
const { Pokemon } = require("./pokemon");


let name= "eduardo";
var apellido ="carrillo";
const edad= 50;
let sueldo= 50.5;
let carreras ={// Object
    tsu:"informatica",
    ing:"informatica",
    lcd:"matematicas"
}

if(edad>=50){
    console.log("viejo");
} else if (edad >=30 && edad<50){
    console.log(`vas bien ${carreras}` );
}else{
    console.log("estudia");
}

const calculadora = new Calculadora();
console.log("suma de 5+7:", calculadora.suma(5,7))
console.log("resta de 10-7:", calculadora.resta(10,7))
const{a, b, resultado}= calculadora.multiplicacion(5,7)
console.log(`las propiedades de la aplicacion son ${a} ${b} , y su resultado es ${resultado}`)

//arreglos
console.log("logs de operaciones");
console.log(calculadora.getresultados());
//metodo find
let lista = calculadora.getresultados();
let busquedad =lista.find((x)=>{
    if (x.id==4){
         return true
    }
});
console.log(busquedad)
//
let indiice =lista.findindex((x)=>{
    if (x.id==4){
        return true
    }
});
console.log("indice de la busqueda: ",indice)
//actualizar datos
listap[indice]={
    id:4,
    operacion: "division",
    valora:5,
    valorb:7,
    resultado:5/7,
}
console.log ("indice de la busqueda: ",indice,lista)
//eliminar datos
let eliminado =lista.splice(0,2);
console.log("elimiinado:", eliminado)
console.log("nueva lista: ",lista)
//arreglo
les newlist = lista.map((x) => {
    return {id: x.id, op: x.operacion }

})
console.log("nueva lista estructurada : ", newlist)
//pokemon
console.log("consumo de api rest ")
const poke = new Pokemon ();
poke.getOne("pikachu");
