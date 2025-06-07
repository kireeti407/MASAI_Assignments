import { configureStore } from "@reduxjs/toolkit";
import ProjectFeature from "../features/ProjectSlice"
import logger from "redux-logger"
export const store= configureStore({
    reducer:{
        Project:ProjectFeature
    },
    middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(logger);
    }
})