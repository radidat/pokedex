import React,{createContext, useState} from 'react'


   export const getContext = createContext()

function ContextPokemon({ children}){ 
       const [pokemon, setPokemon] = useState({}); 

    let  handleClick =  async(value)=>{ 
        try{
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}/`); 
            const responseData = await response.json()

            if(response.ok ){
                setPokemon(responseData)
            }

        }catch(error){
          console.log(' une erreur s\'est produite lors de la recherche du pokémon'+error)
        }
          
           
   }

    return(
        <getContext.Provider value ={{handleClick, pokemon}}>
            {children}
        </getContext.Provider>

    )

}


export default ContextPokemon;