import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import axios from "axios"
import Edit from "../Private/Edit"
export const Project=createAsyncThunk("Project/details",async()=>{
    let res=await axios("https://jobportal-ac517-default-rtdb.asia-southeast1.firebasedatabase.app/Projects.json")
    let item=Object.entries(res.data).map(([id,e])=>{
        return {id:id,...e}
    })
    return item
})
export const addProject=createAsyncThunk("Project/Add",async(data)=>{
    let res=await axios.post("https://jobportal-ac517-default-rtdb.asia-southeast1.firebasedatabase.app/Projects.json",data)
    return res.data
})
export const deleteProject=createAsyncThunk("Project/delete",async(id)=>{
    let res=await axios.delete("https://jobportal-ac517-default-rtdb.asia-southeast1.firebasedatabase.app/Projects.json",id)
    return 
})
export const editProject=createAsyncThunk("Project/edit",async(item)=>{
  
  let id=item.id
  let obj=Object.entries(item)
  obj.shift()
  item = Object.fromEntries(obj)
  let res= await axios.patch(`https://jobportal-ac517-default-rtdb.asia-southeast1.firebasedatabase.app/Projects/${id}.json`,item)

  return res.data
})

const ProjectSlice= createSlice({
    name:"Project",
    initialState:{data:[],loading:false,error:null,editDetails:{}},
    extraReducers:(builder)=>{
        builder
            .addCase(Project.fulfilled,(state,action)=>{
                state.loading=false
                state.data=action.payload
            })
            .addCase(Project.pending,(state)=>{
                state.loading=true
            })
            .addCase(Project.rejected,(state,action)=>{
                state.loading=false
                state.error=action.payload
            })

            .addCase(editProject.fulfilled,(state,action)=>{
                state.loading=false
                console.log(action.payload,"dnfdngdn")
                // let id=action.meta.arg.id
                // let inde=state.data.findIndex((e)=>e.id==id)
                // if(inde>-1) state.data.splice(inde,1)
            })
            .addCase(editProject.pending,(state)=>{
                state.loading=true
            })
            .addCase(editProject.rejected,(state,action)=>{
                state.loading=false
                state.error=action.payload
            })

            .addCase(addProject.pending, (state) => {
              state.loading = true;
            })
            .addCase(addProject.fulfilled, (state, action) => {
              state.loading = false;
              
            })
            .addCase(addProject.rejected, (state, action) => {
              state.loading = false;
              state.error = action.error.message;
            })

            .addCase(deleteProject.pending, (state) => {
              state.loading = true;
            })
            .addCase(deleteProject.fulfilled, (state, action) => {
              state.loading = false;
              let id=action.meta.arg
              let inde=state.data.findIndex((e)=>e.id==id)
              if(inde>-1) state.data.splice(inde,1)
              return state
            })
            .addCase(deleteProject.rejected, (state, action) => {
              state.loading = false;
              state.error = action.error.message;
            });

    },
    reducers:{
      EDIT:(state,action)=>{
        state.editDetails=action.payload
        return state
      }
    }
})
export const {EDIT}=ProjectSlice.actions
export default ProjectSlice.reducer