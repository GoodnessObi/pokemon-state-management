import PokemonList from './pokemon/PokemonList';
import { PokemonProvider } from './pokemon/PokemonProvider';
import SearchBox from './pokemon/SearchBox';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<PokemonProvider>
				<div className='mx-auto max-w-3xl'>
					<SearchBox />
					<PokemonList />
				</div>
			</PokemonProvider>
		</QueryClientProvider>
	);
}

export default App;
