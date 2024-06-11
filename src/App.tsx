import { PokemonList } from "./components/PokemonList";
import { Header } from "./components/Header";

function App() {
	return (
		<div className="wrapper w-full min-h-screen bg-slate-400">
			<Header />
			<div className="container mx-auto max-w-6xl ">
				<div className=" content w-full  flex flex-col justify-start items-center bg-slate-400">
					<PokemonList />
				</div>
			</div>
		</div>
	);
}

export default App;
