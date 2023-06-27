import React from "react";

export const Search = () => {
	return (
		<form>
			<input
				placeholder="Search order #"
				className="w-20 sm:w-96 rounded-full bg-slate-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 mr-0 sm:mr-6 sm:focus:w-90"
			/>
		</form>
	);
};
