function fetchUser(){
  return new Promise((resolve,reject)=>{
    setTimeout(function() {
      resolve({ id: 1, name: "Jane Doe" })
    }, 1500);
  })
}
function fetchPosts(userId){
   return new Promise((resolve,reject)=>{
    setTimeout(function() {
      let arr = [
              { postId: 101, title: "Post One" },
              { postId: 102, title: "Post Two" }
            ]
      resolve(arr)
    }, 2000);
  })
}
async function getUserAndPosts(){
  try{
    let userDetails = await fetchUser()
    let userId = userDetails.id 
    let posts = await fetchPosts(userId)
    let Output = {user:userDetails,Posts:posts}
    console.log(Output)
  }catch(error){
    conosle.log(`Error : ${error}`)
  }finally{
    console.log("All data fetched successfully")
  }
}
getUserAndPosts()


