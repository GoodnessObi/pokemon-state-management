import React, { createContext, useContext } from 'react';
import { usePokemonSource } from './usePokemonSource';

const PokemonContext = createContext<ReturnType<typeof usePokemonSource>>(
	{} as unknown as ReturnType<typeof usePokemonSource>
);

type PokemonProviderProps = {
	children: React.ReactNode;
};

// const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
const PokemonProvider = ({ children }: { children: React.ReactNode }) => {
	return (
		<PokemonContext.Provider value={usePokemonSource()}>
			{children}
		</PokemonContext.Provider>
	);
};

function usePokemon() {
	return useContext(PokemonContext);
}

export { PokemonContext, usePokemon, PokemonProvider };
