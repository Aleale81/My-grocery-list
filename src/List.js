/** @format */

import React from "react";

export default function List(props) {
	console.log(props);
	return (
		<div className="List">
			<>
				<ul>
					{props.item.items.map(function (item, index) {
						return <li key={index}>{item}</li>;
					})}
				</ul>
			</>
		</div>
	);
}
