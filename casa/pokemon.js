const axios = require("axios");
class Pokemon{


    constructor(){

    }

    getOne = async ()=>{
        try{
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/$Pokemon}");
            console.log (response.data);          
        } catch (error) {
            console.error(error);
        }
        
        
        

    }
}

module.exports={
    Pokemon
}