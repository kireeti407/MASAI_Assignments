export default function Toggle({setColor}){
    const dark=()=>{
        localStorage.setItem("theem","black")
        localStorage.setItem("ftheem","white")
        setColor.setColor("black")
        setColor.fontColor("white")
    }
    const light=()=>{
        localStorage.setItem("theem","white")
        localStorage.setItem("ftheem","black")
        setColor.setColor("white")
        setColor.fontColor("black")
    }
    console.log(setColor)
    return (
        <>
                <button onClick={dark}>Dark</button>
                <button onClick={light}>light</button>
        </>
    )
}