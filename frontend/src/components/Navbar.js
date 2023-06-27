import React from "react";
import { Link } from "react-router-dom";

import { Search } from "./Search";
import { Category } from "./Category";
import { Poster } from "./Poster";

export const Navbar = () => {
	return (
		<div>
			<header className="flex gap-4 flex-row ... ">
				<Link to="/" className="logo">
					ShopSTL
				</Link>
				<Category />
				<Search />

				<button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-5 border border-gray-400 rounded shadow">
					Signup/Login
				</button>
				<button>
					<i className="w-12 fa-sharp fa-solid fa-cart-shopping "></i>
					<span>Cart</span>
				</button>
			</header>
			{/* <Poster /> */}
		</div>
	);
};
