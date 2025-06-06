import TaskSlice from "../features/TaskSlice";
import  {configureStore} from "@reduxjs/toolkit"
export const store=configureStore({
    reducer:{
        AddTask:TaskSlice
    }
})