import { PokemonCard } from "./PokemonCard";
import { PokemonListProps, PokemonType } from "../types/data";
import axios from "axios";
import { useEffect } from "react";

export const PokemonList = (props: PokemonListProps) => {
	useEffect(() => {
		axios.get(props.curPage).then((res) => {
			props.setNextPage(res.data.next);
			props.setPrevPage(res.data.previous);
			props.setPokemonsList(res.data.results);
		});
	}, [props.curPage]);
	return (
		<>
			<div className="grid md:grid-cols-4 grid-cols-2 mt-16 md:mt-6 gap-1">
				{props.pokemonsList.map((pokemon: PokemonType) => {
					return <PokemonCard key={pokemon.id} name={pokemon.name} />;
				})}
			</div>
		</>
	);
};
