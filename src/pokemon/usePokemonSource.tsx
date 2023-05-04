import { useReducer, useCallback, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
interface Pokemon {
	id: number;
	name: string;
	type: string[];
	hp: number;
	attack: number;
	defense: number;
	special_attack: number;
	special_defense: number;
	speed: number;
}

type PokemonState = {
	search: string;
};

type PokemonAction = { type: 'setSearch'; payload: string };

export function usePokemonSource(): {
	pokemon: Pokemon[];
	search: string;
	setSearch: (search: string) => void;
} {
	const [{ search }, dispatch] = useReducer(
		(state: PokemonState, action: PokemonAction) => {
			switch (action.type) {
				case 'setSearch':
					return { ...state, search: action.payload };
			}
		},
		{
			search: '',
		}
	);

	const { data: pokemon } = useQuery<Pokemon[]>(
		['pokemon'],
		() => fetch('/pokemon.json').then((res) => res.json()),
		{ initialData: [] }
	);
	const setSearch = useCallback((search: string) => {
		dispatch({ type: 'setSearch', payload: search });
	}, []);

	const filteredPokemon = useMemo(
		() =>
			pokemon
				.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
				.slice(0, 20),
		[pokemon, search]
	);

	const sortedPokemon = useMemo(
		() => [...filteredPokemon.sort((a, b) => a.name.localeCompare(b.name))],
		[filteredPokemon]
	);

	return { pokemon: sortedPokemon, search, setSearch };
}
