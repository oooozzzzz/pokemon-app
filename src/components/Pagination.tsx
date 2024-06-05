import { Button } from "@headlessui/react";

type PaginationProps = {
	nextPage: string;
	prevPage: string;
	setCurPage: CallableFunction;
};

export const Pagination = (props: PaginationProps) => {
	return (
		<div className="buttons h-20 mt-4 w-full flex items-center justify-center">
			{props.prevPage && (
				<Button
					onClick={() => {
						props.setCurPage(props.prevPage);
					}}
					className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
				>
					Previous Page
				</Button>
			)}
			{props.nextPage && (
				<Button
					onClick={() => {
						props.setCurPage(props.nextPage);
					}}
					className="rounded mx-2 bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
				>
					Next Page
				</Button>
			)}
		</div>
	);
};
