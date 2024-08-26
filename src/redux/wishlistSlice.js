import { createSlice } from "@reduxjs/toolkit";

const whishlistSlice = createSlice({
    name: 'whishlist',
    initialState: [],
    reducers: {
        //actions are provided inside reducers,logic to update the state

        addtoWhishList: (state, action) => {
            state.push(action.payload)
        }

    }
})

export const { addtoWhishList } = whishlistSlice.actions
export default whishlistSlice.reducer;