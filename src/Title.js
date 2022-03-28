/** @format */

import React from "react";
//import { Animate } from "react-simple-animate";

const Title = (props) => {
	console.log(props.emojiId);
	return (
		<div className="mb-4">
			<button className="btn btn-danger">
				<strong>
					<i className="fa-solid fa-cart-shopping"></i> : {props.items.length}
				</strong>
			</button>
			<h1 className="text-center m-5 d-inline">Grocery List</h1>
			<button className="btn btn-danger ms-2">
				{props.foodEmoji[props.emojiId].emoji}
			</button>
		</div> //	<Animate
		//		className="d-center"
		//		play="true"
		//		start={{
		//			transform: "translateX(340px)",
		//		}}
		//		end={{ transform: "translateX(30px)" }}
		//	>
		//		<h3>🍎</h3>
		//	</Animate>
	);
};
export default Title;
