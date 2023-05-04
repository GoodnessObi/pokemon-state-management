import PokemonList from './pokemon/PokemonList';
import { PokemonProvider } from './pokemon/PokemonProvider';
import SearchBox from './pokemon/SearchBox';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet, ReactLocation, Router } from '@tanstack/react-location';
import PokemonDetail from './pokemon/PokemonDetail';

const queryClient = new QueryClient();
const location = new ReactLocation();

const routes = [
	{
		path: '/',
		element: (
			<>
				<SearchBox />
				<PokemonList />
			</>
		),
	},
	{
		path: '/pokemon/:id',
		element: <PokemonDetail />,
	},
];

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<PokemonProvider>
				<Router location={location} routes={routes}>
					<div className='mx-auto max-w-3xl'>
						<Outlet />
					</div>
				</Router>
			</PokemonProvider>
		</QueryClientProvider>
	);
}

export default App;
