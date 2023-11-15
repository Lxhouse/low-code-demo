import { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stateType } from '@/store';
import { ITodoStateInteface, addThings, removeThings, changeThingState } from '@/store/todo';
import styles from './index.module.less';
import { Button } from 'antd';
import cls from 'classnames';

interface propsType {}
const TodoDemo: FC<propsType> = () => {
	const todList = useSelector<stateType>((state) => state.todo) as ITodoStateInteface[];
	const dispatch = useDispatch();

	return (
		<div>
			<h1>TodoList</h1>
			{todList.map((e) => {
				return (
					<ul className={styles.todoItemWarp} key={e?.id}>
						<li>{e?.id}</li>
						<li className={cls({ [styles['isDelete']]: e?.isComplete })}> {e?.title}</li>
						<Button type="dashed" danger onClick={() => dispatch(removeThings({ id: e?.id }))}>
							remove
						</Button>
						<Button type="primary" onClick={() => dispatch(changeThingState({ id: e?.id }))}>
							update
						</Button>
					</ul>
				);
			})}
			<Button onClick={() => dispatch(addThings([{ id: new Date().getTime(), title: `${new Date().toString()}新增标题`, isComplete: false }]))}>
				add
			</Button>
		</div>
	);
};

export default TodoDemo;
