/** @format */

import React, { useState } from "react";

const Checkbox = (props) => {
	const [checked, setChecked] = useState(false);

	const article = (
		<span>
			<span className="text-capitalize">{props.item.item}, </span>
			<span>{props.item.quantity}</span>
			<small>{props.item.unit} </small>
		</span>
	);
	return (
		<>
			<div className="Checkbox d-flex justify-content-between">
				<div>
					<input
						type="checkbox"
						value={checked}
						onChange={() => setChecked((checked) => !checked)}
					/>
					{"   "}
					{checked ? (
						<span>
							<del>{article}</del>
						</span>
					) : (
						<span>{article}</span>
					)}
				</div>
				<button
					className="btn btn-outline-danger"
					type="button"
					//onClick={() => onRemove(itemName)}
				>
					<i className="fa-solid fa-trash-arrow-up"></i>
				</button>
			</div>
		</>
	);
};
export default Checkbox;
