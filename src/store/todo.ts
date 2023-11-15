import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ITodoStateInteface {
	id: number | string;
	title: string;
	isComplete: boolean;
}
const INIT_STATE: ITodoStateInteface[] = [
	{
		id: 1,
		title: '事件1',
		isComplete: false,
	},
	{
		id: 2,
		title: '事件2',
		isComplete: true,
	},
];

export const todoSlice = createSlice({
	name: 'todo',
	initialState: INIT_STATE,
	reducers: {
		addThings(state: ITodoStateInteface[], actions: PayloadAction<ITodoStateInteface[]>) {
			return [...actions.payload, ...state];
		},
		removeThings(state: ITodoStateInteface[], actions: PayloadAction<{ id: number }>) {
			const { id: removeId } = actions.payload || {};
			return state.filter((e) => e?.id !== removeId);
		},
		changeThingState(state: ITodoStateInteface[], actions: PayloadAction<{ id: number }>) {
			const { id: changeId } = actions.payload || {};
			return state.map((e) => ({ ...e, isComplete: e?.id === changeId ? !e?.isComplete : e?.isComplete }));
		},
	},
});

export const { addThings, removeThings, changeThingState } = todoSlice.actions;
export default todoSlice.reducer;
