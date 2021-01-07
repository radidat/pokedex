import{useContext} from 'react'
import {getContext} from '../context/Context'
import {Link, useHistory} from 'react-router-dom';
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

 export function NewPokemonCard(){
   
    const {pokemon}= useContext(getContext);
   
    let allNewsPokemons =[]   
    const newPokemon ={...pokemon};
    if(!newPokemon){
        return null;
       }else{
        allNewsPokemons.push(newPokemon)
       }
           console.log(pokemon) 

           let type = !newPokemon.types? console.log('chargment'): newPokemon.types[0].type.name;
    
           let id = newPokemon.id; 
           let name = newPokemon.name
         
        let urlImg = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
           let backgroundColor = typeColor[type];

      return (<>
      {Object.entries(pokemon).length !== 0 && 
      <Card urlImg = {urlImg}
      name={name}
      id={id}
      backgroundColor={backgroundColor}
      ></Card>}
      </>)

}
function Card({name, urlImg, id, backgroundColor}){

    const history = useHistory();
    return(
        <article className='poke-card' style ={{backgroundColor: backgroundColor}}>
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