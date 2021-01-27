import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
	name: 'app',
	initialState: {
		isPresenting: false,
		errors: null
	},
	reducers: {
		startPresenting: (state) => {
            console.log('start presenting')
			state.isPresenting = true;
		},
		setError: (state, action) => {
            console.log('error')
			state.errors = action.payload;
			state.isPresenting = false;
		}
	}
});

export default appSlice.reducer;

const { startPresenting, setError } = appSlice.actions;

export const startPresentingScreen = () => async (dispatch) => {
    dispatch(startPresenting());
    
    setTimeout(() => {
        setError({message: 'Some error'})
    }, 3000)
};
