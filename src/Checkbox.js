/** @format */

import React, { useState } from "react";

export default function Checkbox(props) {
	const [checked, setChecked] = useState(false);

	return (
		<>
			<div className="Checkbox">
				<input
					type="checkbox"
					value={checked}
					onChange={() => setChecked((checked) => !checked)}
				/>{" "}
				{checked ? (
					<span>
						<del>{props.item}</del>
					</span>
				) : (
					<span>{props.item}</span>
				)}
			</div>
		</>
	);
}
