import { produce } from 'immer';
import { useState } from 'react';
const ImmerDemoe = () => {
	const [info, setInfo] = useState({ name: 'lxxx', age: 20 });
	const changeAge = () => {
		// setInfo({ ...info, age: 22 });
		setInfo(
			produce((info) => {
				info.age = 100;
			})
		);
	};
	return (
		<>
			<div>{JSON.stringify(info)}</div>
			<button onClick={changeAge}>修改年龄</button>
		</>
	);
};

export default ImmerDemoe;
