/** @format */

import React, { useState } from "react";
import List from "./List";

export default function Form() {
	const [item, setItem] = useState({ items: [], text: "" });

	function handleChange(event) {
		if (event.target.value)
			setItem({ items: item.items, text: event.target.value });
	}

	function handleClick(event) {
		event.preventDefault();
		if (item.text === "") {
			return alert("Type your next article");
		} else {
			setItem({
				items: item.items.concat(item.text),
				text: "",
			});
		}
	}

	function handleRemove(itemName) {
		console.log(itemName);
	}

	return (
		<>
			<div>
				<button className="btn btn-outline-primary">
					Items: <strong>{item.items.length}</strong>
				</button>
			</div>
			<br />
			<div className="Form input-group mb-3">
				<button
					className="btn btn-outline-primary"
					type="button"
					onClick={handleClick}
				>
					<strong>Add</strong>
				</button>
				<input
					type="text"
					className="form-control"
					autoFocus={true}
					value={item.text}
					onChange={handleChange}
				/>
			</div>
			<List list={item} onRemove={handleRemove} />
		</>
	);
}
