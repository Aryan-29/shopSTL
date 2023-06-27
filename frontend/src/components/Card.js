import React from "react";
import ipod from "./airpod.jpg";
import "./card.css";
export const Card = () => {
	return (
		<div>
			<div className="grid grid-cols-4 gap-4">
				<div className="w-64 rounded overflow-hidden shadow-lg">
					<img className="w-64 h-28" src={ipod} alt="Sunset in the mountains" />
					<div className="px-6 py-2 leading-3 flex justify-between ...">
						<div className="font-bold text-sm">AirPods Max</div>
						<div>
							<i class="fa-solid fa-indian-rupee-sign"></i>
							<span>699</span>
						</div>
					</div>
					<div className="flex px-5 pb-2 justify-between ...">
						<div>
							<ion-icon name="star-outline"></ion-icon>
							<span className="font-light text-base">
								<strong>4.9</strong> rating {537}
							</span>
						</div>
					</div>
					<div className="px-5 pb-3">
						<button className="bg-main hover:bg-second text-white font-bold py-1 px-4 rounded-full">
							Add to Cart
						</button>
					</div>
				</div>

				<div className="w-64 rounded overflow-hidden shadow-lg">
					<img className="w-64 h-28" src={ipod} alt="Sunset in the mountains" />
					<div className="px-6 py-2 leading-3 flex justify-between ...">
						<div className="font-bold text-sm">AirPods Max</div>
						<div>
							<i class="fa-solid fa-indian-rupee-sign"></i>
							<span>699</span>
						</div>
					</div>
					<div className="flex px-5 pb-2 justify-between ...">
						<div>
							<ion-icon name="star-outline"></ion-icon>
							<span className="font-light text-base">
								<strong>4.9</strong> rating {537}
							</span>
						</div>
					</div>
					<div className="px-5 pb-3">
						<button className="bg-main hover:bg-second text-white font-bold py-1 px-4 rounded-full">
							Add to Cart
						</button>
					</div>
				</div>

				<div className="w-64 rounded overflow-hidden shadow-lg">
					<img className="w-64 h-28" src={ipod} alt="Sunset in the mountains" />
					<div className="px-6 py-2 leading-3 flex justify-between ...">
						<div className="font-bold text-sm">AirPods Max</div>
						<div>
							<i class="fa-solid fa-indian-rupee-sign"></i>
							<span>699</span>
						</div>
					</div>
					<div className="flex px-5 pb-2 justify-between ...">
						<div>
							<ion-icon name="star-outline"></ion-icon>
							<span className="font-light text-base">
								<strong>4.9</strong> rating {537}
							</span>
						</div>
					</div>
					<div className="px-5 pb-3">
						<button className="bg-main hover:bg-second text-white font-bold py-1 px-4 rounded-full">
							Add to Cart
						</button>
					</div>
				</div>

				<div className="w-64 rounded overflow-hidden shadow-lg">
					<img className="w-64 h-28" src={ipod} alt="Sunset in the mountains" />
					<div className="px-6 py-2 leading-3 flex justify-between ...">
						<div className="font-bold text-sm">AirPods Max</div>
						<div>
							<i class="fa-solid fa-indian-rupee-sign"></i>
							<span>699</span>
						</div>
					</div>
					<div className="flex px-5 pb-2 justify-between ...">
						<div>
							<ion-icon name="star-outline"></ion-icon>
							<span className="font-light text-base">
								<strong>4.9</strong> rating {537}
							</span>
						</div>
					</div>
					<div className="px-5 pb-3">
						<button className="bg-main hover:bg-second text-white font-bold py-1 px-4 rounded-full">
							Add to Cart
						</button>
					</div>
				</div>

				<div className="w-64 rounded overflow-hidden shadow-lg">
					<img className="w-64 h-28" src={ipod} alt="Sunset in the mountains" />
					<div className="px-6 py-2 leading-3 flex justify-between ...">
						<div className="font-bold text-sm">AirPods Max</div>
						<div>
							<i class="fa-solid fa-indian-rupee-sign"></i>
							<span>699</span>
						</div>
					</div>
					<div className="flex px-5 pb-2 justify-between ...">
						<div>
							<ion-icon name="star-outline"></ion-icon>
							<span className="font-light text-base">
								<strong>4.9</strong> rating {537}
							</span>
						</div>
					</div>
					<div className="px-5 pb-3">
						<button className="bg-main hover:bg-second text-white font-bold py-1 px-4 rounded-full">
							Add to Cart
						</button>
					</div>
				</div>
			</div>
		</div>

		// <section className="setion-meals">
		// 	<div className="container grid grid--3-cols">
		// 		<div className="meal">
		// 			<img src={ipod} className="meal-img" alt="Sunset in the mountains" />
		// 			<div className="meal-content">
		// 				<p className="meal-title">ipod</p>
		// 				<ul className="meal-attributes">
		// 					<li className="meal-attribute">
		// 						<ion-icon className="meal-icon" name="star-outline"></ion-icon>
		// 						<span>
		// 							<strong>4.9</strong> rating {537}
		// 						</span>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 		</div>
		// 		<div className="meal">
		// 			<img src={ipod} className="meal-img" alt="Sunset in the mountains" />
		// 			<div className="meal-content">
		// 				<p className="meal-title">ipod</p>
		// 				<ul className="meal-attributes">
		// 					<li className="meal-attribute">
		// 						<ion-icon className="meal-icon" name="star-outline"></ion-icon>
		// 						<span>
		// 							<strong>4.9</strong> rating {537}
		// 						</span>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 		</div>
		// 	</div>
		// </section>
	);
};
