/** @format */

import React from "react";
import { Animate } from "react-simple-animate";

const Title = (props) => {
	const addEmojiId = (emojiId) => {
		if (emojiId >= 10 && emojiId < 20) {
			return emojiId - 10;
		}
		if (emojiId >= 20 && emojiId < 30) {
			return emojiId - 20;
		}
		if (emojiId >= 30 && emojiId < 40) {
			return emojiId - 30;
		}
		if (emojiId >= 40 && emojiId < 50) {
			return emojiId - 40;
		} else {
			return emojiId;
		}
	};

	return (
		<div className="mb-4">
			<button className="btn btn-danger">
				<strong>
					<i className="fa-solid fa-cart-shopping"></i> : {props.items.length}
				</strong>
			</button>
			<h1 className="text-center m-2 d-inline">Grocery List</h1>

			<Animate
				play={props.animation}
				start={{
					transform: "translateX(10px)",
				}}
				end={{ transform: "translateX(330px)" }}
			>
				<span className="emoji">
					{props.foodEmoji[addEmojiId(props.items.length)].emoji}
				</span>
			</Animate>
		</div>
	);
};
export default Title;
