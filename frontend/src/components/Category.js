import React from "react";
import "./style.css";
export const Category = () => {
	return (
		<div className="px-8 text-base ">
			{/* <label for="select-where">where did you hear from us?</label> */}
			<select id="select-where" required>
				<option value="">Category</option>
				<option value="friends">friendsand family</option>
				<option value="youtube">youtube</option>
				<option value="podcast">podcast</option>
				<option value="ad">ad</option>
				<option value="other">other</option>
			</select>
		</div>
	);
};
