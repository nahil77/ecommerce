import {createSlice} from "@reduxjs/toolkit";

const initialState = {
   data :[],
}

const productSlice = createSlice({
    name : "productSlice",
    initialState,
    reducers :{
        getProducts : ( state, action) => {
            state.data = action.payload
        }
    }
});

export const {getProducts} = productSlice.actions;
export default productSlice.reducer;