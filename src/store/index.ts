import { configureStore } from '@reduxjs/toolkit';
import countReducer from './count';
export interface stateType {
	count: number;
}
export default configureStore<stateType>({
	reducer: {
		count: countReducer,
	},
});
