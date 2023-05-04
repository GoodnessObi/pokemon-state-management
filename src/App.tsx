import PokemonList from './pokemon/PokemonList';
import { PokemonProvider } from './pokemon/PokemonProvider';
import SearchBox from './pokemon/SearchBox';

function App() {
	return (
		<PokemonProvider>
			<div className='mx-auto max-w-3xl'>
				<SearchBox />
				<PokemonList />
			</div>
		</PokemonProvider>
	);
}

export default App;
