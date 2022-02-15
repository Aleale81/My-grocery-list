/** @format */

import React, { useState } from "react";

export default function Checkbox({ itemName, onRemove }) {
	const [checked, setChecked] = useState(false);
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
							<del>{itemName}</del>
						</span>
					) : (
						<span>{itemName}</span>
					)}
				</div>
				<button
					className="btn btn-outline-danger"
					type="button"
					onClick={() => onRemove(itemName)}
				>
					<i className="fa-solid fa-trash-arrow-up"></i>
				</button>
			</div>
		</>
	);
}
