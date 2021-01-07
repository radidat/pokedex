import './App.css';
import {NavBar} from './components/Nav';
import CardPokemon from './components/CardPokemon.jsx'
import React, {useEffect, useState} from 'react'
import DetailPoke from './components/PokemonDetail';
import ContextPokemon from './context/Context'
import {NewPokemonCard} from './components/NewPokemonCard'
import {HashRouter, Switch, Route} from 'react-router-dom'
function App() {
   
  return (
    <HashRouter>


<div className="App">
<ContextPokemon>
<NavBar></NavBar>

<div class='container-poke'>
<div className='newPokemon'>
   <NewPokemonCard></NewPokemonCard>
    </div>
<Switch>
<Route exact path="/" component={Home} />
<Route exact path='/detail/:id'  component={DetailPoke}></Route>
</Switch>
</div>
</ContextPokemon>
</div>

</HashRouter>



   
    
  )
}
function Home(){
  const [pokemons, setPokemons] = useState([]); 

  useEffect(()=>{ 
    const fetchData = async function(){ 
      try{
          const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50"); 
          if(response.status ===204){
            return null;
              }
          const responseData = await response.json();
      if(response.ok){ 
       setPokemons(responseData.results)
    
    }
  
    }
    catch(error){
    console.log('we encountred an error '+ error)
    }
   
    }
    fetchData()
   
    },[])

  
  return (<>
    {pokemons.map(pokemon =>
        <CardPokemon key={pokemon.name} 
        name={pokemon.name} url={pokemon.url}/>)
      }</>)
}

export default App;
