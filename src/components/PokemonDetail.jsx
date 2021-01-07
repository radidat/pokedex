import React, {useState, useEffect}from 'react'; 
import {  useParams} from "react-router-dom";


const typeColor= {
        bug: '#B1C12E',
          dark: '#4F3A2D',
          dragon: '#755EDF',
          electric: '#FCBC17',
          fairy: '#F4B1F4',
          fighting: '#823551D',
          fire: '#E73B0C',
          flying: '#A3B3F7',
          ghost: '#6060B2',
          grass: '#74C236',
          ground: '#D3B357',
          ice: '#A3E7FD',
          normal: '#C8C4BC',
          poison: '#934594',
          psychic: '#ED4882',
          rock: '#B9A156',
          steel: '#B5B5C3',
          water: '#3295F6'
       
        };


function DetailPoke() {
const[poke, setPoke]= useState({});
const[pokeSpecie, setPokeSpecie]=useState({});
        let {id} =  useParams()

        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${id}/`;
        const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;


useEffect(()=>{
fetch(pokemonUrl).then(response=>response.json()).then(data=> setPoke(data)).catch(error=>console.log(error))


fetch(pokemonSpeciesUrl).then(response=>response.json()).then(data=> setPokeSpecie(data)).catch(error=>console.log(error))

},[]);

  const pokeData = !poke? console.log('chargement du pokémon'): poke;
  
  const url = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`
  let type = !pokeData.types? console.log('chargment'): pokeData.types[0].type.name;

  let pokeSpecieData = !pokeSpecie? console.log('chargment'): pokeSpecie;
     const getPokemonSpecie ={...pokeSpecieData}
     
     let descriptions =[]
     /*flavor_text_entries est un array et ses valeurs c'est du string*/
      if(getPokemonSpecie.flavor_text_entries){
        getPokemonSpecie.flavor_text_entries.map((text)=>{
                if(text.language.name==='fr'){ 
                     return descriptions.push(text.flavor_text)
                }
        })
      }
      /*retourne une nouveau tableau avec des valueurs uniques*/
      let NewDescriptions =[...new Set(descriptions)]
console.log(NewDescriptions)
        return(
        <div className ='container card-detail-poke pt-5'>
        <div className='row'>
      <div class='col-md-6'>
     <img src={url} className='poke-img-detail'alt={pokeData.name}></img>

       <div class='poke-detail-text'>
       <p>{pokeData.name}</p>
        <p>#{id}</p>
       </div>
        
      </div>

      <div className='col-md-6'>
       {pokeData.stats && <ProgressBar stats={pokeData.stats} type={type}></ProgressBar> }
     </div>
     
        </div>
        <div class='descriptions'>
         <h1>Descritpion:</h1>
        {NewDescriptions && NewDescriptions.map((text, index)=>{
                return(<div className='text-description'>
              <p key={index}>{text}</p>
                </div>
                )
        })}
        </div>
        </div>)
    
} 


 const ProgressBar =({stats, type})=>{

      const dataStats =  stats.map((stat, index )=>{
       return <Progress key={index} 
             name={stat.stat.name}   stat ={stat.base_stat} type={type}/>})
 
return(<>
{dataStats}
</>)
;
}
const Progress = ({name, stat,type})=>{
       
let  color = typeColor[type];
     return(
        <div className='row '>
      <label className='col-3 label-progress'>{name}:</label>
      <div className= 'col-9'>
      <div className="progress">
        <div className="progress-bar"  role="progressbar"
         style={{width:`${stat}%`, backgroundColor: color}} aria-valuenow="25" aria-valuemin="0"
          aria-valuemax="100">{stat}</div>
          </div>     
      </div>
        </div>
     )   
}
export default DetailPoke;