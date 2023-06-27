import React from "react";

export const selectbox = () => {
	return (
		<div>
			<div class="flex ml-6 items-center">
				<span class="mr-3">Size</span>
				<div class="relative">
					<select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
						<option>SM</option>
						<option>M</option>
						<option>L</option>
						<option>XL</option>
					</select>
					<span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
						<svg
							fill="none"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							class="w-4 h-4"
							viewBox="0 0 24 24"
						>
							<path d="M6 9l6 6 6-6"></path>
						</svg>
					</span>
				</div>
			</div>
		</div>
	);
};
