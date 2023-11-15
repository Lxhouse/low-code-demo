import { configureStore } from '@reduxjs/toolkit';
import countReducer from './count';
import todoReducer, { ITodoStateInteface } from './todo';
export interface stateType {
	count: number;
	todo: ITodoStateInteface[];
}
export default configureStore<stateType>({
	reducer: {
		count: countReducer,
		todo: todoReducer,
	},
});
