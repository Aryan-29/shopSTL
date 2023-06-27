import React from "react";

export const Categorynew = () => {
	return (
		<div className="grid grid-cols-6 gap-4 pt-10">
			<div className="px-8 text-base ">
				<select className="bg-three" id="select-where" required>
					<option value="">Type</option>
					<option value="friends">friendsand family</option>
					<option value="youtube">youtube</option>
					<option value="podcast">podcast</option>
					<option value="ad">ad</option>
					<option value="other">other</option>
				</select>
			</div>

			<div className="px-8 text-base ">
				<select className="bg-three" id="select-where" required>
					<option value="">Price</option>
					<option value="friends">friendsand family</option>
					<option value="youtube">youtube</option>
					<option value="podcast">podcast</option>
					<option value="ad">ad</option>
					<option value="other">other</option>
				</select>
			</div>

			<div className="px-8 text-base ">
				<select className="bg-three" id="select-where" required>
					<option value="">Review</option>
					<option value="friends">friendsand family</option>
					<option value="youtube">youtube</option>
					<option value="podcast">podcast</option>
					<option value="ad">ad</option>
					<option value="other">other</option>
				</select>
			</div>

			<div className="px-8 text-base ">
				<select className="bg-three" id="select-where" required>
					<option value="">Colour</option>
					<option value="friends">friendsand family</option>
					<option value="youtube">youtube</option>
					<option value="podcast">podcast</option>
					<option value="ad">ad</option>
					<option value="other">other</option>
				</select>
			</div>

			<div className="px-8 text-base ">
				<select className="bg-three" id="select-where" required>
					<option value="">All filters</option>
					<option value="friends">friendsand family</option>
					<option value="youtube">youtube</option>
					<option value="podcast">podcast</option>
					<option value="ad">ad</option>
					<option value="other">other</option>
				</select>
			</div>

			<div className="px-8 text-base ">
				<select className="bg-three" id="select-where" required>
					<option value="">Sort By</option>
					<option value="friends">friendsand family</option>
					<option value="youtube">youtube</option>
					<option value="podcast">podcast</option>
					<option value="ad">ad</option>
					<option value="other">other</option>
				</select>
			</div>
		</div>
	);
};
