function fetchUserData(){
    return new Promise((res,rej)=>{
        if(true){
            setTimeout(()=>{
                res({ id: 1, name: "John Doe", role: "Admin" })

            },2000)
        }
        else{
            rej("failed to fetch")
        }
    })
}

fetchUserData()
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{
    console.log("Fetch attempt complete")
})


