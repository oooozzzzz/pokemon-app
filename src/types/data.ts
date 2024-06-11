export interface PokemonCardProps {
	name: string;
}

export type PokemonType = {
	id: number;
	name: string;
	base_experience?: number;
};

export type Sprites = {
	front_default: string;
	back_default?: string;
	front_shiny?: string;
	back_shiny?: string;
};

export type Description = {
	name?: string | null;
	weight?: number | null	;
	height?: number | null;
	sprites?: Sprites | null;
};

export type PokemonListProps = {
	// pokemonsList: Array<PokemonType>;
	// curPage: string,
	// setPokemonsList: CallableFunction;
	// setPrevPage: CallableFunction;
	// setNextPage: CallableFunction;
};