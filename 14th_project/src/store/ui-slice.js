import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name: 'ui-slice',
    initialState: {
        isShoppingCartVisible: false,
    },
    reducers: {
        toggleShoppingCart(state) {
            state.isShoppingCartVisible = !state.isShoppingCartVisible;
        }
    }
});

export const uiSliceActions = uiSlice.actions;
export default uiSlice;