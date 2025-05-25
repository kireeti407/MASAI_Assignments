import { useEffect } from "react"

export default function ProfileCard({props}){

    function change(e){
        let name=e.target.name
        let value=e.target.value
        props.setProfile({...props.count,[name]:value})
    }
    function submit(){
        props.setData(prev=>[...prev,props.count])
        props.setProfile({name:'',age:'',bio:''})
        console.log(props.data)
    }

    return(
        <div style={{display:"flex",flexDirection:"column"}}>
            <label>Name</label>
            <input type="text" name="name" onChange={change} value={props.count.name}/><br/>
            <label>age</label>
            <input type="number" name="age" onChange={change} value={props.count.age}/><br/>
            <label>Bio</label>
            <textarea name="bio" id="" onChange={change} value={props.count.bio}></textarea><br/>
            <button onClick={submit}>Submit</button>
        </div>
    )
}