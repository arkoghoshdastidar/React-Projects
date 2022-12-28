import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cartItem',
    initialState: {
        items: [],
        totalItems: 0,
    },
    reducers: {
        addItem(state, action) {
            const {id, title, price} = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === id);
            
            if(itemIndex !== -1){
                state.items[itemIndex].quantity++;
                state.totalItems++;
                state.items[itemIndex].totalPrice += price;
            }else{
                state.items.push({
                    id: id,
                    title: title,
                    price: price,
                    totalPrice: price,
                    quantity: 1
                });
                state.totalItems++;
            }
        },

        removeItem(state, action) {
            const itemId = action.payload.id;
            state.totalItems--;
            const itemIndex = state.items.findIndex(item => item.id === itemId);
            console.log(itemId);
            state.items[itemIndex].quantity--;
            state.items[itemIndex].totalPrice -= state.items[itemIndex].price;
            state.items = state.items.filter((item) => {
                return item.quantity !== 0;
            });
        }
    }
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice;