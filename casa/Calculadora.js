class Calculadora{
    constructor(){

    }

    suma = (a,b)=>{
        let resulatdo = {
            operacion: "suama",
            valora: a,
            valorb: b,
            resultado: a + b 
        }
        this.resulatdos.push(resulatdo)
        return a+b;
    }

    resta(a,b){
        let resulatdo = {
            operacion: "resta",
            valora: a,
            valorb: b,
            resultado: a - b 
        }
        this.resulatdos.push(resulatdo)
        return a-b;
    }

    multiplicacion = (a,b)=>{
        let resulatdo = {
            operacion: "multiplicacion",
            valora: a,
            valorb: b,
            resultado: a * b 
        }
        this.resulatdos.push(resulatdo)
        return{
            a,
            b,
            resultado:a*b
        }

    }
    getresultados =()=>{
        return this.resulatdos;
    }
}

module.exports={
    Calculadora
}