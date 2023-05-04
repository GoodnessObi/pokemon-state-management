import PokemonList from './pokemon/PokemonList';
import { PokemonProvider } from './pokemon/PokemonProvider';

function App() {
	return (
		<div>
			<PokemonProvider>
				<PokemonList />
			</PokemonProvider>
		</div>
	);
}

export default App;
