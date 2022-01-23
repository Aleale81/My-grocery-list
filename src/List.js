/** @format */

import React from "react";
import Checkbox from "./Checkbox";

export default function List({ list, onRemove }) {
	console.log(list);
	return (
		<div className="List">
			<ul>
				{list.items.map((item, index) => (
					<li key={index}>
						<Checkbox itemName={item} onRemove={onRemove} />
					</li>
				))}
			</ul>
		</div>
	);
}
