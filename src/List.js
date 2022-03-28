/** @format */

import React from "react";
import Checkbox from "./Checkbox";

const List = (props) => {
	return (
		<div className="List">
			<ul>
				{props.items.map((item, index) => (
					<li key={index}>
						<Checkbox item={item} onRemove={props.onRemove} />
					</li>
				))}
			</ul>
		</div>
	);
};
export default List;
