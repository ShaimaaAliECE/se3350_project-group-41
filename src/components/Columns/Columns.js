import React, { useState } from 'react';
import './Columns.css';

// randomly generates the table with 10 numbers

let nums = [];
for (let i = 0; i < 10; i++) {
	let a = Math.floor(Math.random() * 20 + 1);
	nums.push(a);
}

function Columns(props) {
	const [array, setArray] = useState(nums);

	return (
		<div className="row">
			{array.map((contact) => (
				<div className="col" key={contact.index}>
					{contact}
				</div>
			))}
		</div>
	);
}

export default Columns;
