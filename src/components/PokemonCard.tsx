import { Button, Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { PokemonCardProps } from "../types/data";
import axios from "axios";
import { Description } from "../types/data";

export const PokemonCard = ({ name }: PokemonCardProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [description, setDescription] = useState<Description>({});

	function open() {
		setIsOpen(true);
	}

	function close() {
		setIsOpen(false);
	}

	const handleOpen = () => {
		open();
		axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
			setDescription(res.data);
		});
	};

	return (
		<>
			<Button
				onClick={handleOpen}
				className="inline-flex uppercase font-light text-xl w-44 mt-2 items-center justify-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
			>
				{name}
			</Button>
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={close}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-3xl uppercase font-medium leading-6 text-gray-900"
									>
										{description.name}
									</Dialog.Title>
									<div className="mt-2">
										<p className="text-xl text-gray-500">
											weight: {description.weight} pounds
										</p>
										<p className="text-xl text-gray-500">
											height: {description.height} inches
										</p>
										<img
											className="inline-block size-40"
											src={description.sprites?.front_default}
										/>
										<img
											className="inline-block size-40"
											src={description.sprites?.back_default}
										/>
										<img
											className="inline-block size-40"
											src={description.sprites?.front_shiny}
										/>
										<img
											className="inline-block size-40"
											src={description.sprites?.back_shiny}
										/>
									</div>

									<div className="mt-4">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={close}
										>
											Got it, thanks!
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};
