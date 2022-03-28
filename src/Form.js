/** @format */

import React, { useState } from "react";

const Form = (props) => {
	const [enteredItem, setEnteredItem] = useState("");
	const [enteredUnit, setEnteredUnit] = useState("pc");
	const [enteredQuantity, setEnteredQuantity] = useState("1");

	const OnChangeItem = (event) => {
		setEnteredItem(event.target.value);
	};
	const onChangeUnit = (event) => {
		setEnteredUnit(event.target.value);
	};
	const onChangeQuantity = (event) => {
		setEnteredQuantity(event.target.value);
	};

	function handleSubmit(event) {
		event.preventDefault();

		if (enteredItem.trim() === "") {
			alert("Type your next article!");
		} else {
			const itemData = {
				item: enteredItem,
				unit: enteredUnit,
				quantity: enteredQuantity,
			};
			props.onSaveItemData(itemData);
			setEnteredItem("");
			setEnteredUnit("pcs");
			setEnteredQuantity("1");
		}
	}

	//	function handleRemove(itemName) {
	//		const itemIndex = item.items.indexOf(itemName);
	//		setItem({
	//			quantity: item.quantity,
	//			unit: item.unit,
	//			items: item.items.filter(
	//				(itemName) => item.items.indexOf(itemName) !== itemIndex
	//			),
	//			text: "",
	//		});
	//		setAnimation({ play: false });
	//	}

	return (
		<div className="Form pb-1">
			<form className="Form input-group mb-2" onSubmit={handleSubmit}>
				<input
					className="form-control"
					name="text"
					type="text"
					autoFocus={true}
					placeholder="Type"
					value={enteredItem}
					onChange={OnChangeItem}
				/>
				<select
					className="form-select"
					name="unit"
					value={enteredUnit}
					onChange={onChangeUnit}
				>
					<option value="pc">Pieces</option>
					<option value="g">Grams</option>
					<option value="Kg">Kg</option>
					<option value="L">Liter</option>
				</select>
				<input
					type="number"
					className="form-control"
					min={1}
					max={1000}
					value={enteredQuantity}
					name="quantity"
					onChange={onChangeQuantity}
				/>

				<button className="btn btn-danger hover-focus-none" type="submit">
					<strong>Add</strong>
				</button>
			</form>
		</div>
	);
};
export default Form;
