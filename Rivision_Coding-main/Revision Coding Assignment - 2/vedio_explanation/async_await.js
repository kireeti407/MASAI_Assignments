// Explain what async/await is and how it works.
// Explain what try/catch is and why it’s used.
// Show how to handle asynchronous code using async/await with try/catch.
// Compare it briefly with the .then()/.catch() pattern.
// Provide a working example of your own (write the code live in the video).
// Do not use any pre-written code – write it during the recording.

// async function fecthdata(){
//     try{
//         let res=await fetch()
//     }
//     catch{

//     }
//     finally{

//     }
// }

// fetchdata()


function delayfun(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(false){
                res({name:"kireeti",age:21})
            }
            else{
                rej("failed to fetch")
            }
        },2000)
    })
}

async function fetchdata(){
    try{
        let data= await delayfun()
        console.log(data)
    }
    catch(err){
        console.log(err)
    }
    finally{
        console.log("completed")
    }
}

fetchdata()