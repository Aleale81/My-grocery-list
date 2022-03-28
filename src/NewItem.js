/** @format */

import React from "react";
import Form from "./Form";

const NewItem = (props) => {
	const saveItemDataHandler = (newItemData) => {
		const itemData = {
			...newItemData,
		};
		props.onAddItem(itemData);
	};

	return (
		<div>
			<Form onSaveItemData={saveItemDataHandler} />
		</div>
	);
};
export default NewItem;
