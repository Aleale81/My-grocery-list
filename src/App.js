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
	const [emojiId, setEmojiId] = useState(0);

	const addItemHandler = (item) => {
		setEmojiId(items.length);
		setItems((prevItems) => {
			return [item, ...items];
		});
	};
	console.log(emojiId);
	console.log(items.length);

	//		if (items.length === 10 && items.length < 20) {
	//			setEmojiId(items.length - 10);
	//		}
	//		if (items.length === 20 && items.length < 30) {
	//			setEmojiId(items.length - 20);
	//		}
	//		if (items.length === 30 && items.length < 40) {
	//			setEmojiId(items.length - 30);
	//		}
	//		if (items.length === 40 && items.length < 50) {
	//			setEmojiId(items.length - 40);
	//		}
	//		if (items.length === 50 && items.length < 60) {
	//			setEmojiId(items.length - 50);
	//		}
	//	};

	return (
		<div className="App">
			<div className="container mt-3">
				<Title items={items} foodEmoji={food} emojiId={emojiId} />
				<NewItem onAddItem={addItemHandler} />
				<List items={items} />
			</div>
		</div>
	);
};

export default App;
