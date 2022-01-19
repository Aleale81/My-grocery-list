/** @format */

import React, { useState } from "react";
import List from "./List";

export default function Form() {
	const [item, setItem] = useState({ items: [], text: null });

	function handleChange(event) {
		if (event.target.value !== "")
			setItem({ items: item.items, text: event.target.value });
	}

	function handleClick(event) {
		event.preventDefault();
		if (item.text) {
			return alert("Type your next article");
		} else {
			setItem({ items: item.items.concat(item.text), text: null });
			console.log(item);
		}
	}

	return (
		<>
			<div className="Form input-group mb-3">
				<button
					className="btn btn-outline-primary"
					type="button"
					onClick={handleClick}
				>
					Add
				</button>
				<input
					type="text"
					className="form-control"
					placeholder=""
					autoFocus={true}
					value=""
					onChange={handleChange}
				/>
			</div>

			<List item={item} index={item.length} />
		</>
	);
}
