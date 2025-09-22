// Explain what Promises are and why they are used.
// Show how to create a Promise.
// Show how to handle success and error using .then() and .catch().
// Show how .finally() works.
// Provide a working example of your own (write the code during the recording).
// Do not use any pre-written code – write it live in the video.



// let promise= new Promise((resolve,reject)=>{

// })

function fetchdata(){
    return new Promise((res,rej)=>{
        if(false){
            res("sucess")
        }
        else{
            rej("reject")
        }
    })
}

fetchdata()
.then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{
    console.log("completed")
})

