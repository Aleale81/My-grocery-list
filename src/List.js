/** @format */

import React from "react";
import Checkbox from "./Checkbox";

export default function List(props) {
	console.log(props);

	return (
		<>
			<div className="List">
				<ul>
					{props.item.items.map(function (item, index) {
						return (
							<li key={index}>
								<Checkbox item={item} />
							</li>
						);
					})}
				</ul>
			</div>
		</>
	);
}
