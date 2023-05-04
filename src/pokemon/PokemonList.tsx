import { usePokemon } from './PokemonProvider';
export default function PokemonList() {
	const { pokemon } = usePokemon();
	return (
		<div>
			{pokemon.map((p) => (
				<div key={p.id}>{p.name}</div>
			))}
		</div>
	);
}
