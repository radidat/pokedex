import pokemonBall from '../image/pokeball.png';
import {Link} from 'react-router-dom';
import {Search} from './Search'
 export function NavBar(){

    return(<>
    <header className='header'>
    <div className='pokeBall'>
<Link to ='/'><img src={pokemonBall} alt='pokeball' className='home'></img></Link>
    </div>
    <Search></Search>
    </header>
      </>
    )
}
