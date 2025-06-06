import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice"
import productReducer from "../features/productSlice";
import logger from "redux-logger"
const store=configureStore({
    reducer:{
        cart:cartSlice,
        item:productReducer
    },
   
})
export default  store