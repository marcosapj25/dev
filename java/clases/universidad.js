const {cursos } = require("../bd/cursos");
const { estudiantes} = require("../bd/estudiantes");

class Universidad{

    estudiantes=[];
    cursos=[];
    constructor(){
        this.estudiantes=estudiantes;
        this.cursos=cursos;
    }

    agregar_estudiante =(estudiante={nombre:"",apellido:"",sexo:""})=>{
        this.estudiantes.push(estudiante);//agrega un elemento en js en arreglo
    }

    consultar_un_estudiante = (id)=>{
        return this.estudiantes.find((elemento)=>elemento.id=id);

    }
    consultar_estudintes =()=>{
        return this.estudiantes;
    }
    actualizar_estudiante = (id,estudiante={id:0, nombre:"",apellido:"", sexo:""})=>{//
        return this.estudiantes;    
    }


    //funciones de flecha
    total_estudiantes =()=>{//cantidad de estudiantes
        return this.estudiantes.length;    
    }
    //funciones de flecha 
    total_cursos =()=>{//cantidad de cursos 
        return this.cursos.length;    
    }
  
} 
module.exports={
    Universidad
}