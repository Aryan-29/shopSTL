import React from "react";
import { useState } from "react";
export const Viewproduct = () => {
	const [counter, setCounter] = useState(0);

	const incrementCounter = () => {
		setCounter(counter + 1);
		console.log(counter);
	};

	const decrementCounter = () => {
		if (counter !== 0) {
			setCounter(counter - 1);
		}
	};
	return (
		<div>
			<section class="text-gray-700 body-font overflow-hidden bg-white">
				<div class="container px-5 py-24 mx-auto">
					<div class="lg:w-4/5 mx-auto flex flex-wrap">
						<img
							alt="ecommerce"
							class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
							src=""
						/>
						<div class="lg:w-1/2 w-full lg:pl-10  mt-6 lg:mt-0">
							<div class="rounded-lg border-2 border-three ... shadow-lg bg-white p-6 shadow-md md:mt-0 md:w-full">
								<h1 className="font-bold ... text-xl ... leading-loose">
									AirPods Max
								</h1>
								<p className="text-sm">
									Experience High Fidelity audio and the best comfort with
									Airpods Max.
								</p>
								<span class="flex items-center">
									<svg
										fill="currentColor"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										class="w-4 h-4 "
										viewBox="0 0 24 24"
									>
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
									</svg>
									<svg
										fill="currentColor"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										class="w-4 h-4 "
										viewBox="0 0 24 24"
									>
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
									</svg>
									<svg
										fill="currentColor"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										class="w-4 h-4 "
										viewBox="0 0 24 24"
									>
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
									</svg>
									<svg
										fill="currentColor"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										class="w-4 h-4 "
										viewBox="0 0 24 24"
									>
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
									</svg>
									<svg
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										class="w-4 h-4 "
										viewBox="0 0 24 24"
									>
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
									</svg>
									<span class="text-gray-600 ml-3">4 Reviews</span>
								</span>
							</div>

							<div class="rounded-lg border-2 border-three ... shadow-lg bg-white p-6 shadow-md md:mt-1 md:w-full">
								<h1 className="font-bold ... text-xl ... leading-loose p-6">
									Price: $4.99
								</h1>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div class="flex flex-row h-10 w-1/2 rounded-lg relative bg-transparent mt-1">
									<button
										onClick={decrementCounter}
										data-action="decrement"
										class=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
									>
										<span class="m-auto text-2xl font-thin">−</span>
									</button>
									<input
										type="number"
										class="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
										name="custom-input-number"
										value={counter}
										id="counting"
									></input>

									<button
										onClick={incrementCounter}
										data-action="increment"
										class="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
									>
										<span class="m-auto text-2xl font-thin">+</span>
									</button>
								</div>
								<div className="pt-3">
									<p>Only 10 items left! Don't Miss it</p>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div className="px-5 pb-3">
									<button className="bg-main hover:bg-second text-white font-bold py-1 px-4 rounded-full">
										Buy Now
									</button>
								</div>
								<div className="px-2 pb-3 sm:ml-16">
									<button className="bg-main hover:bg-second text-white font-bold py-1 px-5 rounded-full">
										Add To Cart
									</button>
								</div>
							</div>
						</div>
						<div class="flex flex-wrap mt-2">
							<button class=" mr-9 text-black bg-white border-2 border-three ... py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
								<i class="fa-solid fa-truck-moving"></i> Get it by tomorrow
							</button>

							<button class="ml-9 text-black bg-white border-2 border-three ... py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
								<i class="fa-solid fa-square-caret-left"></i> Free 30 Days
								return
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
