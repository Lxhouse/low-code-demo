import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '@/store/count';
import { stateType } from '@/store';

interface propType {}
const CountReduxDemo: React.FC<propType> = () => {
	const count = useSelector<stateType>((state) => state.count) as number;
	const dispatch = useDispatch();
	return (
		<div>
			<div>
				count:<span>{count}</span>
			</div>
			<div onClick={() => dispatch(increase())}>+1</div>
			<div onClick={() => dispatch(decrease())}>-1</div>
		</div>
	);
};

export default CountReduxDemo;
