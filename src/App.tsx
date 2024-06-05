import { useState } from "react";
import { Pagination } from "./components/Pagination";
import { PokemonList } from "./components/PokemonList";
import { Header } from "./components/Header";

function App() {
	const [curPage, setCurPage] = useState<string>(
		"https://pokeapi.co/api/v2/pokemon/"
	);

	const [pokemonsList, setPokemonsList] = useState([]);
	const [nextPage, setNextPage] = useState<string>("");
	const [prevPage, setPrevPage] = useState<string>("");

	return (
			<div className="wrapper w-full min-h-screen bg-slate-400">
				<Header />
				<div className="container mx-auto max-w-6xl ">
					<div className=" content w-full  flex flex-col justify-start items-center bg-slate-400">
						<PokemonList
							curPage={curPage}
							setPokemonsList={setPokemonsList}
							pokemonsList={pokemonsList}
							setNextPage={setNextPage}
							setPrevPage={setPrevPage}
						/>
						<Pagination
							setCurPage={setCurPage}
							nextPage={nextPage}
							prevPage={prevPage}
						/>
					</div>
				</div>
			</div>
	);
}

export default App;
