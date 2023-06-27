import React from "react";

export const Cart = () => {
	return (
		<div>
			<div class="h-screen bg-gray-100 pt-20">
				<h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
				<div class="mx-auto max-w-7xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
					<div class="rounded-lg md:w-full ">
						<div class="justify-between mb-6 rounded-lg bg-white p-6 border-2 border-three ... shadow-lg  sm:flex sm:justify-start">
							<img
								src=""
								alt="product-image"
								class="w-full rounded-lg sm:w-40"
							/>

							<div class="sm:ml-4 sm:flex sm:w-full sm:justify-evenly ...">
								<div class="mt-5 sm:mt-0">
									<h2 class="text-md font-bold text-gray-900">
										Wireless Earbuds
									</h2>
									<p class="mt-1 text-xs text-gray-700">Samsung</p>
								</div>
								<div className="grid grid-cols-2 gap-4">
									<div class="mt-4 grid grid-cols-2 gap-4 sm:mt-0 sm:ml-2">
										<div>
											<label
												for="country"
												class="text-lg font-medium leading-6 text-gray-900"
											>
												Quantity
											</label>
											<div class="mt-2">
												<select
													id="country"
													name="country"
													autocomplete="country-name"
													class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
												>
													<option>1</option>
													<option>2</option>
													<option>3</option>
												</select>
											</div>
										</div>
										<div>
											<label
												for="country"
												class="text-sm font-medium leading-6 text-gray-900"
											>
												Price
											</label>
											<p class="text-sm">259.000 ₭</p>
										</div>
									</div>
									<div className="w-full ml-5">
										<button class="bg-three w-full hover:bg-gray text-white font-bold py-2 px-4 rounded-md">
											Remove Item
										</button>
									</div>
								</div>
							</div>
						</div>
						{/* new items add here */}
					</div>

					{/* total price */}
					<div class="mt-6 h-full rounded-lg border-2 border-three ... shadow-lg bg-white p-6 shadow-md md:mt-0 md:w-1/3">
						<div class="mb-2 flex justify-between">
							<p class="text-gray-700">Total Price: </p>
							<p class="text-gray-700">$129.99</p>
						</div>
						<div class="flex justify-between">
							<p class="text-gray-700">Shipping Cost</p>
							<p class="text-gray-700">$4.99</p>
						</div>
						{/* <hr class="my-4" /> */}
						<div class="flex justify-between pt-3">
							<p class="text-lg font-bold">Total</p>
							<div class="">
								<p class="mb-1 text-lg font-bold">$134.98 USD</p>
								<p class="text-sm text-gray-700">including VAT</p>
							</div>
						</div>
						<button class="mt-6 w-full rounded-md bg-main py-1.5 font-medium text-blue-50 hover:bg-second">
							Make Payment
						</button>
						<div class="mt-6 flex justify-center text-center text-sm text-gray-500">
							<p>
								or
								<button
									type="button"
									class="font-medium text-sm hover:text-main ml-1"
								>
									Continue Shopping
									<span aria-hidden="true"> &rarr;</span>
								</button>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
