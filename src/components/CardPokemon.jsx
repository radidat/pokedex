import React, {useState, useEffect} from 'react';
import {Link, useHistory, Route} from 'react-router-dom';
import DetailPoke from './PokemonDetail'


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

 function CardPokemon({url, name,}){
    const [pokemon, setPokemon] =useState({}); 
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const urlPokemon = url;
    
    
// image de chaque pokemon https://pokeres.bastionbot.org/images/pokemon/25.png*/
    useEffect(async()=>{

        setLoading(true)
      try{ 
        const fetchPokemon =  await fetch(urlPokemon); 

        const responseData =  await fetchPokemon.json()
        if(fetchPokemon.status ===200){ 
      // console.log(responseData)
         return  setPokemon(responseData)
        }
        setLoading(false)
      }catch(error){

        console.log('we cant not fetch dataPokemon: '+error)
      }
     
    

    },[])
     
      let pokemonData = Object.assign({},pokemon)
      /*si pokemonData.types est différent à undefined ou null (on veux savoir si les données sont chargés) */
      let type = !pokemonData.types? console.log('chargment'): pokemonData.types[0].type.name;
    
      let id = pokemonData.id; 
      let urlImg = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
      let backgroundColor = typeColor[type];
      
       
      
    return(<article className='poke-card' style ={{backgroundColor: backgroundColor}}>
    <header className='poke-head'> 
   <img src={urlImg} className='poke-img' alt={name}></img>
    </header>
  <div className='poke-body'>
     <h1 className='poke-title'>{name}</h1>
     <p>#{id}</p>
  </div>
  <footer>
    <Link className="btn-info" to={`/detail/${id}`}onClick ={()=>history.push(`/detail/${id}`)}>pokémonPlus </Link>
  </footer>
 
  </article>
   
     
    )
}
export default CardPokemon;