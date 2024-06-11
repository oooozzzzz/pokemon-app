import { PokemonCard } from "./PokemonCard";
import { PokemonType } from "../types/data";
import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";

export const PokemonList = () => {
	const [pokemonsList, setPokemonsList] = useState([]);
	const [nextPage, setNextPage] = useState<string>("");
	const [prevPage, setPrevPage] = useState<string>("");
	// const [offset, setOffset] = useState<number>(0);
	// const [limit, setLimit] = useState<number>(20);
	const [curPage, setCurPage] = useState<string>(
		"https://pokeapi.co/api/v2/pokemon/"
	);

	useEffect(() => {
		axios.get(curPage).then((res) => {
			setPokemonsList(res.data.results);
			setPrevPage(res.data.previous);
			setNextPage(res.data.next);
		});
	}, [curPage]);
	return (
		<>
			<div className="grid md:grid-cols-4 grid-cols-2 mt-16 md:mt-6 gap-1">
				{pokemonsList.map((pokemon: PokemonType) => {
					return <PokemonCard key={pokemon.id} name={pokemon.name} />;
				})}
			</div>
			<Pagination
				setCurPage={setCurPage}
				nextPage={nextPage}
				prevPage={prevPage}
			/>
		</>
	);
};
