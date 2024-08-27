import { createSlice } from "@reduxjs/toolkit";

const whishlistSlice = createSlice({
    name: 'whishlist',
    initialState: [],
    reducers: {
        //actions are provided inside reducers,logic to update the state

        addtoWhishList: (state, action) => {
            state.push(action.payload)
        },

        //to remove item from state

        removeFromWishlist: (state, action) => {
            return state.filter(item => item.id != action.payload)
        }

    }
})

export const { addtoWhishList,removeFromWishlist } = whishlistSlice.actions
export default whishlistSlice.reducer;