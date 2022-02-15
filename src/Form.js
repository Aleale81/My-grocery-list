/** @format */

import React, { useState } from "react";
import List from "./List";
import { Animate } from "react-simple-animate";

export default function Form() {
	const [item, setItem] = useState({
		quantity: 1,
		unit: "pc",
		items: [],
		text: "",
	});
	const [animation, setAnimation] = useState({ play: false });

	function handleChange(event) {
		const inputValue = { ...item, [event.target.name]: event.target.value };
		setItem(inputValue);
		setAnimation({ play: false });
		console.log(item);
	}

	function handleClick(event) {
		event.preventDefault();
		if (item.text === "") {
			return alert("Type your next article");
		} else {
			setItem({
				quantity: 1,
				unit: "pc",
				items: item.items.concat(item.quantity + item.unit + " " + item.text),
				text: "",
			});
			setAnimation({ play: true });
		}
	}

	function handleRemove(itemName) {
		const itemIndex = item.items.indexOf(itemName);
		setItem({
			quantity: item.quantity,
			unit: item.unit,
			items: item.items.filter(
				(itemName) => item.items.indexOf(itemName) !== itemIndex
			),
			text: "",
		});
		setAnimation({ play: false });
	}
	return (
		<div className="Form pb-1">
			<div className="mb-2">
				<button className="btn btn-danger mb-2">
					{" "}
					<strong>
						<i className="fa-solid fa-cart-shopping"></i> : {item.items.length}
					</strong>
				</button>
				<Animate
					className="d-center"
					play={animation.play}
					start={{
						transform: "translateX(340px)",
					}}
					end={{ transform: "translateX(30px)" }}
				>
					<h3>🍎</h3>
				</Animate>
			</div>

			<div className="Form input-group mb-2">
				<input
					className="form-control"
					name="text"
					type="text"
					autoFocus={true}
					placeholder="Type"
					value={item.text}
					onChange={handleChange}
				/>
				<select
					className="form-select"
					name="unit"
					value={item.unit}
					onChange={handleChange}
				>
					<option value="pc">Pieces</option>
					<option value="g">Grams</option>
					<option value="Kg">Kg</option>
					<option value="L">Liter</option>
				</select>
				<input
					type="number"
					className="form-control"
					value={item.quantity}
					name="quantity"
					onChange={handleChange}
				/>

				<button
					className="btn btn-danger hover-focus-none"
					type="button"
					onClick={handleClick}
				>
					<strong>Add</strong>
				</button>
			</div>
			<List list={item} onRemove={handleRemove} animation={animation} />
		</div>
	);
}
