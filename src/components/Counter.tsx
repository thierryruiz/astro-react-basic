import { useState } from 'react';
import { Button } from "@mui/material";

import './Counter.css';

const Counter = ({
	children,
	count: initialCount,
}: {
	children: JSX.Element;
	count: number;
}) => {
	const [count, setCount] = useState(initialCount);
	const add = () => setCount((i) => i + 1);
	const subtract = () => setCount((i) => i - 1);

	return (
		<>
			<div className="counter">
				<Button variant="contained" onClick={subtract}>-</Button>
				<pre>{count}</pre>
				<Button variant="contained" onClick={add}>+</Button>
			</div>
			<div className="counter-message">{children}</div>
		</>
	);
}

export default Counter ;

