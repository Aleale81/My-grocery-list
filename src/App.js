/** @format */
import React, { useState } from "react";
import "./App.css";
import NewItem from "./NewItem";
import Title from "./Title";
import List from "./List";

const food = [
	{ emoji: "🍒" },
	{ emoji: "🥦" },
	{ emoji: "🍌" },
	{ emoji: "🥩" },
	{ emoji: "🥐" },
	{ emoji: "🍎" },
	{ emoji: "🍺" },
	{ emoji: "🥑" },
	{ emoji: "🧀" },
	{ emoji: "🍭" },
];

const App = () => {
	const [items, setItems] = useState([]);
	const [animation, setAnimation] = useState({ play: false });

	const addItemHandler = (item) => {
		setItems((prevItems) => {
			return [item, ...items];
		});
		setAnimation({ play: true });
	};

	const removeHandler = (itemRemoved) => {
		console.log(itemRemoved);

		const itemIndex = items.indexOf(itemRemoved);
		console.log(itemIndex);
		setItems(
			items.filter((itemRemoved) => items.indexOf(itemRemoved) !== itemIndex)
		);
		setAnimation({ play: false });
	};

	return (
		<div className="App">
			<div className="container mt-3">
				<Title items={items} foodEmoji={food} animation={animation} />
				<NewItem onAddItem={addItemHandler} />
				<List items={items} onRemove={removeHandler} />
			</div>
		</div>
	);
};

export default App;
